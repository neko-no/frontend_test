import { test, expect } from '@playwright/test';

test('セレクトボックスで選択できる', async ({ page }) => {
  await page.goto('/form');

  await page.getByLabel('都道府県').selectOption('tokyo');
  await page.getByLabel('都道府県').selectOption({ label: '東京都' });

  await expect(page.getByLabel('都道府県')).toHaveValue('tokyo');
});
