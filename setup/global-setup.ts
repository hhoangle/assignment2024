// setup/global-setup.ts

import { FullConfig } from "@playwright/test";
import { logger } from "../Logger/logger"; // Import the logger file

export default async function globalSetup(config: FullConfig) {
  console.log("Running global setup...");

  // Log some global setup information
  logger.logAction("Initializing global setup...");

  // Here, you can add logic to prepare environment, set global variables, etc.
  // For example, set an environment variable or initialize a database connection.
  process.env.TEST_ENV = "development"; // Example: set an environment variable

  // Log the browser type for clarity
  const browserType = config.projects?.[0]?.use?.browserName || "unknown";
  logger.logAction(`Configured to run tests on ${browserType}`);

  // You can also use `logger.logToReport` to send logs that will be captured by Allure or other reporters
  logger.logToReport("Global setup completed");
}
