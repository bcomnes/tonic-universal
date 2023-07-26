import tap from 'tap'
import Tonic, { moduleType } from 'tonic-universal'

tap.test('node esm gets tonic-universal cjs', async t => {
  t.equal(moduleType, 'node.cjs')
  t.ok(Tonic)
})
