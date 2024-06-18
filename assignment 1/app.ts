interface ITodo {
    name:string;
    description:string;
    done:boolean
}

var todos: ITodo[] = [];

function add(name: string, description: string):number {
    return todos.push({
    name: name,
    description: description,
    done: false
    })
}

function remove(index: number):ITodo[] {
    return todos.splice(index, 1);
}

function list(): void {
    todos.forEach(function(todo, index) {
    console.log(index + " - " + todo.name);
    });
}
   
function update(index:number, name:string, description:string): ITodo {
    todos[index].name = name;
    todos[index].description = description;
    return todos[index];
}   

add("vishwas", "mishra")
add("nitish", "rana")
console.log(add("vikas", "singh"))
console.log(remove(0))
console.log(list())
console.log(update(1,"yash","sharma"))