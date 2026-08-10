export const mockUsers = [
  {id:1, name: "田中太郎", email: "tanaka@example.com"},
  {id:2, name: "鈴木花子", email: "suzuki@example.com"},
  {id:3, name: "佐藤次郎", email: "sato@example.com"},
];

export const generateMockUsers = (count: number) => {
  return Array.from({length: count}, (_, i) => ({
    id: i+1,
    name: `ユーザー${i+1}`,
    email: `user${i+1}@example.com`,
  }));
};


