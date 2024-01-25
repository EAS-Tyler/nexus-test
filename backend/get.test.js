const request = require('supertest')
const app = require('./app')

// test('returns expected value', async () => {
//     const response = await request(app).get('/')
//     // expect(response.status).toBe(200)
//     expect(response.body).toEqual('nice1')
// })

test('returns expected value', async () => {
    const response = await request(app).get('/')
    // expect(response.status).toBe(200)
    expect(response.body).toEqual('nice1')
})