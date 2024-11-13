import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Login = () => {
  const [phone, setPhone] = useState("");

  return (
    <div>
      <div className="bg-rose-50 h-screen flex flex-col justify-center items-center">
        <div className="h-72 w-96 bg-white">
          <h1 className="font-bold text-lg">
            Login <span className="font-normal text-sm">or </span>
            <span>Sign-Up</span>
          </h1>
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            placeholder="Mobile Number"
            buttonStyle={{ backgroundColor: "white" }}
          />
          <h1 className="text-xs text-gray-400">
            By continuing, I agree to the{" "}
            <span className="text-red-600 font-bold">Terms of Use</span> &{" "}
            <span className="text-red-600 font-bold">Privacy Policy</span>
          </h1>
          <button className="bg-red-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
