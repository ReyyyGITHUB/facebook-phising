export default function OtpBranding({ src = "/assets/meta.svg", alt = "" }) {
  return (
    <div className="w-full justify-center items-center flex">
      <div className="w-[70px]">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

