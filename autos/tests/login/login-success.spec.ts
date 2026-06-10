import 'dotenv/config';
import { test, expect } from '@playwright/test';

/**
 * Documentação:
 * ../docs/test-coverage.md#ct-001---login-com-sucesso
 */

test('@smoke @complete CT-001 - Login com sucesso', async ({ page }) => {
  await page.goto(process.env.BASE_URL!);

  await expect(page).toHaveTitle(/Swag Labs/);
  await page.getByPlaceholder('Username').fill(process.env.TEST_USER!);
  await page.getByPlaceholder('Password').fill(process.env.TEST_PASSWORD!);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(process.env.INVENTORY!);
});
