/* eslint-env jest */

const Tonic = require('tonic-universal')

test('node in cjs', () => {
  expect(Tonic).toBeDefined()
  expect(Tonic.moduleType).toBe('node.cjs')
})
