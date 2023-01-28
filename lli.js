import Emittery from 'emittery';
export default lli;
var lli;
(function (lli) {
    class Event {
        static emitter = new Emittery({
            debug: {
                name: 'lli::Event',
                enabled: true
            }
        });
        key;
        constructor() {
            this.key = Symbol();
        }
        attach(handler) {
            return Event.emitter.on(this.key, handler);
        }
        detach(handler) {
            Event.emitter.off(this.key, handler);
        }
        dispatch(data) {
            Event.emitter.emit(this.key, data);
        }
    }
    lli.Event = Event;
})(lli || (lli = {}));
