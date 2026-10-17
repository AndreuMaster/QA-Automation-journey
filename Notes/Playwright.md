# Set Up and Install:

1. npm init playwright@latest
2. npm install -D typescript
3. npx tsc --init

# Execute tests:
npx playwright test //all tests
npx playwright test test/XXXX.spec.js //execute specific test

# Keys when writing tests:

"#login-button" Will look for an element which ID is "login-button"
".error-message-container" Will look for an element which class = "error-message-container"
[data-test="error"] Will look for an element which atribute "data-test" is "error"