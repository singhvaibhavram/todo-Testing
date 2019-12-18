describe('angularJS homepage todo-list', function(){
  it('should add a todo', function(){
    browser.get('https://angularjs.org/');

    element(by.model('todoList.todoText')).sendKeys('Ram');
    element(by.css('[value="add"]')).click();

    var elementList = element.all(by.repeater('todo in todoList.todos'));
    expect(elementList.count()).toEqual(3);
    expect(elementList.get(2).getText()).toEqual('Ram')

    elementList.get(2).element(by.css('input')).click();
    var completedTask = element.all(by.css('.done-true'));
    expect(completedTask.count()).toEqual(2);

  });
});
