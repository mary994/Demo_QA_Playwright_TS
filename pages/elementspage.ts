import { Page } from "@playwright/test";

export default class ElementsPage {


    constructor(public page: Page) {

    }

    async clickOnWebTables() {
        
         this.page.getByText('Web Tables').click();

        
    }
}