import React from "react";
import LoginForm from "../../components/FormLogin";

const LoginPage = () => {
  return (
    <div className="App bg-primary1 h-screen w-screen relative overflow-hidden flex justify-center items-center">
      <div className="h-1/2 w-full md:w-4/5 bg-white rounded-t-full absolute bottom-0 scale-x-150"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <LoginForm />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export default LoginPage;
