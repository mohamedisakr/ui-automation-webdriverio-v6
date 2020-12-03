describe("Lesson 14 tasks", () => {
  /*
  //
  it("Task 1", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    // 1. go to page wdio
    browser.url(wdio);
    const protocol = $("//*[text()='JSONWire protocol']");

    // 2. open the link in new tab using getAttribute() and newWindow() methods
    const href = protocol.getAttribute("href");
    // 3. switch to an open tab
    browser.newWindow(href);
    browser.pause(10000);
    // 4. verify that the element with a tag already seen using isDisplayed()
    // method and output the result using console
    const wiki = $("strong a[href='/SeleniumHQ/selenium/wiki']");
    browser.waitUntil(
      () => {
        return wiki.isDisplayed();
      },
      10000,
      "Wiki can not be displayed"
    );
    console.log("Wiki text is: ", wiki.getText());
    browser.pause(10000);
    // 5. switch back to tab wdio
    browser.switchWindow(wdio);

    // 6. using waitUntil method to wait for h1 that contain text eqaul to API Docs
    const h1 = $(".postHeaderTitle");
    browser.waitUntil(
      () => {
        return h1.isDisplayed();
      },
      10000,
      "Label can not displayed"
    );

    // 7. taking a screenshot of the element .postHeaderTitle
    h1.saveScreenshot("API-Docs.png");
    browser.pause(3000);

    // 8. print the result of isDisplayed() to the console for locator
    // "[href='https://twitter.com/webdriverio']"
    const twitter = $("[href='https://twitter.com/webdriverio']");
    browser.pause(3000);
    console.log("Twitter element is displayed: ", twitter.isDisplayed());

    // 9. print the result of isDisplayedInViewport to the console for # 8
    console.log(
      "Twitter element isDisplayedInViewport: ",
      twitter.isDisplayedInViewport()
    );

    // 10. scroll to element in # 8
    twitter.scrollIntoView();
    browser.pause(3000);

    // 11. print the result of isDisplayed() to the console for locator # 8
    console.log("Twitter element is displayed: ", twitter.isDisplayed());
    browser.pause(3000);

    // 12. print the result of isDisplayedInViewport to the console for # 8
    console.log(
      "Twitter element isDisplayedInViewport: ",
      twitter.isDisplayedInViewport()
    );
    browser.pause(3000);

    // 13. print the result of isFocused for [href='/blog/'] locator
    const blog = $("[href='/blog/']");
    const isFocused = blog.isFocused();
    browser.pause(4000);
    console.log("Is blog menu item isFocused? ", isFocused);

    // 14. click blog menu item
    blog.click();
  });
  */
});
