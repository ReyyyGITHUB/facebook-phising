export default function OtpTitle({ title, subtitle }) {
  return (
    <div className="flex flex-col justify-center items-center gap-3 text-center">
      <h1 className="text-white font-medium text-2xl">{title}</h1>
      <p className="text-[#6D7E86]">{subtitle}</p>
    </div>
  );
}

