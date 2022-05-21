import {Injectable, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {SQLite} from "@ionic-native/sqlite/ngx";
import {Platform} from "@ionic/angular";
import {SQLiteObject} from "@ionic-native/sqlite";
import {Club} from "../types/club";
import {User} from "../types/user";

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
    private platform: Platform
  )
  {
    this.databaseConn();
    this.setAutomaticUpdate();
  }

  setAutomaticUpdate() {
    this.afs.collection<User>('User').valueChanges().subscribe(users => {
      this.dbInstance.executeSql(`
        DELETE FROM ${this.dbTable};
        VACUUM;
      `)

      for (let u of users) {
        for (let event of u.pending) {
          if('dayHour' in event) {
            try {
              this.dbInstance.executeSql(`
              INSERT INTO ${this.dbTable} (
                dayHour,
                players,
                ranked,
                ranking,
                img
              ) values (
                ${event.dayHour},
                ${JSON.stringify(event.players)},
                ${event.ranked? "TRUE":"FALSE"},
                ${event.ranking},
                ${event.img}
              );`,
                []);
            } catch (err) {
              alert(err);
            }
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
  }

  getPendingEvents(){

  }
}
