import {test, expect} from '@playwright/test';
import HomePage from "../pages/homepage";
import ElementsPage from "../pages/elementspage";
import TablesPage from '../pages/tablespage';

test("Verify user can enter new data into the table", async ({page}) => {
    const homepage = new HomePage(page);
    const elementspage = new ElementsPage(page);
    const tablesPage = new TablesPage(page);
    test.setTimeout(130000);
    await page.goto('https://demoqa.com/');
    await homepage.clickOnElements();
    await elementspage.clickOnWebTables();
    await tablesPage.clickAddButton();
    await tablesPage.enterFirstName('Alden');
    await tablesPage.enterLastName('Cantrell');
    await tablesPage.enterEmail('test@test.com');
    await tablesPage.enterAge('30');
    await tablesPage.enterSalary('12345');
    await tablesPage.enterDepaertment('QA');
    await tablesPage.clickSubmitButton();
    const emailValue = await page.getByRole('gridcell', { name: 'test@test.com' }).textContent();
    expect(emailValue).toBe('test@test.com');

}) 

test("Verify user can edit the row in a table", async ({page}) => {
    const tablesPage = new TablesPage(page);
    test.setTimeout(130000);
    await page.goto('https://demoqa.com/webtables');
    await tablesPage.clickEditButton();
    await tablesPage.editFirstname('Gerimedica');
    await tablesPage.editLasttname('BV');
    await tablesPage.clickSubmitButton();
    const firstnamelValue = await page.getByRole('gridcell', { name: 'Gerimedica', exact: true }).textContent();
    expect(firstnamelValue).toBe('Gerimedica');
    const lastnamelValue = await page.getByRole('gridcell', { name: 'BV', exact: true }).textContent();
    expect(lastnamelValue).toBe('BV');
    
  


})

