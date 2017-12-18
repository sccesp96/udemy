import { EjemplosPage } from './app.po';

describe('ejemplos App', function() {
  let page: EjemplosPage;

  beforeEach(() => {
    page = new EjemplosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
