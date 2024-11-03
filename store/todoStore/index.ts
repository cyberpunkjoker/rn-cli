import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getCurrentTime } from '@/utils/day';
import uuid from 'react-native-uuid';

export interface CounterState {
  todoList: TodoListDto[]
}

const initialState: CounterState = {
  todoList: []
}

const addNewItem = (content: string) => {
  return {
    id: uuid.v4(),
    content: content,
    creatTime: getCurrentTime(),
    isDone: false,
    finishTime: null,
  }
}

export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<{ content: string }>) => {
      const item = addNewItem(action.payload.content)
      state.todoList.push(item)
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.todoList.findIndex(item => item.id === action.payload.id)
      state.todoList.splice(index, 1)
    },
    updateTodo: (state, action: PayloadAction<{ id: string, content: string }>) => {
      const index = state.todoList.findIndex(item => item.id === action.payload.id)
      state.todoList[index].content = action.payload.content
    },
    finishTodo: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.todoList.findIndex(item => item.id === action.payload.id)
      state.todoList[index].isDone = true
      state.todoList[index].finishTime = getCurrentTime()
    },
    unfinishTodo: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.todoList.findIndex(item => item.id === action.payload.id)
      state.todoList[index].isDone = false
      state.todoList[index].finishTime = null
    }
  },
})

export const {
  createTodo,
  deleteTodo,
  updateTodo,
  finishTodo,
  unfinishTodo
} = counterSlice.actions

export default counterSlice.reducer