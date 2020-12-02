describe("Lesson 13 (getHTML , waitUntil methods)", () => {
  //
  xit("should wait until", () => {
    browser.url("https://webdriver.io/");
    browser.waitUntil(
      () => {
        return $('[href="/blog/"]').isDisplayed();
      },
      10000,
      "Can not display blog"
    );
  });

  //
  it("should get the html for an element", () => {
    browser.url("https://webdriver.io/docs/api.html");
    const siteNavigator = $(".siteNavGroupActive");
    browser.waitUntil(
      () => {
        return siteNavigator.isDisplayed();
      },
      10000,
      "Can not display site navigation"
    );
    const outerHtml = siteNavigator.getHTML();
    console.log("outer html: ", outerHtml);

    const innerHtml = siteNavigator.getHTML(false);
    console.log("inner html: ", innerHtml);
  });
});
