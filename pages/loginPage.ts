
// This page will consist of only locators and methods related to login page
// Hardcoded value should not be present inside your page class
/*
class {
    properties of page
     constructor(){
        // here properties locators will come
     }
        methods(){
        // actions
        }
}
*/

import { Locator,Page } from "@playwright/test";

export class LoginPage {

// proviode all the properties of an page inside the class

page:Page
email:Locator
password: Locator
errorMessage: Locator
homePageIdentifier: Locator
loginButton:Locator

    constructor(page:Page){ // constructor will have parameter as page :: 
        this.page = page
        this.email = this.page.getByPlaceholder('email@example.com')
        this.password = this.page.locator('#userPassword')
        this.errorMessage = this.page.locator('#toast-container')
        this.homePageIdentifier = this.page.locator('[routerlink="/dashboard/"]')
        this.loginButton = this.page.locator('#login')

    }
    // action-- actions goes inside the methods. 
    // fill, click, check etc..

    async launchUrl(url:string){
        await this.page.goto(url)
    }

    async loginIntoApplication(username:string, password:string){
        await this.email.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }
   
}


 /*
    async username(username:string){
         await this.email.fill(username)
    }
          async password(password:string){
         await this.password.fill(password)
    }
              async loginButtonClick(){
         await this.loginButton.click()
    }

    */


