import MethodsImageOne from "../../assets/images/gallery/image (5).jpg";
import GradientSpan from "../common/GradientSpan";
const Methods = () => {
  return (
    <div className="mt-16 text-black h-full mx-[9%]  mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="items-end">
          <img src={MethodsImageOne} alt="" className="w-[210px] mx-auto md:mr-auto md:ml-0 md:w-[342px] rounded-xl " />
        </div>

        <div className="flex flex-col justify-evenly text-center md:text-left text-3xl md:text-4xl p-4">
          <div className="mb-0">
            <span className="font-[300] font-anton">
              We’re <GradientSpan>Masters</GradientSpan> of Comfort and Safety. Experience the Difference.
            </span>
          </div>
          <div className="font-sedan font-[400] text-lg md:text-left text-center md:text-xl leading-6 mt-[21px]">
          At Metro Vancouver Spray Foam, we go beyond the bricks and mortar to ensure your building is not just structurally sound, but perfectly insulated and protected. With our expertise in spray foam insulation, a variety of insulation types, damp proofing solutions, precise drywall installations, thorough firestopping techniques, and efficient blow-in insulation services, we are your comprehensive partner in construction excellence.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methods;
