import { 
  test as base,
  expect, 
  type Locator, 
  type Page,
  type BrowserContext
} from "@playwright/test";

type TestVars = {
  header: Locator;
  externalLink: string;
  page: Page,
  context: BrowserContext
}

type Fixtures = {
  fixture: TestVars;
}

const test = base.extend<Fixtures>({
  fixture: async ({ page, context }, use) => {
    await page.goto("/");

    const fixture = {
      header: page.getByTestId("header"),
      externalLink: "https://github.com/writhisdown/react-shinydex",
      page,
      context
    }
    await use(fixture);
  }
});

test.describe("Home Page", () => {
  test("page header should be visible", async ({ fixture }) => {
    const { header } = fixture;
    
    // check that header element is visible on page
    await expect(header).toBeVisible();
  });

  test("header should have home link that routes to homepage", async ({ fixture }) => {
    const { header, page } = fixture;

    const homeLink = header.getByRole("link", {name: "Pokedex home"});

    // check that home link is visible
    await expect(homeLink).toBeVisible();

    // check home link has correct href & routes to correct page
    await expect(homeLink).toHaveAttribute("href", "/");
    await homeLink.click();
    await expect(page).toHaveURL("/");
  });

  test("desktop: header should have text based github link that routes to correct page", async ({ fixture }) => {
    const { header, externalLink, context } = fixture;

    const pagePromise = context.waitForEvent("page");
    const githubLinkMobile = header.getByTestId("github-mobile");
    const githubLinkDesktop = header.getByTestId("github-desktop");

    // check that github link with text is visible
    await expect(githubLinkDesktop).toBeVisible();
    
    // check that github link without text is NOT visible
    await expect(githubLinkMobile).not.toBeVisible();
    
    // check desktop github link has correct href and opens 
    // external page in a new tab
    await expect(githubLinkDesktop).toHaveAttribute("href", externalLink);
    await githubLinkDesktop.click();

    const newExternalPage = await pagePromise;
    await newExternalPage.waitForLoadState();
    await expect(newExternalPage.url()).toBe(externalLink);
  });

  test("mobile: header should have icon only github link that routes to correct page", async ({ fixture }) => {
    const { header, externalLink, page, context } = fixture;

    const pagePromise = context.waitForEvent("page");
    const githubLinkMobile = header.getByTestId("github-mobile");
    const githubLinkDesktop = header.getByTestId("github-desktop");

    await page.setViewportSize({width: 639, height: 800});

    // check that icon only github link is visible
    await expect(githubLinkMobile).toBeVisible();

    // check that github link with text is NOT visible
    await expect(githubLinkDesktop).not.toBeVisible();
    
    // check icon only github link has correct href and opens 
    // external page in a new tab
    await expect(githubLinkMobile).toHaveAttribute("href", externalLink);
    await githubLinkMobile.click();
    
    const newExternalPage = await pagePromise;
    await newExternalPage.waitForLoadState();
    await expect(newExternalPage.url()).toBe(externalLink);
  });
});