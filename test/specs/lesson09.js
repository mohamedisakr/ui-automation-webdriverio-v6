describe("Lesson 9 tasks", () => {
  //
  xit("Task 1: print page url in the console", () => {
    browser.url("https://webdriver.io/docs/api.html");
    console.log(browser.getUrl());
  });

  // __docusaurus
  xit("Task 2: print h1 in the console", () => {
    browser.url("https://webdriver.io/docs/api.html");
    const h1 = $("#__docusaurus");
    console.log(h1.getText());
  });

  // <a href="https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol">JSONWire protocol</a>
  xit("Task 3: print h1 in the console", () => {
    browser.url("https://webdriver.io/docs/api.html");
    const label = $("//a[contains(.,'JSONWire')]");
    console.log(label.getText());
  });

  //
  it("Task 4: type some text in the search box", () => {
    browser.url("https://webdriver.io/");
    const searchBox = $("#search_input_react");
    searchBox.setValue("course");
    const val = searchBox.getValue();
    console.log(val);
  });
});
