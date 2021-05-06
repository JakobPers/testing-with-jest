const stack = require('../src/stack');

test('Pusha två element, poppa bort sista och peek på kvarvarande element', () => {
    stack.push(1337);
    stack.push("it to the limit");
    stack.pop();
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1337);
});
