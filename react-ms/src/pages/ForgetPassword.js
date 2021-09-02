import React, { useState } from "react";
import PageHeader from "../Components/PageHeader";
import "../Components/Account/ForgetPassword.css";
import Footer from "./Footer";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };
  const sendResetEmail = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <PageHeader title="Reset Password" style={{}} />

      <div className="mt-8">
        <h1 className="text-xl text-center font-bold mb-3">
          Reset your Password
        </h1>
        <div className="border border-blue-300 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
          <form action="">
            {emailHasBeenSent && (
              <div className="py-3 bg-green-400 w-full text-white text-center mb-3">
                An email has been sent to you!
              </div>
            )}
            {error !== null && (
              <div className="py-3 bg-red-600 w-full text-white text-center mb-3">
                {error}
              </div>
            )}
            <label htmlFor="userEmail" className="Einput">
              Email:
            </label>
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              value={email}
              placeholder="Input your email"
              onChange={onChangeHandler}
              className="Einput"
            />
            <button className="   py-3">Send me a reset link</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ForgetPassword;
