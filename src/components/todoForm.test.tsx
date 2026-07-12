import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoForm } from './todoForm';

describe('todoForm', () => {
  test('必須フィールド未入力時はエラーメッセージを表示する', async () => {
    const user = userEvent.setup();
    render(<TodoForm />);

    await user.click(screen.getByRole('button', { name: '追加' }));

    expect(screen.getByRole('alert')).toHaveTextContent(
      '内容を入力してください',
    );
    expect(
      screen.queryByText('Todoの追加に成功しました'),
    ).not.toBeInTheDocument();
  });

  test('内容を入力するとエラーメッセージが消える', async () => {
    const user = userEvent.setup();
    render(<TodoForm />);

    await user.click(screen.getByRole('button', { name: '追加' }));
    expect(screen.getByRole('alert')).toBeInTheDocument();

    const input = screen.getByLabelText('内容');
    await user.type(input, '牛乳を買う');

    await user.click(screen.getByRole('button', { name: '追加' }));
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  test('内容を入力して送信すると成功メッセージが表示される', async () => {
    const user = userEvent.setup();
    render(<TodoForm />);

    const input = screen.getByLabelText('内容');
    await user.type(input, '牛乳を買う');

    await user.click(screen.getByRole('button', { name: '追加' }));
    expect(screen.getByText('Todoの追加に成功しました')).toBeInTheDocument();

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});
