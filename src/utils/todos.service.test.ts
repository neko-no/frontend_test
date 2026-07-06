import { getTodos, saveTodos } from './todos.service';

describe('Todoストレージ操作', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('localStorageからTodosを取得できる', () => {
    const todo = { id: 1, text: 'Write unit tests' };

    localStorage.setItem('todos', JSON.stringify([todo]));

    expect(getTodos()).toEqual([todo]);
  });

  it('TodosをlocalStorageに保存できる', () => {
    const spy = vi.spyOn(Storage.prototype, 'setItem');
    const todos = [{ id: 1, text: 'Write unit tests' }];

    saveTodos(todos);

    expect(spy).toHaveBeenCalledWith('todos', JSON.stringify(todos));
    spy.mockRestore();
  });

  it('localStrageが空の場合は空配列を返す', () => {
    expect(getTodos()).toEqual([]);
  });
});
