import { Page } from './app.po';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

      it('should have a title saying calculator', () => {
        expect(page.getTitle()).toContain('Ionic App')
      });

      it('should have a button saying Calculate', () => {
        expect(page.getPageOneButtonText()).toContain('CALCULATE')
      });



    });
  });