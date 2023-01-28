import Emittery from 'emittery'


class MyEmitter extends Emittery {
    constructor() {
        super({
            debug: {
                name: 'MyEmitter',
                enabled: true,
                logger: MyEmitter.logger
            }
        })
    }

    static logger(type: any, debugName: any, eventName: any, eventData: any) {
        let line: string = `[${type}]`

        if (typeof eventName === 'string')
            line += ` '${eventName}'`

        if (typeof eventName === 'number')
            line += ` [${eventName}]`

        if (typeof eventData === 'string')
            line += ` (${eventData})`

        console.log(line)
    }
}


const emitter = new MyEmitter()

const iterator = emitter.events(0)

emitter.on(0, data => {
    console.log(data)
})

emitter.emit(0, 'hello')
emitter.emit(0, 'world')


//for await (const data of iterator) {
//    console.log(data)
//}


emitter.emit(0, 'hello')

for await (const data of iterator) {
    console.log(data)
}
