const { When, Then, Given, Before, AfterAll } = require("@cucumber/cucumber")
const puppeteer = require("puppeteer")
var { setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require("chai");

setDefaultTimeout(60*1000);
let browser, page;
Before(async function (){
    browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        slowMo: 10,
        devtools: false,
        args:
            [
                '--start-maximized',
                '--window-size=1920,1080'
            ]
    });
    page = await browser.newPage();
})


Given('I am in the page todos', async function () {
    await page.goto("http://localhost:8080/")
});

When('I add a new task and select categories', async function () {
    let buttonSelector = ['.ant-btn-primary:not([disabled])'];
    await page.waitForSelector(buttonSelector);
    let button = await page.$(buttonSelector);
    await button.click();

    let typeSelector = ['[type=text]'];
    await page.waitForSelector(typeSelector);
    let input = await page.$(typeSelector);
    await input.type('Learn 4 hours per day');

    let categorySelector = ['.ant-select-selection-placeholder'];
    await page.waitForSelector(categorySelector);
    let category = await page.$(categorySelector);
    await category.click();
    let selectCategory = ['.rc-virtual-list-holder-inner'];
    await page.waitForSelector(selectCategory);
    let selectC = await page.$(selectCategory);
    await selectC.click();


    let doneButtonSelector = ['.ant-btn-primary:not(.ant-btn-icon-only)'];
    await page.waitForSelector(doneButtonSelector);
    let doneButton = await page.$(doneButtonSelector);
    await doneButton.click();
    
});


Then('I can categorize it based on what needs to be done', async function () {
    let filterButtonSelector = ['.ant-btn-circle'];
    await page.waitForSelector(filterButtonSelector);
    let filterButton = await page.$(filterButtonSelector);
    await filterButton.click();

    let categorySelector1 = ['.ant-select-selection-placeholder'];
    await page.waitForSelector(categorySelector1);
    let category1 = await page.$(categorySelector1);
    await category1.click();
    let selectCategory1 = ['.rc-virtual-list-holder-inner'];
    await page.waitForSelector(selectCategory1);
    let selectC1 = await page.$(selectCategory1);
    await selectC1.click();

    let saveButtonSelector = ['.ant-btn-primary:not(.ant-btn-icon-only)'];
    await page.waitForSelector(saveButtonSelector);
    let saveButton = await page.$(saveButtonSelector);
    await saveButton.click();
});


AfterAll(async () => {
    await page.waitForTimeout(5000);
    await browser.close();
});