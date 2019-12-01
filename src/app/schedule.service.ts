// import { Injectable } from '@angular/core';
// import { Appointment } from './schedule/schedule'
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
// import * as firebase from 'firebase/app';
// // import { Timestamp } from '@firebase/firestore-types';

// @Injectable({
//   providedIn: 'root'
// })
// export class ScheduleService {

//   private scheduleCollection: AngularFirestoreCollection<Appointment>;
//   schedule: Observable<Appointment[]>;

//   constructor(private db: AngularFirestore) {
//     this.scheduleCollection = this.db.collection('Schedule');
//   }

//   getSchedule(): Observable<Appointment[]> {
//     console.log("schedule.service getSchedule");
    
//     this.schedule = this.scheduleCollection.snapshotChanges().pipe(
//       map(actions => actions.map(a => {
//         const data = a.payload.doc.data() as Appointment;
//         Object.keys(data).filter(key => data[key] instanceof firebase.firestore.Timestamp)
//                         .forEach(key => data[key] = data[key].toDate())
//         const Id = a.payload.doc.id;
//         return { Id, ...data };
//       }))
//     );

//     this.schedule.forEach(value => {console.debug(value)})

//     return (this.schedule);
//   }

//   addSchedule(schedule: Appointment) {
//     console.log("ScheduleService add");

//     return this.scheduleCollection.add(schedule);
//   }

//   updateSchedule(schedule: Appointment) {
//     return this.scheduleCollection.doc(schedule.Id).update(Appointment);
//   }

//   deleteSchedule(schedule: Appointment) {
//     return this.scheduleCollection.doc(schedule.Id).delete();
//   }

// }
