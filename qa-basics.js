import { fail } from "node:assert";
import { stat } from "node:fs";

const testName = "Login with valid credentials";
const expectedStatus = 200;
const isCritical = true;
const browsers = ["chromium", "firefox", "webkit"];
const testcase = {
    id: "TC-01",
    priority: "High"
};

console.log(testName, typeof testName);
console.log(expectedStatus, typeof expectedStatus);
console.log(isCritical, typeof isCritical);
console.log(browsers, typeof browsers);
console.log(testcase, typeof testcase);

const results = [
    { name: 'login', status: 'pass' },
    { name: 'checkout', status: 'fail' },
    { name: 'search', status: 'pass' },
    { name: 'logout', status: 'pass' },
];

let passed = 0;
let failed = 0;

for (const result of results) {
    if (result.status === 'pass') {
        passed++;
    }
    else {
        failed++;
    }
}

function isValidEmail(value) {
    if (typeof value !== 'string' || value.length === 0) return false;
    const parts = value.split('@');
    if (parts.length !== 2) return false;
    const [local, domain] = parts;
    return local.length > 0 && domain.includes('.');
}

console.log(isValidEmail('qa@asserthired.com'));
console.log(isValidEmail('not-an-email'));
console.log(isValidEmail('@nope.com'));
console.log(isValidEmail(42));


function recordRun(test, status) {
    test.status = status;
    test.lastRun = new Date().toISOString();
    return test;
}


const tc = { id: 'TC-07', title: 'Add to cart', status: 'not run' };
const updated = recordRun(tc, 'pass');

console.log(updated.id, updated.status);
console.log('Ran at:', updated.lastRun);

function parseTags(rawTag) {
    let cleanedTag = rawTag.split(`,`);
    cleanedTag = cleanedTag.map((cleanedTag) => cleanedTag.trim().toLowerCase());
    cleanedTag = cleanedTag.filter((cleanedTag) => cleanedTag.length > 0);
    cleanedTag = new Set(cleanedTag);
    return cleanedTag;
}

console.log(parseTags('Smoke, regression ,  smoke, , API'));

function parseConfig(jsonText) {
    try {
        return JSON.parse(jsonText);
    } catch (err) {
        console.error('Bad config, using defaults:', err.message);
        return { retries: 0, timeout: 30000 };
    }
}

console.log(parseConfig('{"retries": 2, "timeout": 5000}')); 
console.log(parseConfig('{ broken json'));                   