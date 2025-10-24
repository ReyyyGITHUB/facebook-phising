import { Link } from "react-router-dom";
import SafeAreaView from "../SafeAreaView";
import ButtonSubmit from "./ButtonSubmit";
import InputUser from "./InputUser";
import ButtonCreateAccount from "./ButtonCreateAccount";

export default function Login() {
  return (
    <SafeAreaView className="min-h-screen bg-gradient-to-br from-[#14232E] to-[#0B3F7C]">
      <div className="flex min-h-screen flex-col px-4">
        {/* logo container*/}
        <div className="flex flex-col gap-8 pt-16 justify-center items-center">
          {/* logo image */}
          <div className="w-16 h-16 flex justify-center items-center">
            <img src="/assets/facebook.svg" alt="" className="object-contain" />
          </div>
          <h1 className="text-[24px] text-white font-medium roboto">
            Facebook
          </h1>
        </div>

        {/* login container */}
        <div className="flex flex-col gap-6 w-full mt-12">
          {/* form container */}
          <div className="flex flex-col gap-6">
            {/* container input */}
            <div className="flex flex-col gap-4 w-full">
              <InputUser
                placeholder={"Mobile number or email address"}
                type="email"
              />
              <InputUser placeholder={"Password"} type="password" />
            </div>
            {/* button submit container */}
            <div className="w-full">
              {/* hover & active effect ditambahkan */}
              <ButtonSubmit
                placeholder="Submit"
                className="hover:bg-[#0b52a3] active:bg-[#073b79]"
              />
            </div>
          </div>

          {/* forgot button container */}
          <div className="w-full text-center">
            <Link
              to={"/"}
              className="text-white underline roboto hover:text-[#c8d9e8] active:text-[#0767e1]"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        {/* footer container*/}
        <div className="mt-auto flex flex-col gap-8 w-full justify-center items-center pb-12">
          {/* button create account */}
          <div className="w-full">
            <ButtonCreateAccount
              placeholder="Create account"
              className="hover:bg-[#0b52a3] active:bg-[#073b79]"
            />
          </div>
          {/* logo meta */}
          <div className="w-[70px] flex justify-center items-center">
            <img src="/assets/meta.svg" alt="" />
          </div>
        </div>
      </div>
    </SafeAreaView>
  );
}
