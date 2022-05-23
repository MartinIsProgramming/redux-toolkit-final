import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  isOpen: boolean;
}

const initialState: InitialState = {
  isOpen: false,
};

const contactModelSlice = createSlice({
  name: 'contactModal',
  initialState,
  reducers: {
    toggleModal: state => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleModal } = contactModelSlice.actions;
export default contactModelSlice.reducer;
