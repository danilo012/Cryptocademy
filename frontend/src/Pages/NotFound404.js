import React from "react";
import { Link } from "react-router-dom";
import error404 from '../Assets/images/error404.png'

const NotFound404 = () => {
    return (
        <div>
            <div className="flex justify-between h-screen items-center max-w-screen-xl mx-auto ">
                <div className="max-w-md text-center md:text-right">
                    <h1 className="font-bold text-5xl mb-4">Oops!</h1>
                    <h2 className="font-semibold text-4xl mb-14">We couldn't find that page</h2>
                    <p className="text-2xl mb-4 mx-2 md:mx-0 ">Maybe you can find what you need here?</p>
                    <div >
                        <Link className="font-bold text-xl underline text-blue-600" to='/'>Homepage</Link>
                    </div>
                    <div >
                        <Link className="font-bold text-xl underline text-blue-600" to='/'>Homepage</Link>
                    </div>
                    <div >
                        <Link className="font-bold text-xl underline text-blue-600" to='/'>Homepage</Link>
                    </div>
                </div>
                <div className="hidden flex-1 md:flex flex-col">
                    <img src={error404}  alt="404 error not found" />
                </div>
            </div>
        </div>
    );
};

export default NotFound404;
