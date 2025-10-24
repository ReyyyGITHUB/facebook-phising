import SafeAreaView from "../SafeAreaView";
import OtpTitle from "./OtpTitle";
import OtpForm from "./OtpForm";
import OtpResendPrompt from "./OtpResendPrompt";
import OtpBranding from "./OtpBranding";

export default function CodeOtp() {
  return (
    <>
      <SafeAreaView className="min-h-screen bg-linear-to-br from-[#14232E] to-[#0B3F7C]">
        {/* container content */}
        <div className="flex flex-col min-h-screen px-4 gap-[42px] justify-center items-center bor">
          <OtpTitle
            title="Kode Verifikasi Sudah Terkirim"
            subtitle="silahkan cek ke example@email.com"
          />
          {/* container bottom */}
          <div className="flex flex-col justify-center items-center w-full gap-8">
            <OtpForm />
            <OtpResendPrompt label="Tidak menerima Kode OTP?" />
          </div>
          {/* meta logo */}
          <OtpBranding />
        </div>
      </SafeAreaView>
    </>
  );
}
