import { RebillPage } from './app.po';

describe('rebill App', function() {
  let page: RebillPage;

  beforeEach(() => {
    page = new RebillPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
