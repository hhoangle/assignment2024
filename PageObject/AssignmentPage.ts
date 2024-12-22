import { Page } from "@playwright/test";
import { BasePage } from "../Base/BasePage";
import { AssignmentUI } from "../PageUI/AssignmentUI";
export class AssignmentPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async clickToSignUpButton() {
    await this.clickToElement(AssignmentUI.SIGN_UP_BUTTON);
  }

  async login(userName: string, password: string) {
    await this.sendKeyToElement(AssignmentUI.EMAIL_FIELD, userName);
    await this.sendKeyToElement(AssignmentUI.PASSWORD_FIELD, password);
    await this.clickToElement(AssignmentUI.SIGN_IN_BUTTON);
  }

  async viewDemoProject() {
    await this.clickToElement(AssignmentUI.VIEW_DEMO_PROJECT_BUTTON);
  }

  async isDateRangeComponentVisible(): Promise<boolean> {
    await this.clickToElement(AssignmentUI.DATE_PICKER_BUTTON);
    return (
      (await this.isElementDisplayed(AssignmentUI.START_TIME)) &&
      (await this.isElementDisplayed(AssignmentUI.END_TIME)) &&
      (await this.isElementDisplayed(AssignmentUI.PREVIOUS_MONTH_BUTTON)) &&
      (await this.isElementDisplayed(AssignmentUI.NEXT_MONTH_BUTTON))
    );
  }

  async getListWeekDays(): Promise<string[]> {
    return await this.getListElementsText(this.page, AssignmentUI.LIST_WEEKDAY);
  }

  async getListTimeRange(): Promise<string[]> {
    await this.waitForElementVisible(AssignmentUI.TIME_RANGE_DROPDOWN);
    await this.clickToElementDynamic(AssignmentUI.TIME_RANGE_DROPDOWN);
    return await this.getListElementsText(this.page, AssignmentUI.LIST_TIME_RANGE_OPTIONS);
  }

  async isColumnFilterComponentVisible(): Promise<boolean> { 
    await this.clickToElement(AssignmentUI.COLUMN_FILTER_BUTTON);
    return await this.isElementDisplayed(AssignmentUI.COLUMN_DROPDOWN)
    && await this.isElementDisplayed(AssignmentUI.ADD_FILTER_BUTTON);
  }

  async getListColumnValue(): Promise<string[]> { 
    await this.clickToElement(AssignmentUI.COLUMN_DROPDOWN);
    await this.sleepInSecond(2);
    return await this.getListElementsText(this.page, AssignmentUI.COLUMN_VALUE);
  }

  async selectColumnFilter(columnName: string) {
    await this.clickToElement(AssignmentUI.COLUMN_OPTIONS.replace("%s", columnName));
    await this.page.keyboard.press("Escape");
  }
  
  async getListLogicalFilterOptions(): Promise<string[]> { 
    await this.clickToElement(AssignmentUI.LOGICAL_FILTER_DROPDOWN);
    return await this.getListElementsText(this.page, AssignmentUI.LOGICAL_FILRER_OPTIONS);
  }
}