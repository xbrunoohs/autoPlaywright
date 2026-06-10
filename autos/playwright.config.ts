import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',

  // Executa testes em paralelo
  fullyParallel: true,

  // Falha se houver test.only em CI
  forbidOnly: !!process.env.CI,

  // Retries apenas em CI
  retries: process.env.CI ? 2 : 0,

  // Limita workers em CI
  workers: process.env.CI ? 1 : undefined,

  // Relatório HTML
  reporter: 'html',

  use: {
    // Captura trace ao repetir testes falhos
    trace: 'on-first-retry',

    // Tempo máximo para cada ação
    actionTimeout: 10000,

    // Captura screenshot ao falhar
    screenshot: 'only-on-failure',

    // Captura vídeo ao falhar
    video: 'retain-on-failure',

    baseURL: process.env.BASE_URL,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  //   {
  //     name: 'firefox',
  //     use: {
  //       ...devices['Desktop Firefox'],
  //    },
  //  },
  //   {
  //     name: 'webkit',
  //     use: {
  //       ...devices['Desktop Safari'],
  //     },
  //   },
  ],
});