import events, {EventEmitter} from 'events'

const emitter = new EventEmitter()

const timeoutListenerFun = (secondsQty) => { 
    console.log(`timeout event in ${secondsQty} seconds`)
}

// = emitter.eventListener
emitter.on('timeout', timeoutListenerFun) 

setTimeout(() => {
    emitter.emit('timeout', 1)
}, 1000)
setTimeout(() => {
    emitter.emit('timeout', 2)
}, 2000)
setTimeout(() => {
    emitter.emit('timeout', 3)
}, 3000)

emitter.once('singleEvent', () => {
    console.log('single event')
})

setTimeout(() => {
    emitter.emit('singleEvent')
}, 500)
setTimeout(() => {
    emitter.emit('singleEvent')
}, 1500)

setTimeout(() => {
    emitter.off('timeout', timeoutListenerFun)
}, 2500)