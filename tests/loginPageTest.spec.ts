
// All the testcase steps will be performed here. , also if any hooks is needed.
// Locators and methods will be called from the page file.
/*
    let email = 'jegow99556@flosek.com'
    let password = 'Test@123'
*/

import {test,expect} from '@playwright/test'

import { LoginPage } from '../pages/loginPage'

// provide all the hardcoded value : 
const url= "https://rahulshettyacademy.com/client/#/auth/login"
 let email = 'jegow99556@flosek.com'
let password = 'Test@123'
let errorMessage = "Incorrect email or password. "
let invalidPassword = "fasfasfasf"

let lp:LoginPage // create the instance at global level
test.beforeEach('login scenario',async({page}) =>{
     lp = new LoginPage(page)
    await lp.launchUrl(url)
})

test('login validation', async({page}) =>{
// creating an object or instance of the class 
// const lp = new LoginPage(page)
// await lp.launchUrl(url)
await lp.loginIntoApplication(email, password)
await expect(lp.homePageIdentifier).toBeVisible()
})
test('Invalid login', async({page}) =>{
// const lp = new LoginPage(page)
// await lp.launchUrl(url)
await lp.loginIntoApplication(email, invalidPassword)
await expect(lp.errorMessage).toBeVisible()
})