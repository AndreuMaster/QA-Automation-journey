# Set Up and Install:

1. npm init playwright@latest
2. npm install -D typescript
3. npx tsc --init

# Execute tests:
npx playwright test //all tests
npx playwright test test/XXXX.spec.js //execute specific test

# Record trace:
npx playwright test --trace //executes tests with trace mode
npx playwright show-report //shows report once the test has finished

# Keys when writing tests:

Locator types:
ID: "#login-button" Will look for an element which ID is "login-button".
Class: ".error-message-container" Will look for an element which class = "error-message-container"
Attribute: [data-test="error"] Will look for an element which attribute "data-test" is "error"
Text: "get by text('Login')"
CSS selector: form > input[type = "password"]
XPath: "//button[@id = 'login']"