describe("Lesson 9 tasks", () => {
  //
  xit("should detect if an element is clickable", () => {
    browser.url("https://webdriver.io/");
    const blog = $('href="/blog/"');
    const isClickable = blog.isClickable();
    console.log("Is blog menu item is Clickable? ", isClickable);
  });

  //
  it("should detect if an element is displayed", () => {
    browser.url("https://webdriver.io/");
    const blog = $('href="/blog/"');
    const isDisplayed = blog.isDisplayed();
    console.log("Is blog menu item is Displayed? ", isDisplayed);
  });

  //
  xit("should detect if an element is visible", () => {
    browser.url("https://webdriver.io/");
    const blog = $('href="/blog/"');
    const isDisplayedInViewport = blog.isDisplayed();
    console.log(
      "Is blog menu item is Displayed in Viewport? ",
      isDisplayedInViewport
    );
  });
});
