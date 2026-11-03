import { test, expect } from "@playwright/test";
import { LoginPage } from '../Pages/LoginPage.js';


test("Login with valid credentials", async ({ page }) => {
  // Navigate to login page
  await page.goto("https://www.saucedemo.com/");
  // Enter username
  await page.fill("#user-name", "standard_user");
  // Enter password
  await page.fill("#password", "secret_sauce");
  // Click Login
  await page.click("#login-button");
  // Verify dashboard
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator(".title")).toHaveText("Products");
});

const loginCases = [
  {
    name: 'Incorrect username',
    username: 'wrong_user',
    password: 'secret_sauce',
    expectedMessage:
      'Epic sadface: Username and password do not match any user in this service',
  },
  {
    name: 'Incorrect password',
    username: 'standard_user',
    password: 'wrong_password',
    expectedMessage:
      'Epic sadface: Username and password do not match any user in this service',
  },
  {
    name: 'Empty username and password',
    username: '',
    password: '',
    expectedMessage: 'Epic sadface: Username is required',
  },
];

//Test all bad log in outcomes
for (const loginCase of loginCases) {
  test(`Login error: ${loginCase.name}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', loginCase.username);
    await page.fill('#password', loginCase.password);
    await page.click('#login-button');

    await expect(page.locator('[data-test="error"]')).toHaveText(loginCase.expectedMessage);
  });
}

test("Logout after login with valid credentials", async ({ page }) => {
  // Navigate to login page
  await page.goto("https://www.saucedemo.com/");

  // Enter username
  await page.fill("#user-name", "standard_user");
  // Enter password
  await page.fill("#password", "secret_sauce");
  // Click Login
  await page.click("#login-button");
  // Verify dashboard
  await expect(page).toHaveURL(/inventory/);
  //
  await page.click("#react-burger-menu-btn");
  await page.click("#logout_sidebar_link");

  await expect(page).toHaveURL(`https://www.saucedemo.com`);
});

test("First checkbox is checked", async ({ page }) => {
  // Navigate to login page
  await page.goto("https://the-internet.herokuapp.com/checkboxes");

  const firstBox = page.locator('input[type="checkbox"]').first();
  await firstBox.check();
  
  await expect(firstBox).toBeChecked();  
});

test("Hover first profile", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/hovers");

  const firstProfile = page.locator(".figure").first();
  const firstImage = firstProfile.locator("img");
  
  await firstImage.hover();
  
  await expect(firstProfile.locator(".figcaption")).toBeVisible();
  await expect(firstProfile.locator("h5")).toHaveText("name: user1");
});


test('User can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.assertOnDashboard();
});