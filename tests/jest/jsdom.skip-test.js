/* eslint-env jest */
/**
 * @jest-environment jsdom
 */

// Browser cjs not supported yet
const Tonic = require('tonic-universal')

test('jsdom in cjs', () => {
  expect(Tonic).toBeDefined()
  expect(Tonic.moduleType).toBe('node.cjs')
})
