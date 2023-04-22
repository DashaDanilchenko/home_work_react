import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function (location, {rejectWithValue}) {
        try {

            const response = await fetch (`http://localhost:3000/${location}`)

            if (!response.ok) {
                throw new Error ('Server Error!')
            }

        const data = await response.json() 
        return data

        } catch (error) {
            return rejectWithValue(error.massage)
        }  
    }
)

export const deleteTodoOne = createAsyncThunk(
    'todos/deleteTodo',
    async function (id,  {rejectWithValue, dispatch}) {
        try {
            const response = await fetch (`http://localhost:3000/one/${id}`,{
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error ('Error!')
            }
            dispatch(delTodo({id}))

        } catch (error) {
            return rejectWithValue(error.massage)
        }
    }
)

export const deleteTodoTwo = createAsyncThunk(
    'todos/deleteTodo',
    async function (id,  {rejectWithValue, dispatch}) {
        try {
            const response = await fetch (`http://localhost:3000/two/${id}`,{
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error ('Error!')
            }
            dispatch(delTodo({id}))

        } catch (error) {
            return rejectWithValue(error.massage)
        }
    }
)

export const deleteTodoThree = createAsyncThunk(
    'todos/deleteTodo',
    async function (id,  {rejectWithValue, dispatch}) {
        try {
            const response = await fetch (`http://localhost:3000/three/${id}`,{
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error ('Error!')
            }
            dispatch(delTodo({id}))

        } catch (error) {
            return rejectWithValue(error.massage)
        }
    }
)

export const toggleStatusOne = createAsyncThunk(
    'todos/toggleStatus',
    async function (id, {rejectWithValue, dispatch, getState}) {

        const todo = getState().todos.todos.find(todo => todo.id === id)
        try {
            const response = await fetch (`http://localhost:3000/one/${id}`, {
    method: 'PUT',
    headers: {
        'Content-Type' : 'application/json',
    },
    body: JSON.stringify({...todo, completed: !todo.completed })
})

if (!response.ok) {
    throw new Error ('Error !!!!!')
}
dispatch (toggleTodoCompleted({id}))
        } catch (error) {
            return rejectWithValue(error.massage)
        }
    }
)

export const toggleStatusTwo = createAsyncThunk(
    'todos/toggleStatus',
    async function (id, {rejectWithValue, dispatch, getState}) {

        const todo = getState().todos.todos.find(todo => todo.id === id)
        try {
            const response = await fetch (`http://localhost:3000/two/${id}`, {
    method: 'PUT',
    headers: {
        'Content-Type' : 'application/json',
    },
    body: JSON.stringify({...todo, completed: !todo.completed })
})

if (!response.ok) {
    throw new Error ('Error !!!!!')
}
dispatch (toggleTodoCompleted({id}))
        } catch (error) {
            return rejectWithValue(error.massage)
        }
    }
)

export const toggleStatusThree = createAsyncThunk(
    'todos/toggleStatus',
    async function (id, {rejectWithValue, dispatch, getState}) {

        const todo = getState().todos.todos.find(todo => todo.id === id)
        try {
            const response = await fetch (`http://localhost:3000/three/${id}`, {
    method: 'PUT',
    headers: {
        'Content-Type' : 'application/json',
    },
    body: JSON.stringify({...todo, completed: !todo.completed })
})

if (!response.ok) {
    throw new Error ('Error !!!!!')
}
dispatch (toggleTodoCompleted({id}))
        } catch (error) {
            return rejectWithValue(error.massage)
        }
    }
)

export const toggleStatus = createAsyncThunk(
    'todos/toggleStatus',
    async function (id, {rejectWithValue, dispatch, getState}) {

        const todo = getState().todos.todos.find(todo => todo.id === id)
        try {
            const response = await fetch (`http://localhost:3000/two/${id}`, {
    method: 'PATCH',
    headers: {
        'Content-Type' : 'application/json',
    },
    body: JSON.stringify({
        completed: !todo.completed,
    })
})

if (!response.ok) {
    throw new Error ('Error !!!!!')
}
dispatch (toggleTodoCompleted({id}))
        } catch (error) {
            return rejectWithValue(error.massage)
        }
    }
)

export const addNewTodoOne = createAsyncThunk(
    'todos/addNewTodo',
    async function (text, {rejectWithValue, dispatch}) {
        try {
            const todo = {
                text,
                id: new Date().toISOString(),
                completed:false,
            }
        const response = await fetch (`http://localhost:3000/one`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(todo)
        })

        if (!response.ok) {
            throw new Error ('Error !!!___!!')
        }
        const data = await response.json()
        dispatch (addTodo(data))
            
        }catch (error) {
            return rejectWithValue(error.massage)
        }
    }
)

export const addNewTodoTwo = createAsyncThunk(
    'todos/addNewTodo',
    async function (text, {rejectWithValue, dispatch}) {
        try {
            const todo = {
                text,
                id: new Date().toISOString(),
                completed:false,
            }
        const response = await fetch (`http://localhost:3000/two`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(todo)
        })

        if (!response.ok) {
            throw new Error ('Error !!!___!!')
        }
        const data = await response.json()
        dispatch (addTodo(data))
            
        }catch (error) {
            return rejectWithValue(error.massage)
        }
    }
)

export const addNewTodoThree = createAsyncThunk(
    'todos/addNewTodo',
    async function (text, {rejectWithValue, dispatch}) {
        try {
            const todo = {
                text,
                id: new Date().toISOString(),
                completed:false,
            }
        const response = await fetch (`http://localhost:3000/three`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(todo)
        })

        if (!response.ok) {
            throw new Error ('Error !!!___!!')
        }
        const data = await response.json()
        dispatch (addTodo(data))
            
        }catch (error) {
            return rejectWithValue(error.massage)
        }
    }
)

const setError = (state, action) => {
    state.status = 'rejected';
        state.error = action.payload
}


const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null, 
        error: null,

    },
    reducers: {
        addTodo(state, action){
            console.log(state)
            console.log(action)
            state.todos.push(action.payload)
        },
        delTodo(state, action){
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toggleTodoCompleted(state, action){
            state.todos = state.todos.map(todo => {
                  if (todo.id !== action.payload.id) {
                    return todo;
                  }
                  return { ...todo, completed: !todo.completed }
                })
        },
    },
    extraReducers: {
       [fetchTodos.pending] : (state) => {
        state.status = 'loading';
        state.error = null;
       },
       [fetchTodos.fulfilled] : (state, action) => {
        state.status = 'resolve';
        state.todos = action.payload;
       },
       [fetchTodos.rejected] :setError,
    //    [deleteTodo.rejected] : setError,
    //    [toggleStatus.rejected] : setError
    }
})


export const { addTodo, delTodo, toggleTodoCompleted} = todoSlice.actions

export default todoSlice.reducer