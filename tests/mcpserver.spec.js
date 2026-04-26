//Navigate to https://demo.playwright.dev/todomvc and add a few todo items.

import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');

test('add todo items', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  const todoInput = page.locator('.new-todo');
  await todoInput.fill('Buy groceries');
  await todoInput.press('Enter');

  await todoInput.fill('Walk the dog');
  await todoInput.press('Enter');

  const todoItems = page.locator('.todo-list li');
  await expect(todoItems).toHaveCount(2);
  await expect(todoItems.nth(0)).toHaveText('Buy groceries');
  await expect(todoItems.nth(1)).toHaveText('Walk the dog');
});
