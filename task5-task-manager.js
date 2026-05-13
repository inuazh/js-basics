const { delay } = require("./task4-delay")

class TaskManager {

    constructor (){
       this.tasks= new Map()
        this.nextId = 1
    }

    addTask(title,tags){
        const id = this.nextId++
        const task = {
            id,
            title,
            tags: new Set(tags),
            completed: false,
        }
        this.tasks.set(id,task)
    }

    completeTask(id) {
        const task = this.tasks.get(id)
        task.completed = true
    }

    deleteTask(id) {
        this.tasks.delete(id)
    }
    getByTag(tag) {
        return [...this.tasks.values()].filter(task => task.tags.has(tag))
    }
    getStats() {
        const tasks = [...this.tasks.values()]
        return{
            total: tasks.length,
            completed: tasks.filter(t => t.completed).length,
            pending: tasks.filter(t => !t.completed).length,
            allTags: new Set(tasks.flatMap(t => [...t.tags]))
        }
    }


    async saveToStorage() {
        try{
            await delay(300)
            console.log('saved')
        }catch(err){
            throw err
        }
    }


    async loadFromStorage() {
        try {
            await delay(300)
            console.log('downloaded')
        } catch (err) {
            throw err
        }
    }
}

const manager = new TaskManager()

manager.addTask("купить продукты", ["личное", "срочно"])
manager.addTask("сделать домашку", ["учёба"])
manager.completeTask(1)

console.log(manager.getStats())
console.log(manager.getByTag("личное"))

manager.saveToStorage().catch(console.error)
