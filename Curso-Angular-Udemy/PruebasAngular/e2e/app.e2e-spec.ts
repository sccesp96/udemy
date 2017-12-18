import { PruebasAngularPage } from './app.po';

describe('pruebas-angular App', function() {
  let page: PruebasAngularPage;

  beforeEach(() => {
    page = new PruebasAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
