const {test, expect} =  require('@playwright/test')

const {hello, hello_world} = require('./demo/hello')
// import {hello , hello_world } from './demo/hello.js';

// console.log(hello());
// console.log(hello_world());

test('My first test', async({page})=>{
    await page.goto('https://google.com');
    await expect(page).toHaveTitle('Google');
})