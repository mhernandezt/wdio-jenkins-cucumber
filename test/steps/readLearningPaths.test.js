const { Given, When, Then } = require('@cucumber/cucumber');
var assert = require('assert');

Given('the user is on Learning path page', () => {
    browser.url('/');
});

When('the user selects "Javascript" programming language', () => {
    let title = $('.shadow-sm h1');
    title.waitForDisplayed();
    assert.strictEqual(title.getText(), 'World-Class Instructors and Industry Leaders');
});

Then('the page is filtered', () => {
    assert.strictEqual(browser.getTitle(), 'Test Automation University | Applitools');
});