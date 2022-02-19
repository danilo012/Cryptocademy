import React,{useRef, useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GoogleLoginBtn from "../Components/Buttons/GoogleLoginBtn";
import { Formik,Form } from "formik";
import * as Yup from 'yup';
import FloatingInput from "../Components/Buttons/FloatingInput";
import FloatingPasswordInput from "../Components/Buttons/FloatingPasswordInput";
import {useAuth} from '../Context/AuthContext'
import ErrorToast from '../Components/ErrorToast';
import FormAppInfo from '../Components/FormAppInfo';

const initialValues = {
    email: '',
    password:'',
    confirmPassword: '',
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email Address").required("Required"),

    password: Yup.string().min(6,"Password must be 6 charcters at minimum").max(30,"Password is too big!").required("Required"),

    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords don't match!").required("Required"),
})

function Signup() {
   const {signUp,currentUser} =useAuth()
   let navigate = useNavigate();
    
    const toastRef = useRef(null)
    const [errorMessage,setErrorMessage] = useState(null)

    async function onSubmit(values,onSubmitProps) {
        console.log("signup started!")
        const { email, password } = values
        try {
            const response = await signUp(email,password)
            if (response.user) {
                console.log("created user successfully")
                navigate('/')
            }
        } catch (error) {
            setErrorMessage(error.message)
            toastRef.current.show()
            console.log(error)
        }

    }

    
    useEffect(()=> {
        if(currentUser) {
            navigate('/app')
        }
    },[currentUser])

    return (
        <section>
            <ErrorToast message={errorMessage} ref={toastRef} />
            <section className="grid grid-cols-1 lg:grid-cols-2 bg-black text-white">
                <div className="w-full h-screen px-4 py-20 mx-auto  xl:py-32 md:w-3/5 lg:w-4/5 xl:w-3/5">
                    <h1 className="mb-8 -mt-3 text-2xl font-extrabold leading-snug  text-left text-green-400 md:text-4xl font-title tracking-wide">Sign up </h1>
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
                                    <FloatingPasswordInput id="password" name="password" type="password" placeholder="Password" />
                                    <FloatingPasswordInput id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password" />
                                </div>
                                <div className="mt-8">
                                    <button type="submit" disabled={(!formik.isValid || formik.isSubmitting)} aria-label="create my account" className={`focus:ring-2 
                                    ${(!formik.isValid || formik.isSubmitting) && "focus:ring-gray-700 bg-gray-700 border hover:bg-gray-600"} focus:ring-offset-2 focus:ring-[#1db954] text-sm font-semibold leading-none text-white focus:outline-none bg-[#1db954] border rounded hover:bg-[#1db954] py-4 w-full  `}>
                                        {formik.isSubmitting ? "Creating Your Account..." :
                                        "Create my account"}
                                    </button>
                                </div>
                            </Form>
                            )
                        }
                    }
                    </Formik>
                    <Link to = "/" className="text-md my-8 flex justify-center">
                        <a href="#" className="font-medium text-[#1ed760] hover:text-[#1db954]"> Already have an account? Login </a>
                    </Link>
                    {/* Social Provider signup */}
                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-black text-gray-100"> Or continue with </span>
                        </div>
                    </div>
                    <div className="mt-8  space-y-4">
                        <GoogleLoginBtn/>
                    </div>
                    
                </div>
                <FormAppInfo/>
                </section>

        </section>
    )
}

export default Signup