import { ResetPasswordForm } from "@/components/modules/auth/reset-password-form";
import logImg from "@/assets/images/auth-bg.png";
import Image from "next/image";

const ResetPasswordPage = () => {
  return (
    <>
      <div className=" flex justify-center items-center">
        <div className=" lg:flex-1">
          <ResetPasswordForm />
        </div>
        <div className="lg:flex-1">
          <Image
            src={logImg}
            alt="Login Image"
            width={700}
            height={700}
            className="hidden lg:block w-full h-[100vh] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
