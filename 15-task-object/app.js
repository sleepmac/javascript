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

    addTask: function(title, priority){
        const id = this.task.map(id => id.id).sort((a, b) => b - a)[0] + 1
        return this.task.push({title, id, priority}) 
        },

    removeTask: function(id){
        const index = this.task.findIndex(i => i.id === id)
        return this.task.splice(index, 1)
    },

    refreshTitle: function(title, id) {
        const index = this.task.findIndex(i => i.id === id)
        return this.task[index].title = title        
    },

    sortPriority: function(){
        return this.task.sort((a,b) => b.priority - a.priority)
    }
}