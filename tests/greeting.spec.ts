// local import of the exported AngularPage class
import {AngularHomepage} from '../pages/angular-page';
import { element, ProtractorBy } from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('angularjs homepage', () => {
  it('should greet chrome user', () => {
    let angularHomepage = new AngularHomepage();
    angularHomepage.get();
    angularHomepage.setName('Chrome');
    expect(angularHomepage.getGreeting()).toEqual('Hello Chrome!');
  });

  it('should add new to-do', () => {
    let angularHomepage = new AngularHomepage();
    angularHomepage.get();
    angularHomepage.enterToDo('Call my friend');
    angularHomepage.addToDo();
    expect(angularHomepage.countToDos()).toBe(3);
    let lastText = angularHomepage.getLastToDoText();
    expect(lastText).toEqual('Call my friend');
  });
});