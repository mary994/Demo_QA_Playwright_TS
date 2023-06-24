import {test, expect} from '@playwright/test';
import HomePage from "../pages/homepage";
import ElementsPage from "../pages/elementspage";
import TablesPage from '../pages/tablespage';

test("Verify broken image", async ({page}) => {
const homepage = new HomePage(page);
const elementspage = new ElementsPage(page);
test.setTimeout(3000000);
await page.goto('https://demoqa.com/');
await homepage.clickOnElements();
await elementspage.clickOnBrokenlinks();
const imageHandle = await page.locator('img').nth(3);
const imageBound = await imageHandle.boundingBox();
const imagewidth = imageBound?.width;
expect (imagewidth).toBe(0);

})