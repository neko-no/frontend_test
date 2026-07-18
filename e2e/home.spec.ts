import { test, expect } from '@playwright/test';

test('ホームページのタイトルが正しく表示される', async ({ page }) => {
  // ページにアクセス
  await page.goto('/');

  // ページタイトルを確認
  await expect(page).toHaveTitle('Get started');
});
