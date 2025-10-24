export default function InputUser({ placeholder, type = "text", ...rest }) {
  return (
    <input
      className="w-full bg-[#1A2B33] py-5 rounded-xl border border-[#435058] placeholder:text-[#6D7E86] px-4 text-white
                 hover:bg-[#1E323C] hover:border-[#0b52a3]
                 focus:bg-[#1E323C] focus:border-[#0767e1] focus:outline-none
                 active:bg-[#1E323C] active:border-[#073b79]"
      placeholder={placeholder}
      type={type}
      {...rest}
    />
  );
}
