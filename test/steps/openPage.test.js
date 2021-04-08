const { Given, When, Then } = require('@cucumber/cucumber');
var assert = require('assert');

Given('the user open TAU home page', () => {
    browser.url('/');
});

When('the user review the page', () => {
    let title = $('.shadow-sm h1');
    title.waitForDisplayed();
    assert.equal(title.getText(), 'World-Class Instructors and Industry Leaders');
});

Then('the title should be "Test Automation University | Applitools"', () => {
    assert.equal(browser.getTitle(), 'Test Automation University | Applitools1');
});