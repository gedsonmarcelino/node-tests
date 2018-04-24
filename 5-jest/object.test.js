const data = {id: '1',name: 'Darth Vader'}
const items = [data, data]

test('is this object', () => {
  expect( data ).toEqual({id:'1', name:'Darth Vader'})
})

test('test array', () => {
  expect( items ).not.toEqual([{id:'1', name:'Darth Vader'}])
})