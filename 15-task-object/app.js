const toDoList={
    task:[
        {
            title:"Помыть",
            id:1,
            priority:5
        },
        {
            title:"Поесть",
            id:2,
            priority:1
        }
    ],

    addTask(title, priority){
        const id = this.task.map(id => id.id).sort((a, b) => b - a)[0] + 1
        return this.task.push({title, id, priority}) 
        },

    removeTask(id){
        const index = this.task.findIndex(i => i.id === id)
        return this.task.splice(index, 1)
    },

    refreshTitle(title, id) {
        const index = this.task.findIndex(i => i.id === id)
        return this.task[index].title = title        
    },

    sortPriority(){
        return this.task.sort((a,b) => b.priority - a.priority)
    }
}