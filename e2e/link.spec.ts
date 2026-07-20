import { test, expect } from '@playwright/test';

test('リンクをクリックすると詳細ページに遷移する', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: '詳細を見る' }).click();

  await expect(page).toHaveURL('/details');
  await expect(page.getByRole('heading', { name: '詳細情報' })).toBeVisible();
});
