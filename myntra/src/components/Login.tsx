import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Navbar from "./Navbar";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase/Setup";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState<any>(null);

  const sendOtp = () => {
    const recaptcha = new RecaptchaVerifier(auth,"recaptcha",{})
    const confirmation = signInWithPhoneNumber(auth,phone,recaptcha)
  }

  return (
    <>
    <Navbar/>
      <div className="bg-rose-50 h-screen flex flex-col justify-center items-center">
        <div className="h-96 w-96 bg-white flex flex-col justify-center items-center">

          <h1 className="font-bold text-lg text-start">
            Login <span className=" font-normal text-sm"> or </span>
            <span>Signup</span>
          </h1>
          <div className="mt-5">
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              placeholder="Mobile Number"
              buttonStyle={{ backgroundColor: "white" }}
              inputStyle={{ width: "320px" }}
            />
          </div>

          <h1 className="mt-4 text-xs text-gray-400">
            By continuing, I agree to the{" "}
            <span className="text-red-600 font-bold">Terms of Use</span> &{" "}
            <span className="text-red-600 font-bold">Privacy Policy</span>
          </h1>
          <button className="mt-4 bg-red-500 hover:bg-red-500 text-white w-80 font-bold py-2 px-4 text-sm w-320">
            CONTINUE
          </button>
          {/* <div className="mt-3" id="readcapcha"></div>
          <input
            className="border border-spacing-1 text-gray-900 font-normal outline-none text-sm rounded-sm block w-80 p-2.5 mt-2"
            placeholder="Enter Otp"
            required
          />
          <button className="mt-4 bg-red-500 hover:bg-red-500 text-white w-80 font-bold py-2 px-4 text-sm w-320">
            Verify OTP
          </button> */}
          <h1 className="mt-4 text-xs text-gray-400">
            Have trouble logging in?
            <span className="text-red-600 font-bold">Get Help</span>
          </h1>
        </div>
      </div>
</>
  );
};
export default Login;
