
import { Locator,Page } from "@playwright/test";

export class newLoginPage {

    constructor(page){ // constructor will have parameter as page :: 
        this.page = page
        this.email = this.page.getByPlaceholder('email@example.com')
        this.password = this.page.locator('#userPassword')
        this.errorMessage = this.page.locator('#toast-container')
        this.homePageIdentifier = this.page.locator('[routerlink="/dashboard/"]')
        this.loginButton = this.page.locator('#login')

    }
    async launchUrl(url){
        await this.page.goto(url)
    }
    async loginIntoApplication(username, password){
        await this.email.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }
   
}


