import React from 'react'
import { useFormik } from 'formik'

const validateForm = (values) => {
    const errors = {}
    console.log("validate form ", values);
    
    // email pattern
    if (values.email.length < 5) {
        errors.email = "please provide a longer email"
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    // passord pattern
    if (values.password.length < 8) {
        errors.password = "please provide a longer password"
    }
    else if (values.password.length > 12) {
        errors.password = "please provide a shorter password"
    }
    console.log(errors.password);
    return errors;
}
export default function BasicForm() {
    const formik = useFormik({
        initialValues:
        {
            email: '',
            password: ''
        },
        validate: validateForm,
        onSubmit: (values) => {
            console.log('onSubmit', values)
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="email"
                placeholder="Enter your Email" />
            <input
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="password"
                placeholder="Enter your password" />
            {/* only show error when cursor is outside */}
            {formik.errors.password &&
                formik.touched.password &&
                formik.errors.password}
            <button
                type="submit">
                Submit
            </button>

        </form>
    )
}
