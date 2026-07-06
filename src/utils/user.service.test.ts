import { fetchUser } from './user.service';

describe('fetchUser', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('ユーザー情報を正しく取得できる', async () => {
    const mockUser = { id: 1, name: 'Alice' };

    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockUser),
    } as Response);

    const user = await fetchUser(1);

    expect(user).toEqual(mockUser);
    expect(globalThis.fetch).toHaveBeenCalledWith('/api/users/1');
  });

  it('APIエラー時に例外を投げる', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
    } as Response);

    await expect(fetchUser(999)).rejects.toThrow('Failed to fetch user');
  });
});
