import { Locator, Page } from "@playwright/test";

export class PaymentPage {
    page: Page;
    paymentMethodHeading: Locator;
    cardNumberInput: Locator;
    expiryMonth: Locator;
    expiryYear: Locator;
    cvvInput: Locator;
    cardholderNameInput: Locator;
    shippingAddressInput: Locator;
    countryInput: Locator;
    placeOrderLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.paymentMethodHeading = this.page.getByText("Payment Method", { exact: true });
        this.cardNumberInput = this.page.locator(".payment__cc .row").nth(0).locator("input");
        this.expiryMonth = this.page.locator(".payment__cc select").nth(0);
        this.expiryYear = this.page.locator(".payment__cc select").nth(1);
        this.cvvInput = this.page.locator(".payment__cc .row").nth(1).locator("input");
        this.cardholderNameInput = this.page.locator(".payment__cc .row").nth(2).locator("input");
        this.shippingAddressInput = this.page.locator(".user__name > input").first();
        this.countryInput = this.page.getByPlaceholder("Select Country");
        this.placeOrderLink = this.page.locator(".action__submit");
    }

    async fillCardDetails(
        cardNumber: string,
        expiryMonth: string,
        expiryYear: string,
        cvv: string,
        cardholderName: string,
    ) {
        await this.cardNumberInput.fill(cardNumber);
        await this.expiryMonth.selectOption(expiryMonth);
        await this.expiryYear.selectOption(expiryYear);
        await this.cvvInput.fill(cvv);
        await this.cardholderNameInput.fill(cardholderName);
    }

    async fillShippingInformation(address: string, country: string) {
        await this.shippingAddressInput.fill(address);
        await this.countryInput.fill(country);
    }
}
