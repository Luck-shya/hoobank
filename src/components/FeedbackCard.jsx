import { quotes } from "../assets";
import styles from "../style";
const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="double_quotes"
        className="w-[42px] h-[29px] object-contain"
      />
      <p className="font-popins font-normal leading-[32px] text-[18px] text-white my-10">
        {content}
      </p>
      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="ml-4 flex flex-col">
          <h4 className="text-[20px] text-white font-semibold leading-[32px] font-poppins font-normal">
            {name}
          </h4>
          <p className="leading-[24px] text-dimWhite text-[16px] font-">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
