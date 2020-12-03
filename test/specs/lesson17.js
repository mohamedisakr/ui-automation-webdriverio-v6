/**
 * lesson 17 tasks => https://webdriver.io/docs/api.html
 */
describe("write locators for the left menu", () => {
  //
  it("Task 1 Introduction / API Docs ", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // 	API Docs [class="navItem"][href="/docs/api.html"]
    const docs = $("[class='navItem'][href='/docs/api.html']");
    browser.pause(3000);
    console.log(docs.getText());
  });

  //
  it("Task 2 Protocols / Webdriver Protocol ", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // 	Webdriver Protocol [class="navItem"][href="/docs/api/webdriver.html"]
    const protocol = $("[class='navItem'][href='/docs/api/webdriver.html']");
    browser.pause(3000);
    console.log(protocol.getText());
  });

  //
  it("Task 3 Protocols / Appium ", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // 	Appium [class="navItem"][href="/docs/api/appium.html"]
    const appium = $("[class='navItem'][href='/docs/api/appium.html']");
    browser.pause(3000);
    console.log(appium.getText());
  });

  //
  it("Task 4 Protocols / JSON Wire Protocol ", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // 	JSON Wire Protocol [class="navItem"][href="/docs/api/appium.html"]
    const json = $("[class='navItem'][href='/docs/api/appium.html']");
    browser.pause(3000);
    console.log(json.getText());
  });

  //
  it("Task 5 Protocols / Mobile JSON Wire Protocol ", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // 	Mobile JSON Wire Protocol [class="navItem"][href="/docs/api/jsonwp.html"]
    const mobile = $("[class='navItem'][href='/docs/api/jsonwp.html']");
    browser.pause(3000);
    console.log(mobile.getText());
  });

  //
  it("Task 6 Protocols / Chromium ", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // 	Chromium [class="navItem"][href="/docs/api/chromium.html"]
    const chromium = $("[class='navItem'][href='/docs/api/chromium.html']");
    browser.pause(3000);
    console.log(chromium.getText());
  });

  //
  it("Task 7 Protocols / Sauce Labs ", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // 	Sauce Labs [class="navItem"][href="/docs/api/saucelabs.html"]
    const chromium = $("[class='navItem'][href='/docs/api/saucelabs.html']");
    browser.pause(3000);
    console.log(chromium.getText());
  });
});

//
describe("write locators for the page body", () => {
  //
  it("Task 1 body / Appium ", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // Appium [href="http://appium.io"]
    const appium = $("[href='http://appium.io']");
    browser.pause(3000);
    console.log(appium.getText());
  });

  //
  it("Task 2 body / legacy docs websites! ", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // legacy docs websites! [href="versions.html"]
    const legacy = $("[href='versions.html']");
    browser.pause(3000);
    console.log(legacy.getText());
  });

  //
  it("Task 3 body / Contribute ", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // Contribute [class="toc-headings"] [href="#contribute"]
    const contribute = $("[class='toc-headings'] [href='#contribute']");
    browser.pause(3000);
    console.log(contribute.getText());
  });

  //
  it("Task 4 body / Examples (first paragraph) ", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // Examples (first paragraph) //span/p[2]
    const para = $("//span/p[2]");
    browser.pause(3000);
    console.log(para.getText());
  });
});

//
describe("write locators for footer menu", () => {
  //
  it("Task 1 Docs / Getting Started", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // 	Getting Started .sitemap a[href="/docs/gettingstarted.html"]
    const gettingstarted = $(".sitemap a[href='/docs/gettingstarted.html']");
    browser.pause(3000);
    console.log(gettingstarted.getText());
  });

  //
  it("Task 2 Docs / API Reference", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // 	API Reference .sitemap [href="/docs/api.html"]
    const api = $(".sitemap [href='/docs/api.html']");
    browser.pause(3000);
    console.log(api.getText());
  });

  //
  it("Task 3 Docs / Contribute", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // 	Contribute .sitemap [href="/docs/contribute.html"]
    const contribute = $(".sitemap [href='/docs/contribute.html']");
    browser.pause(3000);
    console.log(contribute.getText());
  });

  //
  it("Task 4 Docs / Help", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // 	Help .sitemap [href="/help.html"]
    const help = $(".sitemap [href='/help.html']");
    browser.pause(3000);
    console.log(help.getText());
  });

  //
  it("Task 5 Community / Stack Overflow ", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // 	Stack Overflow [href="https://stackoverflow.com/questions/tagged/webdriver-io"]
    const stackOver = $(
      "[href='https://stackoverflow.com/questions/tagged/webdriver-io']"
    );
    browser.pause(3000);
    console.log(stackOver.getText());
  });

  //
  it("Task 6 Community / Support Chat", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // 	Support Chat [href="https://gitter.im/webdriverio/webdriverio"]
    const chat = $("[href='https://gitter.im/webdriverio/webdriverio']");
    browser.pause(3000);
    console.log(chat.getText());
  });

  //
  it("Task 7 Community / Slack", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // 	Slack [href="https://seleniumhq.slack.com/join/shared_invite/zt-f7jwg1n7-RVw4v4sMA7Zjufira_~EVw#/"]
    const slack = $(
      "[href='https://seleniumhq.slack.com/join/shared_invite/zt-f7jwg1n7-RVw4v4sMA7Zjufira_~EVw#/']"
    );
    browser.pause(3000);
    console.log(slack.getText());
  });

  //
  it("Task 8 Community / Twitter", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // 	Twitter [href="https://twitter.com/webdriverio"]
    const twitter = $("[href='https://twitter.com/webdriverio']");
    browser.pause(3000);
    console.log(twitter.getText());
  });

  //
  it("Task 9 More / Tidelift Subscription", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // 	Tidelift Subscription [href="/docs/enterprise.html"]
    const tidelift = $("[href='/docs/enterprise.html']");
    browser.pause(3000);
    console.log(tidelift.getText());
  });

  //
  it("Task 10 More / Blog", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // 	Blog [href="/blog"]
    const blog = $("[href='/blog']");
    browser.pause(3000);
    console.log(blog.getText());
  });

  //
  it("Task 11 More / GitHub", () => {
    const wdio = "https://webdriver.io/docs/api.html";
    browser.url(wdio);
    // 	GitHub .sitemap a[href="https://github.com/webdriverio/webdriverio"]
    const github = $(
      ".sitemap a[href='https://github.com/webdriverio/webdriverio']"
    );
    browser.pause(3000);
    console.log(github.getText());
  });
});
