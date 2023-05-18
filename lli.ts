import Emittery from 'emittery'

export namespace lli {
    export class Event<T extends Object> {
        private static emitter: Emittery = new Emittery({
            debug: {
                name: 'lli::Event',
                enabled: true
            }
        })

        private key: symbol

        constructor() {
            this.key = Symbol()
        }

        attach(handler: (data: T) => void): () => void {
            return Event.emitter.on(this.key, handler)
        }

        detach(handler: (data: T) => void) {
            Event.emitter.off(this.key, handler)
        }

        dispatch(data: T): void {
            Event.emitter.emit(this.key, data)
        }
    }
}
