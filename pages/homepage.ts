import { Page } from "@playwright/test";

export default class HomePage {


    constructor(public page: Page) {

    }

    async clickOnElements() {
        
            this.page.getByRole('heading', { name: 'Elements' }).click();
        
    }

    async clickOnForms() {
        
        await   this.page.getByText('Forms').click();
  
          
      }
      async clickOnWidgets() {
        
        await this.page.getByRole('heading', { name: 'Widgets' }).click();

  
          
      }
      async clickOnInteractions() {
        
        await this.page.getByRole('heading', { name: 'Interactions' }).click();

        
    }
}