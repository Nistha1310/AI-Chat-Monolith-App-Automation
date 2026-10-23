// Generated from: features\authentication\login.feature
import { test } from "playwright-bdd";

test.describe('AI Chat Authentication and Login', () => {

  test('Verify the login page and successful SSO authentication', async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to the login page', null, { page }); 
    await Then('I should see the company logo and correct page title', null, { page }); 
    await When('I click on "Continue with SSO"', null, { page }); 
    await And('I enter my SSO email and proceed', null, { page }); 
    await And('I enter my password and sign in', null, { page }); 
    await And('I handle the "Stay signed in" prompt if it appears', null, { page }); 
    await Then('I should see the AI Assistant input field', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\authentication\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then I should see the company logo and correct page title","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I click on \"Continue with SSO\"","stepMatchArguments":[{"group":{"start":11,"value":"\"Continue with SSO\"","children":[{"start":12,"value":"Continue with SSO","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And I enter my SSO email and proceed","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And I enter my password and sign in","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I handle the \"Stay signed in\" prompt if it appears","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see the AI Assistant input field","stepMatchArguments":[]}]},
]; // bdd-data-end