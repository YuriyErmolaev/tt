import {TodosResponse, Todo} from './todos_structure'

export function  getTodosByCount(count: number)
{
    return fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {      
        return response.text()      
    })    
    .then<TodosResponse>((responseText) => {
        return JSON.parse(responseText)
    })
    .then((data) => {        
        if (data.length === 0) {
            throw Error(`There is no todos.`)
        }
        if (data.length < count) {
            throw Error(`There is todos less then input count.`)
        }
        return data.slice(0, count);
    });
}