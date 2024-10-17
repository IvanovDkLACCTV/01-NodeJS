import fs from 'fs'
import { EventEmitter } from 'events';

const fileEmmiter = new EventEmitter()

fileEmmiter.on('writeCompleted', () => {
    console.log('The file has been written!');
    fs.appendFile('./first.txt', '\nThe second line', () => {
        fileEmmiter.emit('appendComplete')
})
})

fileEmmiter.on('appendComplete', () => {
    console.log('The file has been appended!')
    setTimeout(() => {
        fs.rename('./first.txt', './second.txt', () => {
            fileEmmiter.emit('renameComplete')
        })
    }, 1500)
})

fileEmmiter.on('renameComplete', () => {
    console.log('The file has been renamed!')
})

fs.writeFile('./first.txt', 'The first line', () => {
    fileEmmiter.emit('writeCompleted')
})