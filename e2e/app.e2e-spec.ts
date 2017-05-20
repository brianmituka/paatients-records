import { PatientsPage } from './app.po';

describe('patients App', () => {
  let page: PatientsPage;

  beforeEach(() => {
    page = new PatientsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
