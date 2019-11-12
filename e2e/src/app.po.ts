import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  navigateToLocation(location: string) {
    return browser.get(location) as Promise<any>;
  } 

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getPlayersTitleText() {
    return element(by.css('app-players h2')).getText() as Promise<string>;
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
    return element(by.css('app-players h2')).getText() as Promise<string>;
  }

  getAddPlayerButton() {
    return element(by.buttonText('Add Player'));
  }

}
