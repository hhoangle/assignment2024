export class AssignmentUI {
  static SIGN_UP_BUTTON = "//span[text()='Sign Up']";
  static EMAIL_FIELD = "//input[@name='email']";
  static PASSWORD_FIELD = "//input[@name='password']";
  static SIGN_IN_BUTTON = "//button[@data-testid='submit-email-password-sign-in-form']";
  static VIEW_DEMO_PROJECT_BUTTON = "//a[text()='View Demo Project']";
  static DATE_PICKER_BUTTON = "//button[@id='date' and @data-sentry-source-file='date-picker.tsx']";
  static START_TIME = "//p[text()='Start time']";
  static END_TIME = "//p[text()='End time']";
  static PREVIOUS_MONTH_BUTTON = "//button[@name='previous-month']";
  static NEXT_MONTH_BUTTON = "//button[@name='next-month']";
  static LIST_WEEKDAY = "//div[@class='space-y-4 rdp-caption_start']//th";
  static LIST_TIME_RANGE_OPTIONS = "//div[@role='option']//span[2]";
  static TIME_RANGE_DROPDOWN = "//button[@data-sentry-source-file='date-range-dropdowns.tsx']";
  static COLUMN_FILTER_BUTTON = "//button[@data-sentry-source-file='filter-builder.tsx']";
  static COLUMN_DROPDOWN = "//table[@class='table-auto']//button[text()='Column']";
  static ADD_FILTER_BUTTON = "//table[@class='table-auto']//following-sibling::button[text()='Add filter']";
  static COLUMN_VALUE = "//div[@role='group']//div";
  static COLUMN_OPTIONS = "//div[@role='group']//div[text()='%s']";
  static LOGICAL_FILTER_DROPDOWN = "//table//tbody//tr//td[@class='p-1'][1]";
  static LOGICAL_FILRER_OPTIONS = "//div[@role='listbox']//div[@role='option']//span[2]";
}
