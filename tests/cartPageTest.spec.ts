import { expect, test } from "@playwright/test";
import { CartPage } from "../pages/cartPage";
import { dashboardPage } from "../pages/dashboardPage";
import { LoginPage } from "../pages/loginPage";
import loginData from "../testdata/login.json";
import products from "../testdata/product.json";

const product = products[0];
let loginPage: LoginPage;
let dashboard: dashboardPage;
let cartPage: CartPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboard = new dashboardPage(page);
    cartPage = new CartPage(page);
    await loginPage.launchUrl(loginData.url);
    await loginPage.loginIntoApplication(loginData.email, loginData.password);
    await dashboard.searchProduct(product.productName, "Add To Cart");
    await dashboard.navigateToCart();
});

test("cart displays the selected product and allows checkout", async () => {
    await expect(cartPage.productItem(product.productName)).toBeVisible();
    await cartPage.proceedToCheckout();
});
