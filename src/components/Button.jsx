
import { BsArrowRight } from "react-icons/bs";

const Button = ({ styles, text }) => {
  return (
    <div>
      <button
      style={{fontWeight:'700'}}
        type="button"
        className={`${styles} flex justify-center px-6 py-5 items-center gap-3 md:gap-2 mt-2 font-medium bg-[#0099FF] hover:bg-[#0080d4]  outline-none border-none`}
      >
        {text} <BsArrowRight />
      </button>
    </div>
  );
};

export default Button;

