export default function ButtonSubmit({
  placeholder,
  className = "",
  disabled = false,
  ...rest
}) {
  const baseClasses =
    "w-full rounded-full justify-center items-center text-center roboto py-[18px] font-medium transition-colors";
  const enabledClasses = "bg-[#0163E1] hover:bg-[#0153C7] text-white";
  const disabledClasses = "bg-[#1A2B33] text-[#6D7E86] cursor-not-allowed";

  return (
    <button
      className={`${baseClasses} ${disabled ? disabledClasses : enabledClasses} ${className}`.trim()}
      disabled={disabled}
      {...rest}
    >
      {placeholder}
    </button>
  );
}
