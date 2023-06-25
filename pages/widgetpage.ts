import { Page } from "@playwright/test";

export default class WidgetsPage {
    readonly progressBarSelector: string;
    readonly resetButton: string;


    constructor(public page: Page) {
        this.progressBarSelector = '#progressBar';
        this.resetButton = '#resetButton';
    }

    async waitToAppearProgressbar(){
        

        // Wait for the progress bar to appear
        await this.page.waitForSelector(this.progressBarSelector); 
        
    }


    async waitForResetButtonToAppear(progressTimeout){
        await this.page.waitForSelector(this.resetButton ,{ timeout: progressTimeout }); 
    }

    async clickOnProgressbar() {
        
        await this.page.getByText('Progress Bar').click();

        
    }
    async getTextOfProgressBarPercentage(){
       return await this.page.locator('#progressBar').textContent();
    }

    async clickOnReset(){
        await this.page.getByText('Reset').click();

    }

    async clickOnStart() {

        await this.page.getByRole('button', { name: 'Start' }).click();

          
      }
}