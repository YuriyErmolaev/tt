export interface TodosResponse extends Array<Todo>{}

export interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}