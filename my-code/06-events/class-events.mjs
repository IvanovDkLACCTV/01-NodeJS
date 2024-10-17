import EventEmitter from "events"

class Post extends EventEmitter {
    constructor(author, text) {
        super()
        this.author = author
        this.text = text
        this.likesQty = 0
        this.time = new Date()
        this.on("likePost", (username) => log(`${username} liked your post`))
        this.on("error", (error) => log(error.message))
    }
    like(username) {
        if (!username) {
            return this.emit("error", new Error("Username is required"))
        }
        this.likesQty++
        this.emit("likePost", username)
    }
}

const post = new Post("Vasya", "Hello world")
//post.on("likePost", (username) => log(`${username} liked your post`))

const log = (data) => console.log(data)

// log(post.author)
// log(post.text)
// log(post.likesQty)

post.like('Vasya')
setTimeout(() => post.like('Peter'), 1000)
setTimeout(() => post.like('Joe'), 2000)
setTimeout(() => post.like(), 3000)
// log(post.likesQty)