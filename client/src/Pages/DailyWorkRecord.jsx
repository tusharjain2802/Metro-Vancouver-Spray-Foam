import EquipmentInformation from "../Components/WorkRecordComponents/EquipmentInformation";
import GeneralInformation from "../Components/WorkRecordComponents/GeneralInformation";
import MaterialInformation from "../Components/WorkRecordComponents/MaterialInformation";
import ProjectInformation from "../Components/WorkRecordComponents/ProjectInformation";
import {
  EnvironmentalConditions,
  SubstrateConditions,
} from "../Components/WorkRecordComponents/EnvironmentAndSubstrate";
import {
  SpecialConditions,
  OnSiteTestResults,
} from "../Components/WorkRecordComponents/SpecialAndOnSite";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";
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
    onSiteTestResults: {},
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (data, section) => {
    setWorkRecordData((prev) => ({ ...prev, [section]: data }));
    console.log(workRecordData);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/dailyworkrecord`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workRecordData),
      });
      if (response.ok) {
        toast.success("Data submitted successfully");
        setLoading(false);
      } else {
        console.error("Failed to submit data");
        setLoading(false);
      }
    } catch (err) {
      console.error("There was a problem with the fetch operation:", err);
      toast.error("Couldn't send your report, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const [captchaCompleted, setCaptchaCompleted] = useState(false);

  function handleCaptcha() {
    setCaptchaCompleted(true);
  }
  return (
    <div className="mx-[9%] mt-[85px] md:mt-[167px]">
      <h2 className="font-anton font-[800] text-3xl mb-[24px] md:text-4xl">
        Daily Work Record
      </h2>
      <form onSubmit={handleSubmit}>
        <GeneralInformation
          onChange={(data) => handleChange(data, "generalInfo")}
        />
        <hr className="my-[52px] border border-gray-500 opacity-20 " />
        <ProjectInformation
          onChange={(data) => handleChange(data, "projectInfo")}
        />
        <hr className="my-[52px] border border-gray-500 opacity-20 " />
        <MaterialInformation
          onChange={(data) => handleChange(data, "materialInfo")}
        />
        <hr className="my-[52px] border border-gray-500 opacity-20 " />
        <EquipmentInformation
          onChange={(data) => handleChange(data, "equipmentInfo")}
        />
        <hr className="my-[52px] border border-gray-500 opacity-20 " />
        <EnvironmentalConditions
          onChange={(data) => handleChange(data, "environmentalConditions")}
        />
        <hr className="my-[52px] border border-gray-500 opacity-20 " />
        <SubstrateConditions
          onChange={(data) => handleChange(data, "substrateConditions")}
        />
        <hr className="my-[52px] border border-gray-500 opacity-20 " />
        <SpecialConditions
          onChange={(data) => handleChange(data, "specialConditions")}
        />
        <hr className="my-[52px] border border-gray-500 opacity-20 " />
        <OnSiteTestResults
          onChange={(data) => handleChange(data, "onSiteTestResults")}
        />
        <hr className="my-[52px] border border-gray-500 opacity-20 " />
        <div className="mb-[30px]">
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            required
            className="mr-2 "
          />
          <label htmlFor="agreement" className="text-gray-800 ">
            I hereby agree that the above information provided is true. This
            action takes the place of your signature.
          </label>
        </div>
        <div className="flex justify-center md:justify-start">
          <ReCAPTCHA
            sitekey="6LeR-8kpAAAAAFGAmNQStUzI5da6TyOOn4j3DPqg"
            onChange={handleCaptcha}
          />
        </div>
        {captchaCompleted && (
          <button
            type="submit"
            className="text-white mt-[35px] font-semibold hover:opacity-95 border-2 border-black hover:bg-gradient-to-l bg-gradient-to-r from-[#b4a058] to-[#000000] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit Work Record"}
          </button>
        )}
      </form>
      <Toaster />
    </div>
  );
};

export default DailyWorkRecord;
