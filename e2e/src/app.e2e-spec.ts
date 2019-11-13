import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    // page.navigateToLocation("/dashboard");
    expect(page.getTitleText()).toEqual('Golf Matcher');
  });

  it('should display dashboard',() => {
    page.navigateToLocation('/dashboard');
    expect(page.getTitleText()).toEqual('Golf Matcher');
  });

  it ('sidebar button should be clickable',() => {
    page.getSidebarButton().click();
  });

  it ('splash img should exist',() => {
    expect(page.getSplashImage().isPresent()).toBe(true);
  });

  it('should display dashboard link',() => {
    page.navigateToLocation('/dashboard');
    expect(page.getDashboardLink()).toBeDefined;
  });

  it ('should display players link',() => {
    page.navigateToLocation('/dashboard');
    expect(page.getPlayersLink()).toBeDefined;
  });

  it ('should display teams link',() => {
    page.navigateToLocation('/dashboard');
    expect(page.getTeamsLink()).toBeDefined;
  });

  it ('should display handicaps link',() => {
    page.navigateToLocation('/dashboard');
    expect(page.getHandicapsLink()).toBeDefined;
  });

  it ('should display schedule link',() => {
    page.navigateToLocation('/dashboard');
    expect(page.getScheduleLink()).toBeDefined;
  });

  it ('should display scores link',() => {
    page.navigateToLocation('/dashboard');
    expect(page.getScoresLink()).toBeDefined;
  });

  it ('should display leaderboard link',() => {
    page.navigateToLocation('/dashboard');
    expect(page.getLeaderboardLink()).toBeDefined;
  });

  it ('should display players title',() => {
    page.navigateToLocation('/players');
    expect(page.getPlayersTitleText()).toEqual('Players');
  });

  // it ('players add player should be clickable',() => {
  //   page.navigateToLocation('/players');
  //   page.getAddPlayerButton().click();
  // });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
