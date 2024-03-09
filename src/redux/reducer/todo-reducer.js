import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: [],
    count: 0,
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return { ...state, todoList: [...state.todoList, action.payload] }
        },
        deleteTodo: (state, action) => {
            return { ...state, todoList: state.todoList.filter((item) => item.id !== action.payload.id) }
        },
        editTodo: (state, action) => {
            let newName = prompt("");
            return { ...state, todoList: action.payload=newName }
        }
    }
})

export default todoSlice.reducer

export const { addTodo, deleteTodo,editTodo } = todoSlice.actions