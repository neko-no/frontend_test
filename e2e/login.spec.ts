import { test, expect } from '@playwright/test';

test('ログインフォームに入力して送信できる', async ({ page }) => {
  await page.goto('/login');

  await page.getByLabel('メールアドレス').fill('user@example.com');
  await page.getByLabel('パスワード').fill('password123');

  await page.getByRole('button', { name: 'ログイン' }).click();

  await expect(page).toHaveURL('/dashboard');

  await expect(page.getByText('ようこそ、user@example.com')).toBeVisible();
});
