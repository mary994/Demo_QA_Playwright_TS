import { Page } from "@playwright/test";

export default class ElementsPage {


    constructor(public page: Page) {

    }

    async clickOnWebTables() {
        
      await   this.page.getByText('Web Tables').click();

        
    }
    async clickOnBrokenlinks() {
        
      await  this.page.getByText('Broken Links - Images').click();

   }
}