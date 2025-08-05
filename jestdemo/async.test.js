//write test for async

const getData = require('./async');
test('async data fetch', async()=>{
    const data = await getData();
    expect(data).toBe('data received');
});