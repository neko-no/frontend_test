import { test, expect } from '@playwright/test';

test('ホームページのタイトルが正しく表示される', async ({ page }) => {
  // ページにアクセス
  await page.goto('/');

  // ページタイトルを確認
  await expect(page).toHaveTitle('Get started');
});

test('h1要素の内容をきちんと表示されている', async ({ page }) => {
  await page.goto('/');
  // h1要素を取得
  // テキストコンテンツを検証
  const heading = page.locator('h1');
  await expect(heading).toHaveText('Get started');
});

test('ボタン要素が表示されている', async ({ page }) => {
  await page.goto('/');
  // roleによる要素の取得と検証
  const button = page.getByRole('button', { name: 'Count' });
  await expect(button).toBeVisible();
});

test('ボタンをクリックするとカウントアップする', async ({ page }) => {
  await page.goto('/');

  const button = page.getByRole('button', { name: 'Count' });
  await button.click();

  await expect(page.getByText('Count is 1')).toBeVisible();
});
