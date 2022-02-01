export const addTodoCreator = ([state, func]) => {
    return (newTodo) => {
        return func([...state, newTodo]);
    }
}

export const removeTodoCreator = ([state, func]) => {
    return (title) => {
        return func(state.filter(todo => todo.title !== title)); 
    }
}
