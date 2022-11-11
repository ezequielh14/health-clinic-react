import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        name: "",
        lastname: "",
        dni: "",
        dateofbirth: "",
        address: "",
        telephone: "",
        healthservice: "",
        uid: "",
        email: "",
    },
];

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        updateUser: (state, action) => {
            const {
                uid,
                name,
                lastname,
                dni,
                dateofbirth,
                address,
                telephone,
                healthservice,
            } = action.payload;
            const foundUser = state.find((user) => user.uid === uid);
            if (foundUser) {
                foundUser.name = name;
                foundUser.lastname = lastname;
                foundUser.dni = dni;
                foundUser.dateofbirth = dateofbirth;
                foundUser.address = address;
                foundUser.telephone = telephone;
                foundUser.healthservice = healthservice;
            }
        },
    },
});

export const { addUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
