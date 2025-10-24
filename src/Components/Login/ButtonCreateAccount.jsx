export default function ButtonCreateAccount({ placeholder }) {
  return (
    <>
      <button className="flex border group justify-center border-[#165CBF] py-4 rounded-full w-full hover:bg-[#165CBF]">
        <h1 className="text-[#165CBF] text-center justify-center items-center group-hover:text-white">{placeholder}</h1>
      </button>
    </>
  );
}
