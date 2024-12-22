export class BasePageUI {
    static readonly DYNAMIC_TEXTBOX_BY_ID = "//input[@id='%s']";
    static readonly DYNAMIC_BUTTON_BY_TEXT = "//button[text()='%s']";
    static readonly DYNAMIC_DROPDOWN_BY_NAME = "//select[@name='%s']";
    static readonly DYNAMIC_RADIO_BUTTON_BY_LABEL = "//label[contains(text(),'%s')]//preceding-sibling::input";
    static readonly DYNAMIC_CHECKBOX_BY_LABEL = "//label[contains(text(),'%s')]//following-sibling::input";
    static readonly DYNAMIC_INPUT = "//input[@placeholder='%s']";
    static readonly DYNAMIC_INPUT_BY_PLACEHOLDER = "//p[contains(normalize-space(),'%s')]//ancestor::div[contains(@class,'mb1')]//input";
    static readonly DYNAMIC_ERROR_INPUT_BY_PLACEHOLDER = "//p[contains(normalize-space(),'%s')]//ancestor::div[contains(@class,'mb1')]//p[contains(normalize-space(),'Bạn cần điền vào mục này')]";
    static readonly LOADING_ICON = "//div[@class='loader']";
    static readonly HOME_PAGE_ICON = "//a[@class='navbar__button nuxt-link-active']";
}
