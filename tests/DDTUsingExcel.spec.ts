import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { dashboardPage } from '../pages/dashboardPage'
import { Excelutils } from '../utils/excelUtils'
import path from 'node:path'

// we need filepath and sheetname 

    const filepath = path.join(__dirname,'../testdata/login.xlsx')
    const sheetname = "LoginData"
    let datas:any
    try{
         datas = Excelutils.getExcelData(filepath,sheetname)
    } catch(e){
        console.log(e);
    }

    let lp:LoginPage
    let dp:dashboardPage

    test.beforeEach(async({page}) =>{
        lp= new LoginPage(page)
        dp = new dashboardPage(page)
    })

    for(let product of datas){
test(`add product ${product.productName}`, async()=>{

    await lp.launchUrl(product.url)
    await lp.loginIntoApplication(product.username, product.password)
    await expect(lp.homePageIdentifier).toBeVisible()
    await dp.searchProduct(product.productName,'Add To Cart')
    await expect(dp.addToCartMessage).toHaveText("Product Added To Cart ")
    await dp.navigateToCart()

})
}