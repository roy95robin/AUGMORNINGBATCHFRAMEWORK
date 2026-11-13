
import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { dashboardPage } from '../pages/dashboardPage'
import data from '../testdata/login.json'
import product from '../testdata/product.json'


let lp: LoginPage
let dp:dashboardPage

test.beforeEach(async({page})=>{

// create the object of the class (login and dashboard)
lp = new LoginPage(page)
dp = new dashboardPage(page)

// launch the url 
await lp.launchUrl(data.url)
await lp.loginIntoApplication(data.email,data.password)
await expect(lp.homePageIdentifier).toBeVisible()

})

for(let p of product){
test(`add to cart ${p.productName}`, async()=>{

    await dp.searchProduct(p.productName,"Add To Cart")
    await expect(dp.addToCartMessage).toContainText(p.successMessage)
    await dp.navigateToCart()
})
test(`View product ${p.productName}`, async()=>{

    await dp.searchProduct(p.productName,'View')
    await expect(dp.viewPageProductName).toContainText(p.productName)
})
}