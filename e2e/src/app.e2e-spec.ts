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
  it('should display title', () => {
    page.navigateToLocation('/dashboard');
    expect(page.getTitleText()).toEqual('Golf Matcher');
  });

 it ('should display players title',() => {
    page.navigateToLocation('/dashboard');
    page.getDashboardPlayersTitle().then(function(text) {
      expect(text == 'Players');
    });
  });

  it ('should display all players()',() => {
    page.navigateToLocation('/dashboard');
    page.getDashboardPlayersCount().count().then(function(count) {
      expect(count >= 1);
    });
  });

  it ('should display teams title',() => {
    page.navigateToLocation('/dashboard');
    page.getDashboardTeamsTitle().then(function(text) {
      expect(text == 'Teams');
    });
  });

  it ('should display all teams()',() => {
    page.navigateToLocation('/dashboard');
    page.getDashboardTeamsCount().count().then(function(count) {
      expect(count >= 1);
    });
  });

  it('should display dashboard',() => {
    page.navigateToLocation('/dashboard');
    // expect(page.getTitleText()).toEqual('Golf Matcher');
    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/dashboard");
    });

  it ('sidebar button should control sidebar',() => {
    page.navigateToLocation('/dashboard');
    page.getSidebarButton().click();
    sidebarComponent = new SidebarComponent;
    expect(sidebarComponent.opened == false);
    page.getSidebarButton().click();
    expect(sidebarComponent.opened == true);
  });

  it ('splash img should exist',() => {
    page.navigateToLocation('/dashboard');
    expect(page.getSplashImage().isPresent()).toBe(true);
  });

  it('should display links on dashboard',() => {
    page.navigateToLocation('/dashboard');
    expect(page.getDashboardLink()).toBeDefined;
    expect(page.getPlayersLink()).toBeDefined;
    expect(page.getTeamsLink()).toBeDefined;
    expect(page.getHandicapsLink()).toBeDefined;
    expect(page.getScheduleLink()).toBeDefined;
    expect(page.getScoresLink()).toBeDefined;
    expect(page.getLeaderboardLink()).toBeDefined;
  });

  //Players page
  it ('should display players title',() => {
    page.navigateToLocation('/players');
    expect(page.getPlayersTitleText()).toEqual('Players');
  });

  it('add player button should exist',() => {
    page.navigateToLocation('/players');
    browser.waitForAngular().then( function() {
      page.getAddPlayerButton().count().then(function(count) {
        expect(count >= 1);
      });  
    });
  });

  it('edit player button should exist',() => {
    page.navigateToLocation('/players');
    browser.waitForAngular().then( function() {
      page.getEditPlayerButton().count().then(function(count) {
        expect(count >= 1);
        });
      });
  });

  it('delete player button should exist',() => {
    page.navigateToLocation('/players');
    browser.waitForAngular().then( function() {
      page.getDeletePlayerButton().count().then(function(count) {
        expect(count >= 1);
        });
      });
  });

  it('find player button should exist',() => {
    page.navigateToLocation('/players');
    browser.waitForAngular().then( function() {
      page.getFindPlayerButton().count().then(function(count) {
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
