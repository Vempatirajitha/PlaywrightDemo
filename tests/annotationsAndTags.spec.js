import { test } from "@playwright/test";

//https://playwright.dev/docs/test-annotations
// This test will be skipped
test.skip('skip this test', async({ page }) => {

});

//will show error if the test does not fail
test('not yet ready', async({ page }) => {
    test.fail();
    console.log('This test is not yet ready');
});

//test will be aborted
test.fixme('test to be fixed', async({ page }) => {
});

//marks the test as slow and triples the test timeout
test('slow test', async({ page }) => {
    test.slow();
});

/*test.only('focus this test', async ({ page }) =＞ {
    // Run only focused tests in the entire project
  });
  */

  //tags - to run tests with specific tags
  //npx playwright test --grep "@smoke"
  //npx playwright test --grep "@smoke and @fast"
  //npx playwright test --grep-invert "@smoke -> to exclude tests with @smoke tag"

  test('login test @smoke', async ({ page }) => {
    // Run only tests with the @smoke tag
  });

