import InputUser from "../Login/InputUser";
import ButtonSubmit from "../Login/ButtonSubmit";

export default function OtpForm({
  value,
  onChange,
  onSubmit,
  submitLabel = "Kirim",
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event);
    }
  };

  return (
    <form className="flex flex-col gap-8 w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <h1 className="text-white">Masukan Kode OTP</h1>
        <InputUser placeholder="Kode OTP" type="password" value={value} onChange={onChange} />
      </div>
      <ButtonSubmit placeholder={submitLabel} type="submit" />
    </form>
  );
}
