import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  navigateToLocation(location: string) {
    return browser.get(location) as Promise<any>;
  }
  
  getSignOnButton() {
    return element(by.className('sign-out-button.action-button.mat-stroked-button.mat-button-base.mat-warn'));
  }

  getTitleText() {
    return element(by.className('appTitle')).getText() as Promise<string>;
  }

  getSidebarButton() {
    return element(by.buttonText('Sidebar'));
  }

  getSplashImage() {
    return element(by.className('splash-picture'));
  }

  getDashboardPlayersTitle() {
    return element(by.css('h3')).getText() as Promise<string>;
  }

  getDashboardPlayersCount() {
    return element.all(by.css('h4'));
  }

  getDashboardTeamsTitle() {
    return element(by.className('teamsTitle')).getText() as Promise<string>;
  }

  getDashboardTeamsCount() {
    return element.all(by.css('h4'));
  }

  getPlayersTitleText() {
    return element(by.css('app-players h2')).getText() as Promise<string>;
  }

  getDashboardById() {
    return element(by.id('dashboardlink'));
  }

  getDashboardLink() {
    return element(by.css('[routerLink="/dashboard"]'));
  }

  getPlayersLink() {
    return element(by.css('[routerLink="/players"]'));
  }

  getTeamsLink() {
    return element(by.css('[routerLink="/teams"]'));
  }

  getHandicapsLink() {
    return element(by.css('[routerLink="/handicaps"]'));
  }

  getScheduleLink() {
    return element(by.css('[routerLink="/schedule"]'));
  }

  getScoresLink() {
    return element(by.css('[routerLink="/scores"]'));
  }

  getLeaderboardLink() {
    return element(by.css('[routerLink="/leaderboard"]'));
  }

  getPlayersText() {
    // return element(by.css('app-players h2')).getText() as Promise<string>;
    return element(by.css('app-players .header')).getText() as Promise<string>;
  }

  getAddPlayerButton() {
    // return element(by.css('app-players .addPlayerButton')).getText() as Promise<string>;
    return element.all(by.css('button'));
  }

  getEditPlayerButton() {
    return element.all(by.className('editPlayerButton'));
  }

  getDeletePlayerButton() {
    return element.all(by.className('deletePlayerButton'));
  }

  getFindPlayerButton() {
    return element.all(by.className('findButton'));
  }

}
