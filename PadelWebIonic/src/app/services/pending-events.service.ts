import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {SQLite} from "@ionic-native/sqlite/ngx";
import {Platform} from "@ionic/angular";
import {SQLiteObject} from "@ionic-native/sqlite";
import {interval} from "rxjs";
import {switchMap} from "rxjs/operators";
import {AuthService} from "./auth.service";
import {Match} from "../types/match";
import {Tournament} from "../types/tournament";

@Injectable({
  providedIn: 'root'
})
export class PendingEventsService {

  private readonly dbName = 'PendingEvents.db'
  private readonly matchTable = 'Match'
  private readonly tournamentTable = 'Tournament'
  private dbInstance: SQLiteObject;

  constructor(
    private afs: AngularFirestore,
    private sqlite: SQLite,
    private platform: Platform,
    private auth: AuthService
  )
  {
    this.databaseConn();
  }

  setAutomaticUpdate() {
    this.auth.user$.subscribe(user => {
      if(user == null) return;

      this.dbInstance.executeSql(`
        DELETE FROM ${this.matchTable};
        VACUUM;
      `)

      this.dbInstance.executeSql(`
        DELETE FROM ${this.tournamentTable};
        VACUUM;
      `)

      console.log("USER UPDATE");

      for (let event of user.pending) {
        try {
          let query;
          if('dayHour' in event) {
            query = `
                INSERT INTO ${this.matchTable} (
                  dayHour,
                  players,
                  ranked,
                  ranking,
                  img
                ) values (
                  '${event.dayHour}',
                  '${JSON.stringify(event.players)}',
                  '${event.ranked? "TRUE":"FALSE"}',
                  '${event.ranking}',
                  '${event.img}'
                );`

          } else {
            query = `
                INSERT INTO ${this.tournamentTable} (
                  name,
                  day,
                  players,
                  ranked,
                  comments,
                  img
                ) values (
                  '${event.name}',
                  '${event.day}',
                  '${event.players}',
                  '${event.ranked? "TRUE":"FALSE"}',
                  '${event.comments}',
                  '${event.img}'
                );`
          }

          this.dbInstance.executeSql(query, []);
        } catch (err) {
          console.log(err);
        }
      }
    });
  }

  async databaseConn() {
    await this.platform.ready();
    this.dbInstance = await this.sqlite.create({name: this.dbName, location: 'default'})
    await this.dbInstance.executeSql(
      `
      CREATE TABLE IF NOT EXISTS ${this.matchTable} (
         dayHour varchar(255),
         players varchar(255),
         ranked INTEGER,
         ranking varchar(255),
         img varchar(255)
      )`, []);

    await this.dbInstance.executeSql(`
      CREATE TABLE IF NOT EXISTS ${this.tournamentTable} (
        name varchar(255),
        day text,
        players INTEGER,
        ranked INTEGER,
        comments varchar(255),
        img varchar(255)
      )`, []);

    this.setAutomaticUpdate();
  }

  private async _getPendingMatches() {
    const query = `SELECT * FROM '${this.matchTable}';`;
    const res = await this.dbInstance.executeSql(query, [])

    const matches: Match[] = [];

    for(let i = 0; i < res.rows.length; i++) {
      const row = res.rows.item(i);
      const match = {
        dayHour: row.dayHour,
        players: JSON.parse(row.players),
        ranked: row.ranked != 0,
        ranking: row.ranking,
        img: row.img
      }

      matches.push(match)
    }

    return matches;
  }

  private async _getPendingTournaments() {
    const query = `SELECT * FROM ${this.tournamentTable}`
    const res = await this.dbInstance.executeSql(query, [])

    const tournaments: Tournament[] = [];

    for(let i = 0; i < res.rows.length; i++) {
      const row = res.rows.item(i);
      const tournament = {
        day: row.day,
        players: row.players,
        ranked: row.ranked != 0,
        img: row.img,
        comments: row.comments,
        name: row.name
      }

      tournaments.push(tournament)
    }

    return tournaments;
  }

  getPendingEvents(){
    return interval(500).pipe(
      switchMap( async () => {
        const events: (Match | Tournament)[] = await this._getPendingMatches();
        events.push(...await this._getPendingTournaments());

        return events;
      })
    );
  }
}
