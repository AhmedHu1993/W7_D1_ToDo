import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            todos: [
                {name: "Do Shopping", lowPriority: false}, 
                {name: "Call Family", lowPriority: true}, 
                {name: "Cook Dinner", lowPriority: false}],
            lowPriority: false,
            newItem: "",
            
        },
        methods: {
            saveNewItem: function() {
                this.todos.push({
                    name: this.newItem,
                    lowPriority: this.lowPriority
                });
                this.newItem="";
            }

        }
    })
})