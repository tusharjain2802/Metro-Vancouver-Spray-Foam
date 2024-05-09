import GeneralInformation from "../Components/IncidentReport/Form";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const DailyWorkRecord = () => {
  const [incidentData, setIncidentData] = useState({
    firstName:"",
    lastName:"",
    role:"",
    address:"",
    phoneNumber:"",
    email:"",
    dateOfEvent:"",
    timeOfEvent:"",
    location:"",
    description:"",
    injured:false,
    factors:"",
    avoidance:"",
    firstAidAdministered:"",
    eSignature:"",
  });

  const [loading, setLoading] = useState(false);


  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/report-injury`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(incidentData),
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
    setCaptchaCompleted(!captchaCompleted);
  }
  return (
    <div className="mx-[9%] mt-[85px] md:mt-[167px]">
      <h2 className="font-anton font-[800] text-3xl mb-[24px] md:text-4xl">
        Incident Report Form
      </h2>
      <form onSubmit={handleSubmit}>
        <GeneralInformation
         incidentData={incidentData} setIncidentData={setIncidentData}
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
            onClick={handleSubmit}
          >
            {loading ? "Sending..." : "Submit Complaint"}
          </button>
        )}
      </form>
      <Toaster />
    </div>
  );
};

export default DailyWorkRecord;
