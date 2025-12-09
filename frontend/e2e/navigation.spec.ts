import { test, expect } from '@playwright/test';

const routes = [
  { path: '/', title: 'Home' },
  { path: '/what', title: 'What' },
  { path: '/why', title: 'Why' },
  { path: '/how', title: 'How' },
  { path: '/who', title: 'Who' },
  { path: '/work', title: 'Work' },
  { path: '/contact', title: 'Contact' },
];

test.describe('Navigation', () => {
  for (const route of routes) {
    test(`should navigate to ${route.path}`, async ({ page }) => {
      await page.goto('/');
      await page.click(`text=${route.title}`);
      await expect(page).toHaveURL(route.path);
    });
  }

  test('should highlight active route in navigation', async ({ page }) => {
    await page.goto('/contact');
    const contactLink = page.getByRole('link', { name: 'Contact' });
    await expect(contactLink).toHaveClass(/text-primary/);
  });
});

