import { FaCertificate } from "react-icons/fa";

function Labels({ text }) {
  return (
    <div className="flex flex-row  gap-x-5 text-white">
      <FaCertificate className="text-3xl  border-black rounded-full" />
      <h1 className="mt-1  text-xl font-semibold relative bottom-[3px]">{text} </h1>
    </div>
  );
}
export default Labels;


