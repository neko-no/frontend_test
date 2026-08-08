import { test, expect } from '@playwright/test';

test('チェックボックスを選択できる', async ({ page }) => {
  await page.goto('/settings');

  await page.getByLabel('通知を受け取る').check();
  await expect(page.getByLabel('通知を受け取る')).toBeChecked();

  await page.getByLabel('通知を受け取る').uncheck();
  await expect(page.getByLabel('通知を受け取る')).not.toBeChecked();
});
