import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, MonthService } from '@syncfusion/ej2-angular-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { scheduleData } from '../mock-schedule';
// import { ScheduleService } from '../schedule.service';
import { Appointment } from './schedule';

@Component({
  selector: 'app-schedule',
  providers: [DayService, WeekService, MonthService],
  // specifies the template string for the Schedule component
  templateUrl: `./schedule.component.html`
})

export class ScheduleComponent {

  schedule: Appointment[];

  public readonly: boolean = true;
  private calendarId: string = 'n7l99v2rdg890od1jec386fa40@group.calendar.google.com';
  private publicKey: string = 'AIzaSyBdDGhasKTCRmyGJe79iY-V5ZH-cnL-kBg';
  private dataManger: DataManager = new DataManager({
    url: 'https://www.googleapis.com/calendar/v3/calendars/' + this.calendarId + '/events?key=' + this.publicKey,
    adaptor: new WebApiAdaptor,
    crossDomain: true
  });
  public eventSettings: EventSettingsModel = { dataSource: this.dataManger };

  onDataBinding(e: { [key: string]: Object }): void {
    let items: { [key: string]: Object }[] = (e.result as { [key: string]: Object }).items as { [key: string]: Object }[];
    let scheduleData: Object[] = [];
    if (items.length > 0) {
      for (let i: number = 0; i < items.length; i++) {
        let event: { [key: string]: Object } = items[i];
        let when: string = (event.start as { [key: string]: Object }).dateTime as string;
        let start: string = (event.start as { [key: string]: Object }).dateTime as string;
        let end: string = (event.end as { [key: string]: Object }).dateTime as string;
        if (!when) {
          when = (event.start as { [key: string]: Object }).date as string;
          start = (event.start as { [key: string]: Object }).date as string;
          end = (event.end as { [key: string]: Object }).date as string;
        }
        scheduleData.push({
          Id: event.id,
          Subject: event.summary,
          StartTime: new Date(start),
          EndTime: new Date(end),
          IsAllDay: !(event.start as { [key: string]: Object }).dateTime
        });
      }
    }
    e.result = scheduleData;
  }

  // public eventSettings: EventSettingsModel = {
  //   dataSource: scheduleData,
  //   allowEditing: false,
  //   allowAdding: false,
  //   allowDeleting: false
  // };

  // constructor(private scheduleService: ScheduleService) {
  //   this.getSchedule();

  //   scheduleData.forEach(value => { console.debug(value) });
  // }

  // getSchedule(): void {
  //   this.scheduleService.getSchedule()
  //     .subscribe(schedule => {
  //       this.schedule = schedule;

  //       console.log("Loaded schedule from database");
  //       this.schedule.forEach(value => { console.debug(value) })
  //       // this.eventSettings.dataSource = schedule;
  //     });
  // }
}