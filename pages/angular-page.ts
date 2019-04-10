import {browser, element, by, ProtractorBy} from 'protractor';
import {Base} from '../base';

export class AngularHomepage extends Base {
  nameInput = element(by.model('yourName'));
  greeting = element(by.binding('yourName'));
  todoInput = element(by.model('todoList.todoText'));
  addToDoButton = element(by.css('input[value="add"]'));

  public async get() {
    try {
      await browser.get('http://www.angularjs.org');
    } catch (error) {
      throw new Error(error);
    }
  }

  public async setName(name: string) {
    try {
      await this.nameInput.sendKeys(name);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getGreeting() {
    try {
      const txt: string = await this.greeting.getText();
      return txt;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async enterToDo(todo: string) {
    try {
      await this.todoInput.sendKeys(todo);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async addToDo() {
    try {
      await this.addToDoButton.click();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async countToDos() {
    try {
      const num: any = await element.all(ProtractorBy.prototype.repeater('todo in todoList.todos')).count();
      return num;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getLastToDoText() {
    try {
      const txt: any = await element.all(ProtractorBy.prototype.repeater('todo in todoList.todos')).last().getText();
      return txt;
    } catch (error) {
      throw new Error(error);
    }
  }
}
