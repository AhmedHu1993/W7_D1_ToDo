import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            todos: [
                {name: "Do Shopping", lowPriority: true}, 
                {name: "Call Family", lowPriority: false}, 
                {name: "Cook Dinner", lowPriority: true}],
            lowPriority: "",
            newItem: ""
            
        },
        methods: {
            saveNewItem: function() {
                this.todos.push({
                    name: this.newItem,
                    lowPriority: this.lowPriority
                });
                this.newItem="";
                this.lowPriority="";
            }

        }
    })
})