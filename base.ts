import { browser, ExpectedConditions } from "protractor";
import { protractor } from "protractor/built/ptor";
const EC = ExpectedConditions;
const ECTimeout = 120000;
const validateTimeout = 10000;

export class Base {

  public navigateTo(url: string) {
    return browser.get(url);
  }

  public maximize() {
    return browser.manage().window().maximize();
  }

  public goBack() {
    return browser.navigate().back();
  }

  public refreshBrowser() {
    return browser.refresh();
  }

  public openNewTab(url: string) {
    return browser.executeScript("return window.open(arguments[0], '_blank')", url);
  }

  public async swithToTab(handle: number) {
    const handles = await browser.getAllWindowHandles();
    return browser.switchTo().window(handles[handle]);
  }

  public getCurrentUrl(): any {
    return browser.getCurrentUrl();
  }

  public scroll(x: number, y: number) {
    return browser.executeScript(`window.scrollTo(${x},${y});`);
  }

  public scrollIntoView(element: any) {
    return browser.executeScript("arguments[0].scrollIntoView()", element.getWebElement());
  }

  public restartBrowser() {
    return browser.restart();
  }

  public clearLocalStorage() {
    return browser.executeScript("window.localStorage.clear();");
  }

  public clearSessionStorage() {
    return browser.executeScript("window.sessionStorage.clear();");
  }

  public clearCookies() {
    return browser.manage().deleteAllCookies();
  }

  public async getSessionId() {
    const session = await browser.getSession();
    return session.getId();
  }

  public takeScreenshot() {
    return browser.takeScreenshot();
  }

  public wait(timeout: number) {
    return browser.sleep(timeout);
  }

  public waitForVisibilityOfElement(element: any) {
// tslint:disable-next-line: max-line-length
    return browser.wait(EC.visibilityOf(element), ECTimeout, "[FAIL] - Element appears to be invisible. Selector: " + element.locator());
  }

  public clearField(element: any) {
    return element.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"))
      .then(() => {
        return element.sendKeys(protractor.Key.DELETE);
      });
  }

  public waitForElementXLocation(element: any, coordinateValue: number) {
    return browser.wait(() => {
      return element.getLocation()
        .then((value: { x: number; }) => {
          return value.x === coordinateValue;
        });
    }, validateTimeout, "[FAIL] - Returned value: " + coordinateValue + " for element location is not correct!");
  }

  public waitForDisappearanceOfElement(element: any) {
// tslint:disable-next-line: max-line-length
    return browser.wait(EC.stalenessOf(element), validateTimeout, "[FAIL] - Element is still present. Selector: " + element.locator());
  }

  public waitForTextInElement(element: any, text: string) {
// tslint:disable-next-line: max-line-length
    return browser.wait(EC.textToBePresentInElement(element, text), validateTimeout, "[FAIL] - Text in element in not present. Selector: " + element.locator());
  }

  public waitForValueInElement(element: any, text: string) {
// tslint:disable-next-line: max-line-length
    return browser.wait(EC.textToBePresentInElementValue(element, text), validateTimeout, "[FAIL] - Text in element in not present. Selector: " + element.locator());
  }

  public waitForAttributeValue(element: any, attribute: any, attValue: any) {
    return browser.wait(() => {
      return element.getAttribute(attribute)
        .then((value: any) => {
          return value === attValue;
        });
// tslint:disable-next-line: max-line-length
    }, validateTimeout, "[FAIL] - Element: " + element.locator() + " attribute value does not match with expected value: " + attValue);
  }

  public waitForClickableElement(element: any) {
// tslint:disable-next-line: max-line-length
    return browser.wait(EC.elementToBeClickable(element), validateTimeout, "[FAIL] - Element appears not to be clickable. Selector: " + element.locator());
  }

  public waitForInvisibilityOfElement(element: any) {
// tslint:disable-next-line: max-line-length
    return browser.wait(EC.invisibilityOf(element), validateTimeout, "[FAIL] - Element appears to be visible. Selector: " + element.locator());
  }

  public waitForNotClickableElement(element: any) {
// tslint:disable-next-line: max-line-length
    return browser.wait(EC.not(EC.elementToBeClickable(element)), validateTimeout, "[FAIL] - Element appears to be clickable. Selector: " + element.locator());
  }

  public getElementText(element: any) {
    return element.getText()
      .then((text: any) => {
        return text;
      });
  }

  public getElementAttribute(element: any, attribute: any) {
    return element.getAttribute(attribute)
      .then((value: any) => {
        return value;
      });
  }

  public isElementPresent(element: any) {
    return element.isPresent()
      .then((value: any) => {
        return value;
      });
  }

  public isElementDisplayed(element: any) {
    return element.isDisplayed()
      .then((value: any) => {
        return value;
      });
  }
}
