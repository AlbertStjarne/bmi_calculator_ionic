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
      page.getPageOneTitleText().then(title => {
        expect(title).toContain('calculator');
      });
    });

    it('fill in form', () => {
      page.fillInForm(72, 182);
      expect(page.results_card_header()).toContain('BMI Calulation');
      // expect(page.results_card_content()).toContain('Gender: female, Age: 20  Result: Poor');
      expect(page.results_card_content()).toContain('BMI: 21.74, You are Normal');
  });
  });
});