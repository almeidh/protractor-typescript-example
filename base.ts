import { browser, ExpectedConditions } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { async } from 'q';
const EC = ExpectedConditions;
const ECTimeout = 120000;
const validateTimeout = 10000;

export class Base {

  public async navigateTo(url: string) {
    try {
      await browser.get(url);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async maximize() {
    try {
      await browser.manage().window().maximize();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async goBack() {
    try {
      await browser.navigate().back();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async refreshBrowser() {
    try {
      await browser.refresh();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async openNewTab(url: string) {
    try {
      await browser.executeScript('return window.open(arguments[0], \'_blank\')', url);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async swithToTab(handle: number) {
    try {
      const handles = await browser.getAllWindowHandles();
      return browser.switchTo().window(handles[handle]);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getCurrentUrl() {
    try {
      const url = await browser.getCurrentUrl();
      return url;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async scroll(x: number, y: number) {
    try {
      await browser.executeScript(`window.scrollTo(${x},${y});`);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async scrollIntoView(element: any) {
    try {
      await browser.executeScript('arguments[0].scrollIntoView()', element.getWebElement());
    } catch (error) {
      throw new Error(error);
    }
  }

  public async restartBrowser() {
    try {
      await browser.restart();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async clearLocalStorage() {
    try {
      await browser.executeScript('window.localStorage.clear();');
    } catch (error) {
      throw new Error(error);
    }
  }

  public async clearSessionStorage() {
    try {
      await browser.executeScript('window.sessionStorage.clear();');
    } catch (error) {
      throw new Error(error);
    }
  }

  public async clearCookies() {
    try {
      await browser.manage().deleteAllCookies();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getSessionId() {
    try {
      const session = await browser.getSession();
      return session.getId();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async takeScreenshot() {
    try {
      await browser.takeScreenshot();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async wait(timeout: number) {
    try {
      await browser.sleep(timeout);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async waitForVisibilityOfElement(element: any) {
    try {
      await browser.wait(EC.visibilityOf(element), ECTimeout, '[FAIL] - Element appears to be invisible. Selector: ' + element.locator());
    } catch (error) {
      throw new Error(error);
    }
  }

  public async clearField(element: any) {
    try {
      await element.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
      await element.sendKeys(protractor.Key.DELETE);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async waitForElementXLocation(element: any, coordinateValue: number) {
    try {
      await browser.wait(async () => {
        const value: { x: number; } = await element.getLocation();
        return value.x === coordinateValue;
      }, validateTimeout, '[FAIL] - Returned value: ' + coordinateValue + ' for element location is not correct!');
    } catch (error) {
      throw new Error(error);
    }
  }

  public async waitForDisappearanceOfElement(element: any) {
    try {
      await browser.wait(EC.stalenessOf(element), validateTimeout, '[FAIL] - Element is still present. Selector: ' + element.locator());
    } catch (error) {
      throw new Error(error);
    }
  }

  public async waitForTextInElement(element: any, text: string) {
    try {
      await browser.wait(EC.textToBePresentInElement(element, text), validateTimeout, '[FAIL] - Text in element in not present. Selector: '
      + element.locator());
    } catch (error) {
      throw new Error(error);
    }
  }

  public async waitForValueInElement(el: any, text: string) {
    try {
      await browser.wait(EC.textToBePresentInElementValue(el, text), validateTimeout, '[FAIL] - Text in element in not present. Selector: '
      + el.locator());
    } catch (error) {
      throw new Error(error);
    }
  }

  public async waitForAttributeValue(element: any, attribute: any, attValue: any) {
    try {
      await browser.wait(async () => {
        const value: any = await element.getAttribute(attribute);
        return value === attValue;
      }, validateTimeout, '[FAIL] - Element: ' + element.locator() + ' attribute value does not match with expected value: ' + attValue);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async waitForClickableElement(element: any) {
    try {
      await browser.wait(EC.elementToBeClickable(element), validateTimeout, '[FAIL] - Element appears not to be clickable. Selector: '
      + element.locator());
    } catch (error) {
      throw new Error(error);
    }
  }

  public async waitForInvisibilityOfElement(element: any) {
    try {
      await browser.wait(EC.invisibilityOf(element), validateTimeout, '[FAIL] - Element appears to be visible. Selector: '
      + element.locator());
    } catch (error) {
      throw new Error(error);
    }
  }

  public async waitForNotClickableElement(element: any) {
    try {
      await browser.wait(EC.not(EC.elementToBeClickable(element)), validateTimeout, '[FAIL] - Element appears to be clickable. Selector: '
      + element.locator());
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getElementText(element: any) {
    try {
      const text: any = await element.getText();
      return text;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getElementAttribute(element: any, attribute: any) {
    try {
      const value: any = await element.getAttribute(attribute);
      return value;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async isElementPresent(element: any) {
    try {
      const value: any = await element.isPresent();
      return value;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async isElementDisplayed(element: any) {
    try {
      const value: any = await element.isDisplayed();
      return value;
    } catch (error) {
      throw new Error(error);
    }
  }
}
