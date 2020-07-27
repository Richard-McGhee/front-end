import * as yup from "yup"

export const loginSchema = yup.object().shape({
    username: yup
        .string()
        .required("Your username is required to login."),
    password: yup
        .string()
        .required("Password required for login.")
})

export const registerSchema = yup.object().shape({
    username: yup
        .string()
        .min(6)
        .max(30)
        .required("Please enter a valid username to register."),
    password: yup
        .string()
        .min(8)
        .max(64)
        .required("Please create a strong password for your account."),
    passwordConfirm: yup
        .string()
        .min(8)
        .max(64)
        .required("Password must be the same."),
    fname: yup
        .string()
        .required("Please enter your first name to register."),
    lname: yup
        .string()
        .required("Please enter your last name to register.")
})