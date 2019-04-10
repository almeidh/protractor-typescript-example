// local import of the exported AngularPage class
import { AngularHomepage } from '../pages/angular-page';
import { element, ProtractorBy, by } from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('angularjs homepage', () => {
  it('should greet chrome user', async () => {
    const angularHomepage = new AngularHomepage();
    await angularHomepage.get();
    await angularHomepage.setName('Chrome');
    expect(await angularHomepage.getGreeting()).toEqual('Hello Chrome!');
  });

  it('should add new to-do', async () => {
    const angularHomepage = new AngularHomepage();
    await angularHomepage.get();
    await angularHomepage.enterToDo('Call my friend');
    await angularHomepage.addToDo();
    expect(await angularHomepage.countToDos()).toBe(3);
    const lastText = await angularHomepage.getLastToDoText();
    expect(lastText).toEqual('Call my friend');
  });
});
