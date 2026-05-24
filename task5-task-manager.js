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
        if (!task) return 
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
        await delay(300)
        if(Math.random() < 0.5){
            throw new Error("cant save")
        }
        console.log('saved')
    }


    async loadFromStorage() {
      await delay (3000)
      return [...this.tasks.values()]
    }
}

const manager = new TaskManager()

manager.addTask("купить продукты", ["личное", "срочно"])
manager.addTask("сделать домашку", ["учёба"])
manager.completeTask(1)

console.log(manager.getStats())
console.log(manager.getByTag("личное"))

manager.saveToStorage().catch(console.error)
