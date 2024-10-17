import events, {EventEmitter} from 'events'

const emitter = new EventEmitter()

function log(msg) {
    console.log(msg)
}

emitter.on('event', () => {
    log('event 1')
})

emitter.on('event', () => {
    log('event 2')
})

emitter.setMaxListeners(20)
log(emitter.getMaxListeners()) //10 by default

emitter.on('otherEvent', () => {
    log('other event')
})

setTimeout(() => {
    emitter.emit('event')
}, 900)

setTimeout(() => {
    emitter.emit('otherEvent')
}, 1500)

log(emitter.eventNames())