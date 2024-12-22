import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pastes : localStorage.getItem("pastes")
  ?  JSON.parse(localStorage.getItem("pastes"))
  : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
      state.pastes.push(action.payload)
      localStorage.setItem("pastes",JSON.stringify(state.pastes));
      
    },
    // updateToPastes: (state,action) => {
 
      
    // },
    // resetAllPastes: (state,action) => {
 
      
    // },
    // removeFromPastes: (state,action) => {
 
      
    // },

  },
})

// Action creators are generated for each case reducer function
export const { addToPastes,updateToPastes,resetAllPastes,removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer