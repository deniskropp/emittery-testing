import lli from './lli';
class TestComponent {
    pos = new lli.Event();
    len = new lli.Event();
}
const tc = new TestComponent();
tc.pos.attach((data) => {
    console.log('pos', data.x, data.y);
});
tc.len.attach((data) => {
    console.log('len', data.l);
});
tc.pos.dispatch({ x: 1, y: 5 });
tc.len.dispatch({ l: 8 });
