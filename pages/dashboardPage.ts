
// locators and method belong to dashboard page must be here

import { Locator, Page } from "@playwright/test";

export class dashboardPage {

page:Page
products:Locator
homePageProductPrice: Locator
viewPageProductprice:Locator
viewPageProductName:Locator
addToCartMessage:Locator
cartButton:Locator

constructor(page:Page){

    this.page = page
    this.products = this.page.locator('div.card-body')
    this.homePageProductPrice = this.page.locator('div.text-muted')
    this.viewPageProductName = this.page.locator('.rtl-text h2')
    this.viewPageProductprice= this.page.locator('.rtl-text h3')
    this.addToCartMessage = this.page.locator('#toast-container')
    this.cartButton = this.page.locator('[routerlink="/dashboard/cart"]')

}
// methods:: 
    async searchProduct(productName:string, button:'View'|'Add To Cart'){
        // wait for atleast one product to load on the page 
        await this.products.nth(0).waitFor()
        // capture all the product count and the iterate through the products 
        const countOfProduct = await this.products.count()

            for(let i=0; i<countOfProduct ;i++){
                // pick one product from the list 
                const product = await this.products.nth(i)
                // read the name of the product and get the text
                // below line is called locator chaining
                const productText = await product.locator('b').textContent()
               // const productTexts = await this.products.locator('b').textContent()
               // compare the text captured with the testdata
               if(productText?.trim().toLowerCase()=== productName.trim().toLowerCase()){

                // find the button on which action need to be performed. 
                await product.getByRole('button',{name:button}).click()
                break

               }
        
            }
    }
     async navigateToCart(){

                await this.cartButton.click()
       }

}


//////////////////////////////////////////

// locator and actions 

    // async searchAndAddProduct (productName:string,index:number){
    //     await this.products.nth(0).waitFor()
    //     // take the count of the product 
    //     const totalProduct = await this.products.count()
    //     console.log(totalProduct);

    //     // use the for loop to iterate through the list of product:
    //     for(let i = 0;i<totalProduct ; i++){
    //         // first capture all the text/name of the product present on the page
    //         // below locator chaining mechanism is used
    //        const productText= await this.products.nth(i).locator('b').textContent()
    //         if(productText?.trim().toLowerCase() === productName.trim().toLowerCase()){
    //             await this.products.nth(i).locator('button').nth(index).click()
    //             break
    //         }
        
    //     }
    // }
    
