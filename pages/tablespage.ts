import { Page } from "@playwright/test";

export default class tablesPage {


    constructor(public page: Page) {

    }
    async clickAddButton() {
        
       await this.page.getByRole('button', { name: 'Add' }).click();

       
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
    async enterAge(age: string) {
        
        await this.page.getByPlaceholder('Age').fill(age);
        
    }
    async enterSalary(salary: string) {
        
        await this.page.getByPlaceholder('Salary').fill(salary);
        
    }
    async enterDepaertment(department: string) {
        
        await this.page.getByPlaceholder('Department').fill('QA');        
    }
    async clickSubmitButton() {
        
        await this.page.getByRole('button', { name: 'submit' }).click();

       
   }

   async clickEditButton() {
        
    await this.page.getByRole('row', { name: 'Alden Cantrell 45 alden@example.com 12000 Compliance Edit Delete' }).getByTitle('Edit').locator('path').click();

   
}
   async editFirstname(fname : string) {
        
    await this.page.getByPlaceholder('First Name').fill(fname);
   
}

async editLasttname(lname : string) {
        
    await this.page.getByPlaceholder('Last Name').fill(lname);
   
}


    

}