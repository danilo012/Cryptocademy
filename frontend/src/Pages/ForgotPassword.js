import React,{useRef, useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GoogleLoginBtn from "../Components/Buttons/GoogleLoginBtn";
import { Formik,Form } from "formik";
import * as Yup from 'yup';
import FloatingInput from "../Components/Buttons/FloatingInput";
import FloatingPasswordInput from "../Components/Buttons/FloatingPasswordInput";
import TwitterLoginBtn from '../Components/Buttons/TwitterLoginBtn';
import GithubLoginBtn from '../Components/Buttons/GithubLoginBtn';
import { useAuth } from '../Context/AuthContext';
import ErrorToast from '../Components/ErrorToast';
import SuccessToast from '../Components/SuccessToast';
import FormAppInfo from '../Components/FormAppInfo';

const initialValues = {
    email: '',
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email Address").required("Required"),
})

function ForgotPassword() {
    const {forgotPassword} =useAuth()
    let navigate = useNavigate();

    const errorToastRef = useRef(null)
    const successToastRef = useRef(null)
    const [errorMessage,setErrorMessage] = useState(null)
    const [successMessage,setSuccessMessage] = useState(null)

    async function onSubmit(values) {
        const { email} = values
        try {
            await forgotPassword(email)
            setSuccessMessage("Email to change the password has been sent Successfully!")
            successToastRef.current.show()
            console.log("email has been sent successfully")

        } catch (error) {
            setErrorMessage(error.message)
            errorToastRef.current.show()
            console.log(error)
        }

    }

    return (
        <section>
            <ErrorToast message={errorMessage} ref={errorToastRef} />
            <SuccessToast message={successMessage} ref={successToastRef} />
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-black text-white">
                <div className="w-full h-screen px-4 py-20 mx-auto  xl:py-32 md:w-3/5 lg:w-4/5 xl:w-3/5">
                    <h1 className="mb-8 -mt-3 text-2xl font-extrabold leading-snug  text-left text-green-400 md:text-4xl font-title tracking-wide">Forgot Password</h1>
                    {/* email password signin */}
                    <Formik 
                    initialValues={initialValues}
                    onSubmit= {onSubmit}
                    validationSchema = {validationSchema }
                    validateOnMount
                    >
                    {
                        formik => {
                            return(
                            <Form autoComplete = "off"  className="divide-y divide-gray-200">
                                <div className=" text-base leading-6 space-y-5 text-gray-700 sm:text-lg sm:leading-7">
                                    <FloatingInput id="email" name="email" type="email" placeholder="Email address" />
                                    <p className="font-medium text-[#1ed760] hover:text-[#1db954]
                                    mt-4"> {successMessage} </p>
                                </div>
                                <div className="mt-8">
                                    <button type="submit" disabled={(!formik.isValid || formik.isSubmitting)} aria-label="create my account" className={`focus:ring-2 
                                    ${(!formik.isValid || formik.isSubmitting) && "focus:ring-gray-700 bg-gray-700 border hover:bg-gray-600"} focus:ring-offset-2 focus:ring-green-600 text-sm font-semibold leading-none text-white focus:outline-none bg-green-600 border rounded hover:bg-green-600 py-4 w-full  `}>
                                        {formik.isSubmitting ? "Sending You Email..." :
                                        "Reset Password"}
                                    </button>
                                </div>
                            </Form>
                            )
                        }
                    }
                    </Formik>
                </div>
                <FormAppInfo/>
            </div>
        </section>
    )
}

export default ForgotPassword