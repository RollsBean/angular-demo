import { NgDemo2Page } from './app.po';

describe('ng-demo2 App', function() {
  let page: NgDemo2Page;

  beforeEach(() => {
    page = new NgDemo2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
