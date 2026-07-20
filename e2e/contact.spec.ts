import { test, expect } from '@playwright/test';

test('フォームに入力ができる', async ({ page }) => {
  // API レスポンスをモック化して成功レスポンスを返す
  await page.route('/api/contact', async (route) => {
    // ローディングスピナーを確実に観測できるよう少し遅延させる
    await new Promise((resolve) => setTimeout(resolve, 300));
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true }),
    });
  });

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

  await page.getByRole('button', { name: '送信' }).click();

  await expect(page.getByTestId('loading-spinner')).toBeVisible();
  await page.getByTestId('loading-spinner').waitFor({ state: 'hidden' });

  await expect(page.getByText('送信が完了しました')).toBeVisible();

  await expect(page.getByLabel('お名前')).toHaveValue('');
});
