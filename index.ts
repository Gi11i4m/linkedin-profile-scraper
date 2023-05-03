import { test } from '@playwright/test';
import { LinkedInProfileData } from './types';

const LINKEDIN_PROFILE = 'https://www.linkedin.com/in/gilliam-flebus-53596480/';
const LINKEDIN_USER = 'gilliamflebus@gmail.com';
const LINKEDIN_PASSWORD = 'vWm/-b3M.CtSr^n';

const profileData: LinkedInProfileData = {};

test('Gather LinkedIn profile data', async ({ page }) => {
  // LOGIN
  await page.goto(LINKEDIN_PROFILE);
  await page.locator('.artdeco-button').first().click();
  await page
    .locator('.authwall-join-form__form-toggle--bottom')
    .first()
    .click();
  await page.locator('#session_key').type(LINKEDIN_USER);
  await page.locator('#session_password').type(LINKEDIN_PASSWORD);
  await page.locator('.sign-in-form__submit-button').first().click();
  await page.goto(LINKEDIN_PROFILE);

  // PERSONAL DATA GATHERING
  profileData.personal = {
    name: await page.locator('.t-24').textContent() || '',
    title: '',
    currentLocation: '',
    about: '',
  }

  // ...
  await page.waitForTimeout(200000);
});
