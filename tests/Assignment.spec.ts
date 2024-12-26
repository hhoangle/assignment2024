import { chromium, expect, test, BrowserContext, Page } from "@playwright/test";
import { AssignmentPage } from "../PageActions/AssignmentPage";
import { CommonConst } from "../CommonConstant/CommonConst";
import { logger } from "../Logger/logger";
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

test.beforeEach(async () => {
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
  await assignMentPage.login(CommonConst.DEMO_ACCOUNT,CommonConst.DEMO_PASSWORD);
  await assignMentPage.viewDemoProject();
});

test.afterEach(async () => {
  // Close the browser context after each test
  await browserContext.close();
});

test.describe("Assignment", () => {
  test("TC_0001 Check DateRange", async () => {
    logger.logTestCaseName("TC_0001 Check DateRange");
    logger.logTestStep("TC_0001 Check DateRange");

    logger.logTestStep("Step 1: Verify Date range component");
    expect(assignMentPage.isDateRangeComponentVisible()).toBeTruthy();
    expect(assignMentPage.comepareList(await assignMentPage.getListWeekDays(),WEEK_DAYS)).toBeTruthy();
  });

  test("TC_0002 Check Time Range", async () => {
    logger.logTestCaseName("TC_0002 Check Time Range");
    logger.logTestStep("TC_0002 Check Time Range");

    logger.logTestStep("Step 1: Verify Time Range component");
    expect(assignMentPage.comepareList(await assignMentPage.getListTimeRange(),LIST_TIME_RANGE)).toBeTruthy();
  });

  test("TC_0003 Check Column Filter", async () => {
    logger.logTestCaseName("TC_0003 Check Column Filter");
    logger.logTestStep("TC_0003 Check Column Filter");

    logger.logTestStep("Step 1: Verify Column Filter component");
    expect(assignMentPage.isColumnFilterComponentVisible()).toBeTruthy();
    expect(assignMentPage.comepareList(await assignMentPage.getListColumnValue(),LIST_COLUMN_VALUE)).toBeTruthy();

    logger.logTestStep("Step 2: Select column filter: Trace Name");
    await assignMentPage.selectColumnFilter("Trace Name");
    expect(assignMentPage.comepareList(await assignMentPage.getListLogicalFilterOptions(),LIST_LOGICAL_OPTIONS_OF_TRACE_NAME)).toBeTruthy();
  });

  test("TC_0004 Check Filter component", async () => {
    logger.logTestCaseName("TC_0004 Check Filter component");
    logger.logTestStep("TC_0004 Check Column Filter");

    logger.logTestStep("Step 1: Verify Column Filter component");
    expect(assignMentPage.isColumnFilterComponentVisible()).toBeTruthy();
    expect(assignMentPage.comepareList(await assignMentPage.getListColumnValue(),LIST_COLUMN_VALUE)).toBeTruthy();

    logger.logTestStep("Step 2: Select column filter: Tags");
    await assignMentPage.selectColumnFilter("Tags");
    expect(assignMentPage.comepareList(await assignMentPage.getListLogicalFilterOptions(), LIST_LOGICAL_OPTIONS_OF_TAGS)).toBeTruthy();
  });
});
