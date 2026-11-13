
import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import data from '../testdata/login.json'

let lp:LoginPage // create the instance at global level

test.beforeEach('login scenario',async({page}) =>{
     lp = new LoginPage(page)
    await lp.launchUrl(data.url)
})

test('login validation', async() =>{
await lp.loginIntoApplication(data.email, data.password)
await expect(lp.homePageIdentifier).toBeVisible()
})

test('Invalid login', async() =>{
await lp.loginIntoApplication(data.email, data.invalidPassword)
await expect(lp.errorMessage).toBeVisible()
})
