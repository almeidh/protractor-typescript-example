import {browser, element, by, ProtractorBy} from 'protractor';

export class AngularHomepage {
  nameInput = element(by.model('yourName'));
  greeting = element(by.binding('yourName'));
  todoInput = element(by.model('todoList.todoText'));
  addToDoButton = element(by.css('input[value="add"]'));

  get() {
    return browser.get('http://www.angularjs.org');
  }

  setName(name: string) {
    return this.nameInput.sendKeys(name);
  }

  getGreeting(): any {
    return this.greeting.getText();
  }

  enterToDo(todo: string) {
    return this.todoInput.sendKeys(todo);
  }

  addToDo() {
    return this.addToDoButton.click();
  }

  countToDos(): any {
    return element.all(ProtractorBy.prototype.repeater('todo in todoList.todos')).count();
  }

  getLastToDoText(): any {
    return element.all(ProtractorBy.prototype.repeater('todo in todoList.todos')).last().getText();
  }
}