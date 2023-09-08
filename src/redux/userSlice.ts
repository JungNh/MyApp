import {createSlice} from '@reduxjs/toolkit';

export const useSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Jung Kon',
    age: 28,
    address: 'HaNoi',
    image:
      'https://manta.edu.vn/wp-content/uploads/2022/12/hinh-anh-nu-sinh-dep-nhat-2-1.jpg',
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
    },
  },
});

export const {update}= useSlice.actions
export default useSlice.reducer
