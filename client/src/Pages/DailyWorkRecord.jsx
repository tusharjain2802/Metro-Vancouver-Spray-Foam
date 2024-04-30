import EquipmentInformation from "../Components/WorkRecordComponents/EquipmentInformation";
import GeneralInformation from "../Components/WorkRecordComponents/GeneralInformation";
import MaterialInformation from "../Components/WorkRecordComponents/MaterialInformation";
import ProjectInformation from "../Components/WorkRecordComponents/ProjectInformation";
import { EnvironmentalConditions, SubstrateConditions } from "../Components/WorkRecordComponents/EnvironmentAndSubstrate"
import { SpecialConditions, OnSiteTestResults } from "../Components/WorkRecordComponents/SpecialAndOnSite"
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const DailyWorkRecord = () => {

  const [workRecordData, setWorkRecordData] = useState({
    generalInfo: {},
    projectInfo: {},
    materialInfo: {},
    equipmentInfo: {},
    environmentalConditions: {},
    substrateConditions: {},
    specialConditions: {},
    onSiteTestResults: {}
  });

  const handleChange = (data, section) => {
    setWorkRecordData(prev => ({ ...prev, [section]: data }));
    console.log(workRecordData);
  };

  const handleSubmit = async () => {
    const response = await fetch('/api/dailyworkrecord', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(workRecordData)
    });
    if (response.ok) {
      // Handle success
      console.log("Data submitted successfully");
    } else {
      // Handle error
      console.error("Failed to submit data");
    }
  };

  const [captchaCompleted, setCaptchaCompleted] = useState(false);

  function handleCaptcha() {
    setCaptchaCompleted(true);
  }
  return (
    <div className="mx-[9%] mt-[85px] md:mt-[167px]">
      <h2 className="font-anton font-[800] text-3xl mb-[24px] md:text-4xl">Daily Work Record</h2>
      <GeneralInformation onChange={data => handleChange(data, 'generalInfo')} />
      <hr className="my-[52px] border border-gray-500 opacity-20 " />
      <ProjectInformation onChange={data => handleChange(data, 'projectInfo')} />
      <hr className="my-[52px] border border-gray-500 opacity-20 " />
      <MaterialInformation onChange={data => handleChange(data, 'materialInfo')} />
      <hr className="my-[52px] border border-gray-500 opacity-20 " />
      <EquipmentInformation onChange={data => handleChange(data, 'equipmentInfo')} />
      <hr className="my-[52px] border border-gray-500 opacity-20 " />
      <EnvironmentalConditions onChange={data => handleChange(data, 'environmentalConditions')} />
      <hr className="my-[52px] border border-gray-500 opacity-20 " />
      <SubstrateConditions onChange={data => handleChange(data, 'substrateConditions')} />
      <hr className="my-[52px] border border-gray-500 opacity-20 " />
      <SpecialConditions onChange={data => handleChange(data, 'specialConditions')} />
      <hr className="my-[52px] border border-gray-500 opacity-20 " />
      <OnSiteTestResults onChange={data => handleChange(data, 'onSiteTestResults')} />
      <hr className="my-[52px] border border-gray-500 opacity-20 " />
      <input
        type="checkbox"
        name="agreement"
        id="agreement"
        required
        className="mr-2 mb-[30px] "
      />
      <label htmlFor="agreement" className="text-gray-800 ">
        I hereby agree that the above information provided is true. This action takes the place of your signature.
      </label>

      <ReCAPTCHA
    sitekey="6LeR-8kpAAAAAFGAmNQStUzI5da6TyOOn4j3DPqg"
    onChange={handleCaptcha}
  />

     {captchaCompleted && (
        <button className="" onClick={handleSubmit}>
          Submit Work Record
        </button>
      )}
    </div>
  );
};

export default DailyWorkRecord;