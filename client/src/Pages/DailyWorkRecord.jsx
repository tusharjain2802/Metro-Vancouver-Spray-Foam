import EquipmentInformation from "../Components/WorkRecordComponents/EquipmentInformation";
import GeneralInformation from "../Components/WorkRecordComponents/GeneralInformation";
import MaterialInformation from "../Components/WorkRecordComponents/MaterialInformation";
import ProjectInformation from "../Components/WorkRecordComponents/ProjectInformation";
import { EnvironmentalConditions, SubstrateConditions } from "../Components/WorkRecordComponents/EnvironmentAndSubstrate"
import { SpecialConditions, OnSiteTestResults } from "../Components/WorkRecordComponents/SpecialAndOnSite"
import ReCAPTCHA from "react-google-recaptcha";

const DailyWorkRecord = () => {

  function onChange() {
    console.log("Captcha clicked");
  }
  return (
    <div className="mx-[9%] mt-[85px] md:mt-[167px]">
      <h2 className="font-anton font-[800] text-3xl mb-[24px] md:text-4xl">Daily Work Record</h2>
      <div className="">
        <GeneralInformation />
      </div>
      <hr className="my-[52px] border border-gray-500 opacity-20 " />
      <div className="">
        <ProjectInformation />
      </div>
      <hr className="my-[52px] border border-gray-500 opacity-20 " />
      <div className="">
        <MaterialInformation />
      </div>
      <hr className="my-[52px] border border-gray-500 opacity-20 " />

      <div className="">
        <EquipmentInformation />
      </div>
      <hr className="my-[52px] border border-gray-500 opacity-20 " />

      <div className="">
        <EnvironmentalConditions />
      </div>
      <hr className="my-[52px] border border-gray-500 opacity-20 " />

      <div className="">
        <SubstrateConditions />
      </div>
      <hr className="my-[52px] border border-gray-500 opacity-20 " />
      <div className="">
        <SpecialConditions />
      </div>
      <hr className="my-[52px] border border-gray-500 opacity-20 " />
      <div className="">
        <OnSiteTestResults />
      </div>
      <hr className="my-[52px] border border-gray-500 opacity-20 " />
      <input
        type="checkbox"
        name="agreement"
        id="agreement"
        required
        className="mr-2"
      />
      <label htmlFor="agreement" className="text-gray-800">
        I hereby agree that the above information provided is true. This action takes the place of your signature.
      </label>

      <ReCAPTCHA
    sitekey="6LeR-8kpAAAAAFGAmNQStUzI5da6TyOOn4j3DPqg"
    onChange={onChange}
  />

      <button >
        Submit Work Record
      </button>
    </div>
  );
};

export default DailyWorkRecord;