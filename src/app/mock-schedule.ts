/**
 * Schedule datasource
 */

import {Appointment} from './schedule/schedule';

export let scheduleData: Appointment[] = [
    {
        Id: "1",
        Subject: 'Team One vs Team Two',
        StartTime: new Date(2019, 10, 24, 9, 30),
        EndTime: new Date(2019, 10, 24, 11, 0)
    }, 
    {
        Id: "2",
        Subject: 'Team 3 vs Team 4',
        StartTime: new Date(2019, 10, 25, 12, 0),
        EndTime: new Date(2019, 10, 25, 14, 0)
    }, 
    {
        Id: "1o3rVxZOdq62GZkhlKJj",
        Subject: 'Team 1 vs Team 4',
        StartTime: new Date(2019, 10, 25, 9, 30),
        EndTime: new Date(2019, 10, 25, 11, 0)
    }
];
