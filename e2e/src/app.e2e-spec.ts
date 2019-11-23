import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { TestBed } from '@angular/core/testing';
import {SidebarComponent} from '../../src/app/sidebar/sidebar.component';

describe('workspace-project App', () => {
  let page: AppPage;
  let sidebarComponent: SidebarComponent;

  beforeEach(() => {
    page = new AppPage();
  });

  //Dashboard page
//   it('should display title', () => {
//     page.navigateToLocation('/dashboard');
//     expect(page.getTitleText()).toEqual('Golf Matcher');
//   });

//  it ('should display players title',() => {
//     page.navigateToLocation('/dashboard');
//     page.getDashboardPlayersTitle().then(function(text) {
//       expect(text == 'Players');
//     });
//   });

//   it ('should display all players()',() => {
//     page.navigateToLocation('/dashboard');
//     page.getDashboardPlayersCount().count().then(function(count) {
//       expect(count >= 1);
//     });
//   });

//   it ('should display teams title',() => {
//     page.navigateToLocation('/dashboard');
//     page.getDashboardTeamsTitle().then(function(text) {
//       expect(text == 'Teams');
//     });
//   });

//   it ('should display all teams()',() => {
//     page.navigateToLocation('/dashboard');
//     page.getDashboardTeamsCount().count().then(function(count) {
//       expect(count >= 1);
//     });
//   });

//   it('should display dashboard',() => {
//     page.navigateToLocation('/dashboard');
//     expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/dashboard");
//     });

//   it ('sidebar button should control sidebar',() => {
//     page.navigateToLocation('/dashboard');
//     page.getSidebarButton().click();
//     sidebarComponent = new SidebarComponent;
//     expect(sidebarComponent.opened == false);
//     page.getSidebarButton().click();
//     expect(sidebarComponent.opened == true);
//   });

//   it ('splash img should exist',() => {
//     page.navigateToLocation('/dashboard');
//     expect(page.getSplashImage().isPresent()).toBe(true);
//   });

//   it('should display links on dashboard',() => {
//     page.navigateToLocation('/dashboard');
//     expect(page.getDashboardLink()).toBeDefined;
//     expect(page.getPlayersLink()).toBeDefined;
//     expect(page.getTeamsLink()).toBeDefined;
//     expect(page.getHandicapsLink()).toBeDefined;
//     expect(page.getScheduleLink()).toBeDefined;
//     expect(page.getScoresLink()).toBeDefined;
//     expect(page.getLeaderboardLink()).toBeDefined;
//   });

//   //Players page
//   it ('should display players title',() => {
//     page.navigateToLocation('/players');
//     expect(page.getPlayersTitleText()).toEqual('Players');
//   });

//   it('add player button should exist',() => {
//     page.navigateToLocation('/players');
//     browser.waitForAngular().then( function() {
//       page.getAddPlayerButton().count().then(function(count) {
//         expect(count >= 1);
//       });  
//     });
//   });

//   it('edit player button should exist',() => {
//     page.navigateToLocation('/players');
//     browser.waitForAngular().then( function() {
//       page.getEditPlayerButton().count().then(function(count) {
//         expect(count >= 1);
//         });
//       });
//   });

//   it('delete player button should exist',() => {
//     page.navigateToLocation('/players');
//     browser.waitForAngular().then( function() {
//       page.getDeletePlayerButton().count().then(function(count) {
//         expect(count >= 1);
//         });
//       });
//   });

//   it('find player button should exist',() => {
//     page.navigateToLocation('/players');
//     browser.waitForAngular().then( function() {
//       page.getFindPlayerButton().count().then(function(count) {
//         expect(count >= 1);
//         });
//       });
//   });

//   //Add Player Page
//   it('should display add player title',() => {
//     page.navigateToLocation('addplayer');
//     expect(page.getAddPlayerTitleText()).toEqual('Add Player');
//   });

//   it('add player input fields should exist',() => {
//     page.navigateToLocation('/addplayer');
//     browser.waitForAngular().then( function() {
//       page.getAddPlayerInputs().count().then(function(count) {
//         expect(count >= 8);
//         });
//       });
//   });

//   it('add player firstname takes input',() => {
//     page.navigateToLocation('/addplayer');
//     browser.waitForAngular().then( function() {
//       page.getAddPlayerFirstNameInput().sendKeys("First Name");
//       page.getAddPlayerFirstNameInput().getText().then(function(text){
//         expect(text == "First Name");
//       });
//     });
//   });

//   it('add player lastname takes input',() => {
//     page.navigateToLocation('/addplayer');
//     browser.waitForAngular().then( function() {
//       page.getAddPlayerLastNameInput().sendKeys("Last Name");
//       page.getAddPlayerLastNameInput().getText().then(function(text){
//         expect(text == "Last Name");
//       });
//     });
//   });

//   it('add player nickname takes input',() => {
//     page.navigateToLocation('/addplayer');
//     browser.waitForAngular().then( function() {
//       page.getAddPlayerNickNameInput().sendKeys("Nick Name");
//       page.getAddPlayerNickNameInput().getText().then(function(text){
//         expect(text == "Nick Name");
//       });
//     });
//   });

//   it('add player email takes input',() => {
//     page.navigateToLocation('/addplayer');
//     browser.waitForAngular().then( function() {
//       page.getAddPlayerEmailInput().sendKeys("email@email.com");
//       page.getAddPlayerEmailInput().getText().then(function(text){
//         expect(text == "email@email.com");
//       });
//     });
//   });

//   it('add player phone takes input',() => {
//     page.navigateToLocation('/addplayer');
//     browser.waitForAngular().then( function() {
//       page.getAddPlayerPhoneInput().sendKeys("Phone");
//       page.getAddPlayerPhoneInput().getText().then(function(text){
//         expect(text == "Phone");
//       });
//     });
//   });

//   it('add player age takes input',() => {
//     page.navigateToLocation('/addplayer');
//     browser.waitForAngular().then( function() {
//       page.getAddPlayerAgeInput().sendKeys("Age");
//       page.getAddPlayerAgeInput().getText().then(function(text){
//         expect(text == "Age");
//       });
//     });
//   });

//   it('add player handicap takes input',() => {
//     page.navigateToLocation('/addplayer');
//     browser.waitForAngular().then( function() {
//       page.getAddPlayerHandicapInput().sendKeys("Handicap");
//       page.getAddPlayerHandicapInput().getText().then(function(text){
//         expect(text == "Handicap");
//       });
//     });
//   });

//   it('add player league takes input',() => {
//     page.navigateToLocation('/addplayer');
//     browser.waitForAngular().then( function() {
//       page.getAddPlayerLeagueInput().sendKeys("League");
//       page.getAddPlayerLeagueInput().getText().then(function(text){
//         expect(text == "League");
//       });
//     });
//   });

//   //Edit player page
//   it('should display edit player title',() => {
//     page.navigateToLocation('/editplayer');
//     expect(page.getEditPlayerTitleText()).toEqual('Player Edit');
//   });

//   it('edit player input fields should exist',() => {
//     page.navigateToLocation('/editplayer');
//     browser.waitForAngular().then( function() {
//       page.getEditPlayerInputs().count().then(function(count) {
//         expect(count >= 7);
//         });
//       });
//   });

//   it('edit player name takes input',() => {
//     page.navigateToLocation('/editplayer');
//     browser.waitForAngular().then( function() {
//       page.getEditPlayerNameInput().sendKeys("Name");
//       page.getEditPlayerNameInput().getText().then(function(text){
//         expect(text == "Name");
//       });
//     });
//   });

//   it('edit player nickname takes input',() => {
//     page.navigateToLocation('/editplayer');
//     browser.waitForAngular().then( function() {
//       page.getEditPlayerNicknameInput().sendKeys("Nickname");
//       page.getEditPlayerNicknameInput().getText().then(function(text){
//         expect(text == "Nickname");
//       });
//     });
//   });

//   it('edit player email takes input',() => {
//     page.navigateToLocation('/editplayer');
//     browser.waitForAngular().then( function() {
//       page.getEditPlayerEmailInput().sendKeys("email@email.com");
//       page.getEditPlayerEmailInput().getText().then(function(text){
//         expect(text == "email@email.com");
//       });
//     });
//   });

//   it('edit player phone takes input',() => {
//     page.navigateToLocation('/editplayer');
//     browser.waitForAngular().then( function() {
//       page.getEditPlayerPhoneInput().sendKeys("5555555");
//       page.getEditPlayerPhoneInput().getText().then(function(text){
//         expect(text == "5555555");
//       });
//     });
//   });

//   it('edit player age takes input',() => {
//     page.navigateToLocation('/editplayer');
//     browser.waitForAngular().then( function() {
//       page.getEditPlayerAgeInput().sendKeys("33");
//       page.getEditPlayerAgeInput().getText().then(function(text){
//         expect(text == "33");
//       });
//     });
//   });

//   it('edit player handicap takes input',() => {
//     page.navigateToLocation('/editplayer');
//     browser.waitForAngular().then( function() {
//       page.getEditPlayerHandicapInput().sendKeys("18");
//       page.getEditPlayerHandicapInput().getText().then(function(text){
//         expect(text == "18");
//       });
//     });
//   });

//   it('edit player league takes input',() => {
//     page.navigateToLocation('/editplayer');
//     browser.waitForAngular().then( function() {
//       page.getEditPlayerLeagueInput().sendKeys("My League");
//       page.getEditPlayerLeagueInput().getText().then(function(text){
//         expect(text == "My League");
//       });
//     });
//   });

//   //Teams page
//   it ('should display teams title',() => {
//     page.navigateToLocation('/teams');
//     expect(page.getTeamsText()).toEqual('Teams');
//   });

//   it('add team button should exist',() => {
//     page.navigateToLocation('/teams');
//     browser.waitForAngular().then( function() {
//       page.getAddTeamButton().count().then(function(count) {
//         expect(count >= 1);
//       });  
//     });
//   });

//   it('edit team button should exist',() => {
//     page.navigateToLocation('/teams');
//     browser.waitForAngular().then( function() {
//       page.getEditTeamButton().count().then(function(count) {
//         expect(count >= 1);
//         });
//       });
//   });

//   it('delete team button should exist',() => {
//     page.navigateToLocation('/teams');
//     browser.waitForAngular().then( function() {
//       page.getDeleteTeamButton().count().then(function(count) {
//         expect(count >= 1);
//         });
//       });
//   });

//   it('find team button should exist',() => {
//     page.navigateToLocation('/teams');
//     browser.waitForAngular().then( function() {
//       page.getFindTeamButton().count().then(function(count) {
//         expect(count >= 1);
//         });
//       });
//   });

//   //Add Team Page
//   it('should display add team title',() => {
//     page.navigateToLocation('addteam');
//     expect(page.getAddTeamTitleText()).toEqual('Add Team');
//   });

//   it('add team input fields should exist',() => {
//     page.navigateToLocation('/addteam');
//     browser.waitForAngular().then( function() {
//       page.getAddTeamInputs().count().then(function(count) {
//         expect(count >= 8);
//         });
//       });
//   });

//   it('add team name takes input',() => {
//     page.navigateToLocation('/addteam');
//     browser.waitForAngular().then( function() {
//       page.getAddTeamNameInput().sendKeys("Team Name");
//       page.getAddTeamNameInput().getText().then(function(text){
//         expect(text == "Team Name");
//       });
//     });
//   });

//   it('add team record takes input',() => {
//     page.navigateToLocation('/addteam');
//     browser.waitForAngular().then( function() {
//       page.getAddTeamRecordInput().sendKeys("2-0");
//       page.getAddTeamRecordInput().getText().then(function(text){
//         expect(text == "2-0");
//       });
//     });
//   });

//   it('add team league takes input',() => {
//     page.navigateToLocation('/addteam');
//     browser.waitForAngular().then( function() {
//       page.getAddTeamLeagueInput().sendKeys("My League");
//       page.getAddTeamLeagueInput().getText().then(function(text){
//         expect(text == "My League");
//       });
//     });
//   });

//   it('submit team button should exist',() => {
//     page.navigateToLocation('/addteam');
//     browser.waitForAngular().then( function() {
//       page.getSubmitTeamButton().count().then(function(count) {
//         expect(count >= 1);
//         });
//       });
//   });

  //Edit Team
  it('should display edit team title',() => {
    page.navigateToLocation('editteam');
    expect(page.getEditTeamTitleText()).toEqual('Team Edit');
  });

  it('edit team input fields should exist',() => {
    page.navigateToLocation('/editteam');
    browser.waitForAngular().then( function() {
      page.getEditTeamInputs().count().then(function(count) {
        expect(count >= 3);
        });
      });
  });

  it('edit team name takes input',() => {
    page.navigateToLocation('/editteam');
    browser.waitForAngular().then( function() {
      page.getEditTeamNameInput().sendKeys("Team Name");
      page.getEditTeamNameInput().getText().then(function(text){
        expect(text == "Team Name");
      });
    });
  });

  it('edit team record takes input',() => {
    page.navigateToLocation('/editteam');
    browser.waitForAngular().then( function() {
      page.getEditTeamRecordInput().sendKeys("8-2");
      page.getEditTeamRecordInput().getText().then(function(text){
        expect(text == "8-2");
      });
    });
  });

  it('edit team league takes input',() => {
    page.navigateToLocation('/editteam');
    browser.waitForAngular().then( function() {
      page.getEditTeamLeagueInput().sendKeys("My League");
      page.getEditTeamLeagueInput().getText().then(function(text){
        expect(text == "My League");
      });
    });
  });

  it('submit team button should exist',() => {
    page.navigateToLocation('/editteam');
    browser.waitForAngular().then( function() {
      page.getSubmitTeamButton().count().then(function(count) {
        expect(count >= 1);
        });
      });
  });

afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
