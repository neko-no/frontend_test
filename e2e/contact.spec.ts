import { test, expect } from '@playwright/test';

test('フォームに入力ができる', async ({ page }) => {
  await page.goto('/contact');

  await page.getByLabel('お名前').fill('山田太郎');
  await page.getByLabel('メールアドレス').fill('yamada@example.com');
  await page.getByLabel('お問い合わせ内容').fill('テスト送信です');

  await expect(page.getByLabel('お名前')).toHaveValue('山田太郎');
  await expect(page.getByLabel('メールアドレス')).toHaveValue(
    'yamada@example.com',
  );
  await expect(page.getByLabel('お問い合わせ内容')).toHaveValue(
    'テスト送信です',
  );
});
