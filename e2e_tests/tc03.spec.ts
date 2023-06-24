import {test, expect} from '@playwright/test';
import HomePage from "../pages/homepage";
import FormsPage from '../pages/formspage';
import PracticeFormsPage from '../pages/practiceformpage';

test("Verify user can submit the form", async ({page}) => {
const homepage = new HomePage(page);
const formspage = new FormsPage(page);
const practiceFormsPage = new PracticeFormsPage(page);
//as the page's loadig and response time is changeable we specify timeouts per test
test.setTimeout(3000000);
await page.goto('https://demoqa.com/');
await homepage.clickOnForms();
await formspage.clickOnPracticeForms();
await practiceFormsPage.enterFirstName('Gerimedica');
await practiceFormsPage.enterLastName('BV');
await practiceFormsPage.enterEmail('test@test.com');
await practiceFormsPage.selectGender();
await practiceFormsPage.enterMobilenumber('0123456789');
await practiceFormsPage.selectDateofBirth();
await practiceFormsPage.enterSubjects('phy');
await practiceFormsPage.selectHobbies();
await practiceFormsPage.selectPicture();
await practiceFormsPage.enterAddress('Netherlands');
await practiceFormsPage.selectState();
await practiceFormsPage.selectState();
const studentnamelValue = await page.getByRole('cell', { name: 'Gerimedica BV', exact: true }).textContent();
    expect(studentnamelValue).toBe('Gerimedica BV');
    const studentemailValue = await page.getByRole('cell', { name: 'test@test.com', exact: true }).textContent();
    expect(studentemailValue).toBe('test@test.com');
    const genderValue = await page.getByRole('cell', { name: 'Male', exact: true }).textContent();
    expect(genderValue).toBe('Male');
    const mobileValue = await page.getByRole('cell', { name: '0123456789', exact: true }).textContent();
    expect(mobileValue).toBe('0123456789');
    const birthdateValue = await page.getByRole('cell', { name: '15 January,1990', exact: true }).textContent();
    expect(birthdateValue).toBe('15 January,1990');
    const subjectsValue = await page.getByRole('cell', { name: 'Physics', exact: true }).textContent();
    expect(subjectsValue).toBe('Physics');
    const hobbiesValue = await page.getByRole('cell', { name: 'Reading', exact: true }).textContent();
    expect(hobbiesValue).toBe('Reading');
    const addressValue = await page.getByRole('cell', { name: 'Netherlands', exact: true }).textContent();
    expect(addressValue).toBe('Netherlands');
    const stateValue = await page.getByRole('cell', { name: 'NCR Delhi', exact: true }).textContent();
    expect(addressValue).toBe('NCR Delhi');


    

})



