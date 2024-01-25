const response = require('./app')

test('Properly adds 2 numbers', () => {
    expect(response(8,8)).toBe(16)
})