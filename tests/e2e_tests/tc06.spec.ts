import {test, expect} from '@playwright/test';
import HomePage from "../../pages/homepage";
import InteractionsPage from '../../pages/interactionspage';
import { promisify } from 'util'; 

test("Verify user can drag and drop", async ({page}) => {
const homepage = new HomePage(page);
const interactionspage = new InteractionsPage(page);
const sleep = promisify(setTimeout);
//as the page's loadig and response time is changeable we specify timeouts per test
test.setTimeout(3000000);
await page.goto('https://demoqa.com/');
await homepage.clickOnInteractions();
await interactionspage.clickOnDropable();
await page.getByText('Drag me', { exact: true }).dragTo(page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable'));
sleep(10000);
const DroppedText = await page.getByText('Dropped!').textContent();
expect(DroppedText).toBe('Dropped!');


})