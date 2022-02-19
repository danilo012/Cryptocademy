import React, { useRef, useState } from 'react'
import google from '../../Assets/svg/google.svg'
import { useNavigate } from 'react-router';
import { useAuth } from '../../Context/AuthContext';
import ErrorToast from '../ErrorToast';

const GoogleLoginBtn = () => {
  const {signInWithGoogle} =useAuth()
  let navigate = useNavigate();

  const toastRef = useRef(null)
  const [errorMessage,setErrorMessage] = useState(null)

  async function googleSignInHandler() {
      try {
          await signInWithGoogle()
          console.log("logged in user successfully")
          navigate('/app')
      } catch (error) {
          setErrorMessage(error.message)
          toastRef.current.show()
          console.log(error)
      }
  }
  return (
    <>
      <ErrorToast message={errorMessage} ref={toastRef} />
      <button onClick={googleSignInHandler} aria-label="Continue with google" role="button" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400 py-3.5 px-4 border rounded-lg border-gray-400 flex items-center w-full mt-10">
          <img src={google} alt="" width={19} height={20}  />
          <p className="text-base font-medium ml-4 text-gray-100">Continue with Google</p>
      </button>
    </>
  )
}

export default GoogleLoginBtn