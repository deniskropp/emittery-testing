import { lli } from './lli.js'


class TestComponent {
    pos: lli.Event<{ x: number, y: number }> = new lli.Event()
    len: lli.Event<{ l: number }> = new lli.Event()
}


const tc = new TestComponent()

tc.pos.attach((data) => {
    console.log('pos', data.x, data.y)
})

tc.len.attach((data) => {
    console.log('len', data.l)
})

tc.pos.dispatch({ x: 1, y: 5 })
tc.len.dispatch({ l: 8 })
