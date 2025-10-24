export default function ButtonCreateAccount({ placeholder }) {
  return (
    <>
      <button className="flex border justify-center border-[#165CBF] py-4 rounded-full w-full">
        <h1 className="text-[#165CBF] text-center justify-center items-center">{placeholder}</h1>
      </button>
    </>
  );
}
