// @ts-nocheck
import config from "../playwright.config"; // Import the default export from playwright.config.ts
import { allure } from "allure-playwright"; // Optional: if you're using Allure to capture logs

// Fetch browserName dynamically from the Playwright config with safe handling
const getBrowserType = (): string => {
  try {
    const browserName = config.projects?.[0]?.use?.browserName;
    return browserName || "unknown"; // Fallback to 'unknown' if browserName is undefined
  } catch (error) {
    console.error("Error fetching browser type:", error);
    return "unknown"; // Fallback in case of an exception
  }
};

// Logger functions with optional Allure integration for attaching logs to the report
export const logger = {
  logAction: (message: string) => {
    const logMessage = `[${getBrowserType()}] - ${new Date().toLocaleString()} - Action       --- ${message}`;
    console.log(logMessage);

    // Optional: Attach the log to Allure report
    if (process.env.NODE_ENV === "test") {
      allure.addAttachment("Action Log", logMessage, "text/plain");
    }
  },

  logVerify: (message: string) => {
    const logMessage = `[${getBrowserType()}] - ${new Date().toLocaleString()} - Verify       --- ${message}`;
    console.log("\x1b[94m%s\x1b[0m", logMessage);

    // Optional: Attach the log to Allure report
    if (process.env.NODE_ENV === "test") {
      allure.addAttachment("Verify Log", logMessage, "text/plain");
    }
  },

  logInfo: (message: string) => {
    const logMessage = `[${getBrowserType()}] - ${new Date().toLocaleString()} - Info         --- ${message}`;
    console.info("\x1b[35m%s\x1b[0m", logMessage);

    // Optional: Attach the log to Allure report
    if (process.env.NODE_ENV === "test") {
      allure.addAttachment("Info Log", logMessage, "text/plain");
    }
  },

  logError: (message: string) => {
    const errorMessage = `[${getBrowserType()}] - ${new Date().toLocaleString()} - Error        --- ${message}`;
    console.error("\x1b[31m%s\x1b[0m", errorMessage);

    // Optional: Attach the error log to Allure report
    if (process.env.NODE_ENV === "test") {
      allure.addAttachment("Error Log", errorMessage, "text/plain");
    }

    throw new Error(errorMessage);
  },

  logWarn: (message: string) => {
    const logMessage = `[${getBrowserType()}] - ${new Date().toLocaleString()} - Warning      --- ${message}`;
    console.warn("\x1b[43m%s\x1b[0m", logMessage);

    // Optional: Attach the warning log to Allure report
    if (process.env.NODE_ENV === "test") {
      allure.addAttachment("Warning Log", logMessage, "text/plain");
    }
  },

  logTestCaseName: (caseName: string) => {
    const logMessage = `[${getBrowserType()}] - ${new Date().toLocaleString()}  ••• Start Test Case:     ${caseName}`;
    console.warn("\x1b[33m%s\x1b[0m", logMessage);

    // Optional: Attach the test case name to Allure report
    if (process.env.NODE_ENV === "test") {
      allure.addAttachment("Test Case Name", logMessage, "text/plain");
    }
  },

  logToReport: (message: string) => {
    process.emit("test:log", message);
  },

  logTestStep: (stepName: string) => {
    const stepDescription = `Description for step: ${stepName}`;

    const separator = "--------------------------------------------";

    console.log(`${separator}`);
    console.log(
      `[Step] - ${new Date().toLocaleString()} - ${stepName}: ${stepDescription}`
    );
    console.log(`${separator}`);

    allure.step(stepName, () => {
      console.log(stepDescription);
    });
  },
};
