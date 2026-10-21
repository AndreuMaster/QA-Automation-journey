import { test, expect } from "@playwright/test";

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
  //await page.goto("https://www.saucedemo.com/");
  await page.goto("no url");
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