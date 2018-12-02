import { sleep } from './AsyncHelpers'

describe('AsyncHelpers', () => {
  it('sleep', done => {
    const runAsync = async () => {
      let triggered = false
      setTimeout(() => {
        expect(triggered).toBe(true)
      }, 100)

      await sleep(50)
      triggered = true
      done()
    }
    runAsync()
  })
})
