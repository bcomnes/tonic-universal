const tap = require('tap')
const Tonic = require('tonic-universal')

tap.test('node gets tonic-universal cjs', async t => {
  t.ok(Tonic)
  t.equal(Tonic.moduleType, 'node.cjs')
})
