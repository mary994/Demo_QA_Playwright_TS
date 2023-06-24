import { Page } from "@playwright/test";

export default class FormsPage {


    constructor(public page: Page) {

    }

    async clickOnPracticeForms() {
        
      await   this.page.getByText('Practice Form').click();

        
    }
   
}