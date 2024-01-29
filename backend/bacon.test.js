const { testin } = require('./app')

test('testin should be bacon', () => {
    expect(testin()).toBe('bacon')
})