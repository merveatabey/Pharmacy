import React from "react";
import Signup from "./LoginSignup/Signup";

const Register = () => {
    const handleRegister = (UserData) => {
        //kayıtlı işlemleri burada gerçekleştirecek
        console.log("Kayıt Başarılı", UserData);

    };
    return (
        <Signup onRegister={handleRegister} />
      );
}

export default Register;