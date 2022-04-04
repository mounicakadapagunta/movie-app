import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';

const formValidationSchema = yup.object({
    email: yup
        .string()
        .min(5, "need bigger email")
        .required("why  not fill this email?")
        .matches(
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            "Pattern does not match"
        ),
    password: yup
        .string()
        .min(8, "need bigger password")
        .max(12, "type shorter password")
        .required("password required"),
})
export default function BasicForm() {
    const { handleSubmit, handleBlur, handleChange, values, errors, touched } = useFormik({
        initialValues:
        {
            email: '',
            password: ''
        },
        //validate: validateForm,
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            console.log('onSubmit', values)
        }
    })
    return (
        <form onSubmit={handleSubmit}>
            <input
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                placeholder="Enter your Email" />
            <input
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                placeholder="Enter your password" />
            {/* only show error when cursor is outside */}
            {errors.password &&
                touched.password ?
                errors.password : ""}
            <button
                type="submit">
                Submit
            </button>

        </form>
    )
}

// 2 hr 36 mins