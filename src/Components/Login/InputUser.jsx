export default function InputUser({ placeholder, type = "text", ...rest }) {
  return (
    <input
      className="w-full bg-[#1A2B33] py-5 rounded-xl border-[#435058] placeholder:text-[#6D7E86] px-4 text-white"
      placeholder={placeholder}
      type={type}
      {...rest}
    />
  );
}
