# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboardPageTest.spec.ts >> add to cart
- Location: tests\dashboardPageTest.spec.ts:23:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('#toast-container')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" locator('#toast-container') with timeout 5000ms
  - waiting for locator('#toast-container')
    2 × locator resolved to <div id="toast-container" class="toast-bottom-right toast-container"></div>
      - unexpected value "hidden"

```

```yaml
- navigation:
  - link "Automation Automation Practice":
    - /url: ""
    - heading "Automation" [level=3]
    - paragraph: Automation Practice
  - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator.":
    - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
  - list:
    - listitem:
      - button " HOME"
    - listitem
    - listitem:
      - button " ORDERS"
    - listitem:
      - button " Cart 1"
    - listitem:
      - button "Sign Out"
- paragraph: Home | Search
- heading "Filters" [level=4]
- textbox "search"
- heading "Price Range" [level=6]
- textbox "Min Price"
- textbox "Max Price"
- heading "Categories" [level=6]
- text: 
- checkbox
- text: fashion
- checkbox
- text: electronics
- checkbox
- text: household
- heading "Sub Categories" [level=6]
- text: 
- checkbox
- text: t-shirts
- checkbox
- text: shirts
- checkbox
- text: shoes
- checkbox
- text: mobiles
- checkbox
- text: laptops
- heading "Search For" [level=6]
- text: 
- checkbox
- text: men
- checkbox
- text: women Showing 3 results | User can only see maximum 9 products on a page
- img
- heading "ADIDAS ORIGINAL" [level=5]
- text: $ 11500
- button "View"
- button " Add To Cart"
- img
- heading "ZARA COAT 3" [level=5]
- text: $ 11500
- button "View"
- button " Add To Cart"
- img
- heading "iphone 13 pro" [level=5]
- text: $ 55000
- button "View"
- button " Add To Cart"
- list "Pagination":
  - listitem: « Previous page
  - listitem: You're on page 1
  - listitem: Next page »
- text: Design and Developed By - Kunal Sharma
```

# Test source

```ts
  1  | 
  2  | import {test,expect} from '@playwright/test'
  3  | import { LoginPage } from '../pages/loginPage'
  4  | import { dashboardPage } from '../pages/dashboardPage'
  5  | 
  6  | const url= "https://rahulshettyacademy.com/client/#/auth/login"
  7  |  let email = 'jegow99556@flosek.com'
  8  | let password = 'Test@123'
  9  | let productName = "ADIDAS ORIGINAL"
  10 | 
  11 | let lp:LoginPage
  12 | let dp:dashboardPage
  13 | 
  14 | test.beforeEach(async ({page}) =>{
  15 | 
  16 | lp = new LoginPage(page)
  17 | dp= new dashboardPage(page)
  18 | await lp.launchUrl(url)
  19 | await lp.loginIntoApplication(email, password)
  20 | 
  21 | })
  22 | 
  23 | test('add to cart', async()=>{
  24 | await dp.searchProduct(productName, 'Add To Cart')
> 25 | await expect(dp.addToCartMessage).toBeVisible()
     |                                   ^ Error: expect(locator).toBeVisible() failed
  26 | await dp.navigateToCart()
  27 | })
  28 | 
  29 | test('view product', async()=>{
  30 | await dp.searchProduct(productName, 'View')
  31 | await expect(dp.viewPageProductName).toHaveText(productName)
  32 | 
  33 | })
```