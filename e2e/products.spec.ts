import { test, expect } from '@playwright/test';

test('データ取得中はローディングスピナーが表示される', async ({ page }) => {
  await page.route('/api/products', async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        products: [
          { id: 1, name: '商品 A', price: 1000 },
          { id: 2, name: '商品 B', price: 2000 },
        ],
      }),
    });
  });

  await page.goto('/products');

  const loadingSpinner = page.getByTestId('loading-spinner');
  await expect(loadingSpinner).toBeVisible();

  await expect(page.getByText('商品 A')).toBeVisible();
  await expect(loadingSpinner).not.toBeVisible();
});
