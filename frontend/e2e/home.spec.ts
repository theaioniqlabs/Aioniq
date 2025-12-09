import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load the home page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/AiONIQ Labs/i);
  });

  test('should display hero section', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/AiONIQ — design x AI/i)).toBeVisible();
  });

  test('should navigate to contact page', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Get in touch');
    await expect(page).toHaveURL(/.*contact/);
  });

  test('should navigate to work page', async ({ page }) => {
    await page.goto('/');
    await page.click('text=View work');
    await expect(page).toHaveURL(/.*work/);
  });

  test('should display navigation header', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByText('AiONIQ')).toBeVisible();
  });
});

