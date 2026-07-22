import { test, expect } from '@playwright/test';

test('データ取得中はスケルトンスクリーンが表示される', async ({ page }) => {
  await page.route('/api/articles', async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        articles: [
          { id: 1, title: '記事タイトル 1', author: '著者 A' },
          { id: 2, title: '記事タイトル 2', author: '著者 B' },
        ],
      }),
    });
  });

  await page.goto('/articles');

  const skeleton = page.getByTestId('skeleton-card');
  await expect(skeleton.first()).toBeVisible();
  await expect(skeleton).toHaveCount(3);

  await expect(page.getByText('記事タイトル 1')).toBeVisible();
  await expect(page.getByText('著者 A')).toBeVisible();

  await expect(skeleton).not.toBeVisible();
});
