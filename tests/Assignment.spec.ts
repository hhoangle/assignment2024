import { chromium, expect, test, BrowserContext, Page } from "@playwright/test";
import { AssignmentPage } from "../PageObject/AssignmentPage";
import { CommonConst } from "../CommonConstant/CommonConst";
let browserContext: BrowserContext;
let page: Page;
let assignMentPage: AssignmentPage;
const WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const LIST_TIME_RANGE = [
  "5 min",
  "30 min",
  "1 hour",
  "3 hours",
  "24 hours",
  "7 days",
  "1 month",
  "3 months",
  "1 year",
];
const LIST_COLUMN_VALUE = ["Trace Name", "Tags", "User", "Release", "Version"];
const LIST_LOGICAL_OPTIONS_OF_TRACE_NAME = ["any of", "none of"];
const LIST_LOGICAL_OPTIONS_OF_TAGS = ["any of", "none of", "all of"];

test.beforeAll(async () => {
  browserContext = await chromium.launchPersistentContext("", {
    headless: false,
    viewport: {
      width: 1920,
      height: 1080,
    },
  });
  page = browserContext.pages()[0];
  assignMentPage = new AssignmentPage(page);
  await page.goto(CommonConst.DEV_URL);
  await assignMentPage.clickToSignUpButton();
  await assignMentPage.login(
    CommonConst.DEMO_ACCOUNT,
    CommonConst.DEMO_PASSWORD
  );
  await assignMentPage.viewDemoProject();
});

test.describe("Assignment", () => {
  test("Date Range", async () => {
    await assignMentPage.viewDemoProject();
    expect(assignMentPage.isDateRangeComponentVisible()).toBeTruthy();
    expect(
      assignMentPage.comepareList(
        await assignMentPage.getListWeekDays(),
        WEEK_DAYS
      )
    ).toBeTruthy();
    await page.waitForTimeout(10000);
  });

  test("Time Range", async () => {
    await page.goto(CommonConst.DEV_URL);
    expect(
      assignMentPage.comepareList(
        await assignMentPage.getListTimeRange(),
        LIST_TIME_RANGE
      )
    ).toBeTruthy();
    await page.waitForTimeout(10000);
  });

  test("Column Filter", async () => {
    expect(assignMentPage.isColumnFilterComponentVisible()).toBeTruthy();
    expect(
      assignMentPage.comepareList(
        await assignMentPage.getListColumnValue(),
        LIST_COLUMN_VALUE
      )
    ).toBeTruthy();
    await assignMentPage.selectColumnFilter("Trace Name");
    expect(
      assignMentPage.comepareList(
        await assignMentPage.getListLogicalFilterOptions(),
        LIST_LOGICAL_OPTIONS_OF_TRACE_NAME
      )
    ).toBeTruthy();
    await page.waitForTimeout(10000);
  });

  test("Column Filter 2", async () => {
    expect(assignMentPage.isColumnFilterComponentVisible()).toBeTruthy();
    expect(
      assignMentPage.comepareList(
        await assignMentPage.getListColumnValue(),
        LIST_COLUMN_VALUE
      )
    ).toBeTruthy();
    await assignMentPage.selectColumnFilter("Tags");
    expect(
      assignMentPage.comepareList(
        await assignMentPage.getListLogicalFilterOptions(),
        LIST_LOGICAL_OPTIONS_OF_TAGS
      )
    ).toBeTruthy();
    await page.waitForTimeout(10000);
  });
});
