import { Page } from "@playwright/test";

export default class InteractionsPage {


    constructor(public page: Page) {

    }

    
    async clickOnDropable() {
        
        await this.page.getByRole('listitem').filter({ hasText: 'Droppable' }).click();

        
    }
   
}
