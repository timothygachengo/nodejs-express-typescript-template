jest.setTimeout(30000);

describe('Ignore this test', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});
