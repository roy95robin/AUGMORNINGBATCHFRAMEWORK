
import {test,expect} from '@playwright/test'
import { newLoginPage } from '../pages/newLoginPage'
import data from '../testdata/login.json'

let lps

test.beforeEach('login scenario',async({page}) =>{
     lps = new newLoginPage(page)
    await lps.launchUrl(data.url)
})

test('login validation', async() =>{
await lps.loginIntoApplication(data.email, data.password)
await expect(lps.homePageIdentifier).toBeVisible()
})
test('Invalid login', async() =>{
await lps.loginIntoApplication(data.email, data.invalidPassword)
await expect(lps.errorMessage).toBeVisible()
})