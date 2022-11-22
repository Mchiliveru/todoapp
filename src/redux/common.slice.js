import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isRequireCaptchaModal: false,
    selectedItemId: '',
    todoList: []
}

export const CommonSlice = createSlice({
    name: "CommonSlice",
    initialState,
    reducers: {
        updateCaptchaModal:(state, {payload}) => {
            state.isRequireCaptchaModal = payload;
        },
        updateSelectedItem: (state, {payload}) => {
            state.selectedItemId = payload;
        },
        updateTodoList: (state, {payload}) => {
            state.todoList = payload;
        }
    },
    extraReducers: {}
});
export const {updateCaptchaModal, updateSelectedItem, updateTodoList} = CommonSlice.actions;
export default CommonSlice.reducer;