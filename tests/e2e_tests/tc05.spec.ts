import {test, expect} from '@playwright/test';
import HomePage from "../../pages/homepage";
import WidgetsPage from '../../pages/widgetpage';
import { promisify } from 'util'; 

test("Verify the tooltip", async ({page}) => {
const homepage = new HomePage(page);
const widgetsPage = new WidgetsPage(page);
const sleep = promisify(setTimeout);
//as the page's loadig and response time is changeable we specify timeouts per test
test.setTimeout(3000000);
await page.goto('https://demoqa.com/');
await homepage.clickOnWidgets();
await widgetsPage.clickOnTooltips();
await widgetsPage.hoverOnHoverMeButton();
sleep(2000);
const HoverText = await page.getByText('You hovered over the Button').textContent();
expect(HoverText).toBe('You hovered over the Button');


})