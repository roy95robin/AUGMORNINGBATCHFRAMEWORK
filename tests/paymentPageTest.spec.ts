import { expect, test } from "@playwright/test";
import { CartPage } from "../pages/cartPage";
import { dashboardPage } from "../pages/dashboardPage";
import { LoginPage } from "../pages/loginPage";
import { PaymentPage } from "../pages/paymentPage";
import loginData from "../testdata/login.json";
import paymentData from "../testdata/payment.json";
import products from "../testdata/product.json";

const product = products[0];
let loginPage: LoginPage;
let dashboard: dashboardPage;
let cartPage: CartPage;
let paymentPage: PaymentPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboard = new dashboardPage(page);
    cartPage = new CartPage(page);
    paymentPage = new PaymentPage(page);
    await loginPage.launchUrl(loginData.url);
    await loginPage.loginIntoApplication(loginData.email, loginData.password);
    await expect(loginPage.homePageIdentifier).toBeVisible();
});

test("payment page accepts card and shipping details", async () => {
    await dashboard.searchProduct(product.productName, "Add To Cart");
    await expect(dashboard.addToCartMessage).toContainText(product.successMessage);
    await dashboard.navigateToCart();
    await expect(cartPage.productItem(product.productName)).toBeVisible();
    await cartPage.proceedToCheckout();

    await expect(paymentPage.paymentMethodHeading).toBeVisible();
    await expect(paymentPage.placeOrderLink).toBeVisible();

    await paymentPage.fillCardDetails(
        paymentData.cardNumber,
        paymentData.expiryMonth,
        paymentData.expiryYear,
        paymentData.cvv,
        paymentData.cardholderName,
    );
    await paymentPage.fillShippingInformation(
        paymentData.shippingAddress,
        paymentData.country,
    );

    await expect(paymentPage.cardNumberInput).toHaveValue(paymentData.cardNumber);
    await expect(paymentPage.cvvInput).toHaveValue(paymentData.cvv);
    await expect(paymentPage.cardholderNameInput).toHaveValue(paymentData.cardholderName);
    await expect(paymentPage.shippingAddressInput).toHaveValue(paymentData.shippingAddress);
    await expect(paymentPage.countryInput).toHaveValue(paymentData.country);
});
