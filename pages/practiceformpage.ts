import { Page } from "@playwright/test";
import { promisify } from 'util'; 

export default class PracticeFormsPage {


    constructor(public page: Page) {

    }
    

    async enterFirstName(firstname: string) {
        
        await this.page.getByPlaceholder('First Name').fill(firstname);
        
    }
    async enterLastName(lastname: string) {
        
        await this.page.getByPlaceholder('Last Name').fill(lastname);
        
    }
    async enterEmail(email: string) {
        
        await this.page.getByPlaceholder('name@example.com').fill(email);
        
    }
    async selectGender() {
        
        await this.page.getByText('Male', { exact: true }).click()

    }
    async enterMobilenumber(mobile: string) {
        
        await this.page.getByPlaceholder('Mobile Number').fill(mobile);
        
    }
    async selectDateofBirth() {
        
        await this.page.locator('#dateOfBirthInput').click();
        await this.page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('0');
        await this.page.getByRole('combobox').nth(1).selectOption('1990');
        await this.page.getByRole('option', { name: 'Choose Monday, January 15th, 1990' }).click();
        

      }  
    async enterSubjects(subject: string) {
        const sleep = promisify(setTimeout);
        await this.page.locator('#subjectsInput').click();
        await this.page.locator('#subjectsInput').fill(subject);
        await sleep(10000);
        await this.page.getByText('Physics', { exact: true }).click();


       
   }

   async selectHobbies() {
        
    await this.page.getByText('Reading').click();

   
}
   async editFirstname(fname : string) {
        
    await this.page.getByPlaceholder('First Name').fill(fname);
   
}

async selectPicture() {
        
    await this.page.getByLabel('Select picture').click();
   
}
async enterAddress(address: string) {
        
    await this.page.getByPlaceholder('Current Address').fill(address);

   
}
async selectState() {
    
    const sleep = promisify(setTimeout);
    await this.page.locator('#react-select-3-input').click();
    await sleep(10000);
    await this.page.getByText('NCR', { exact: true }).click();

  }
async selectCity() {
        
    await this.page.locator('div').filter({ hasText: /^Select City$/ }).nth(3).click();
    await this.page.getByText('Delhi', { exact: true }).click();
  }
async clickSubmitButton() {
        
    await this.page.getByRole('button', { name: 'submit' }).click();

   
}
}

    