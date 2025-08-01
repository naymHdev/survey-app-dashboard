import LoginForm from "@/components/modules/auth/login-form";
import logImg from "@/assets/images/auth-bg.png";
import Image from "next/image";

const LoginPage = () => {
  return (
    <>
      <div className=" flex justify-center items-center">
        <div className=" lg:flex-1">
          <LoginForm />
        </div>
        <div className="lg:flex-1">
          <Image
            src={logImg}
            alt="Login Image"
            width={1200}
            height={1200}
            className="hidden lg:block w-full h-[100vh] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
