import type { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
  },
  testDir: '.',
  testMatch: 'index.ts',
};
export default config;
