import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {SQLite} from "@ionic-native/sqlite/ngx";
import {Platform} from "@ionic/angular";
import {SQLiteObject} from "@ionic-native/sqlite";
import {interval} from "rxjs";
import {switchMap} from "rxjs/operators";
import {AuthService} from "./auth.service";
import {Match} from "../types/match";

@Injectable({
  providedIn: 'root'
})
export class PendingEventsService {

  private readonly dbName = 'PendingEvents.db'
  private readonly dbTable = 'PendingEvents'
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
        DELETE FROM ${this.dbTable};
        VACUUM;
      `)

      for (let event of user.pending) {
        if('dayHour' in event) {
          try {
            const query = `
                INSERT INTO ${this.dbTable} (
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

            this.dbInstance.executeSql( query );
          } catch (err) {
            console.log(err);
          }
        }
      }
    });
  }

  async databaseConn() {
    await this.platform.ready();
    this.dbInstance = await this.sqlite.create({name: this.dbName, location: 'default'})
    await this.dbInstance.executeSql(
      `
      CREATE TABLE IF NOT EXISTS ${this.dbTable} (
         dayHour varchar(255),
         players varchar(255),
         ranked INTEGER,
         ranking varchar(255),
         img varchar(255)
      )`, []);

    this.setAutomaticUpdate();
  }

  async _getPendingEvents() {
    const query = `SELECT * FROM '${this.dbTable}';`;
    const res = await this.dbInstance.executeSql(query, [])

    const events: Match[] = [];

    for(let i = 0; i < res.rows.length; i++) {
      const row = res.rows.item(i);
      const event = {
        dayHour: row.dayHour,
        players: JSON.parse(row.players),
        ranked: row.ranked != 0,
        ranking: row.ranking,
        img: row.img
      }

      events.push(event)
    }

    return events;
  }

  getPendingEvents(){
    return interval(500).pipe(
      switchMap( async () => {
        return await this._getPendingEvents();
      })
    );
  }
}
