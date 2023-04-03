import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: 'tuetn2002pt@gmail.com',
  password: '123456',
  username: 'Trong Nguyen',
  bio: 'styding infomation technology',
  gender: 'Male',
  birthday: '2002-06-01',
  phone: '123456',
};

export const currentSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.username = action.payload.username;
      state.gender = action.payload.gender;
      state.bio = action.payload.bio;
      state.phone = action.payload.phone;
      state.birthday = action.payload.birthday;
    },
    logoutUser: (state) => {
      state.email = '';
      state.password = '';
      state.username = 'Trong Nguyen';
    },
    changeUsername: (state, action) => {
      state.username = action.payload.userName;
    },
    changeGender: (state, action) => {
      state.gender = action.payload.genDer;
    },
    changePhone: (state, action) => {
      state.phone = action.payload.userName;
    },
    changeEmail: (state, action) => {
      state.email = action.payload.userName;
    },
    changeBio: (state, action) => {
      state.bio = action.payload.userName;
    },
    changeBirthday: (state, action) => {
      state.birthday = action.payload.date;
    },
    changePassword: (state, action) => {
      state.password = action.payload.newPassword;
    },
  },
});

export const {
  loginUser,
  logoutUser,
  changeUsername,
  changeGender,
  changePhone,
  changeEmail,
  changeBio,
  changeBirthday,
  changePassword
} = currentSlice.actions;

export default currentSlice.reducer;
