import PropTypes from 'prop-types';

const ComplaintForm = ({ complaintData, setComplaintData }) => {

    const handleInputChange = (e) => {
        setComplaintData(prev => ({
            ...prev,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }));
    };

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-6 my-4">
                <div>
                    <label htmlFor="employeeName">Employee Name <span className="text-red-500">*</span></label>
                    <input
                        placeholder="Please enter employee name"
                        type="text"
                        name="employeeName"
                        id="employeeName"
                        value={complaintData.employeeName}
                        onChange={handleInputChange}
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>
                <div>
                    <label htmlFor="position">Position <span className="text-red-500">*</span></label>
                    <input
                        placeholder="Please enter position"
                        type="text"
                        name="position"
                        id="position"
                        value={complaintData.position}
                        onChange={handleInputChange}
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>
                <div>
                    <label htmlFor="department">Department <span className="text-red-500">*</span></label>
                    <input
                        placeholder="Please enter department"
                        type="text"
                        name="department"
                        id="department"
                        value={complaintData.department}
                        onChange={handleInputChange}
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>
                <div>
                    <label htmlFor="locationOfConcern">Location of Concern <span className="text-red-500">*</span></label>
                    <input
                        placeholder="Please enter location of concern"
                        type="text"
                        name="locationOfConcern"
                        id="locationOfConcern"
                        value={complaintData.locationOfConcern}
                        onChange={handleInputChange}
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>
                <div>
                    <label htmlFor="hasSupervisorBeenInformed">Has Supervisor Been Informed? <span className="text-red-500">*</span></label>
                    <select
                        name="hasSupervisorBeenInformed"
                        id="hasSupervisorBeenInformed"
                        value={complaintData.hasSupervisorBeenInformed}
                        onChange={handleInputChange}
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[2px] md:py-[5px]"
                    >
                        <option hidden disabled value="">--Please choose an option--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="typeOfHazardousCondition">Type of Hazardous Condition <span className="text-red-500">*</span></label>
                    <input
                        placeholder="Please enter type of hazardous condition"
                        type="text"
                        name="typeOfHazardousCondition"
                        id="typeOfHazardousCondition"
                        value={complaintData.typeOfHazardousCondition}
                        onChange={handleInputChange}
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>
                <div className="col-span-2">
                    <label htmlFor="explanationAndRecommendation">Explanation and Recommendation <span className="text-red-500">*</span></label>
                    <textarea
                        placeholder="Please provide explanation and recommendation"
                        name="explanationAndRecommendation"
                        id="explanationAndRecommendation"
                        value={complaintData.explanationAndRecommendation}
                        onChange={handleInputChange}
                        rows="4"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="anyEffortsMadeToResolve">Any Efforts Made to Resolve? <span className="text-red-500">*</span></label>
                    <select
                        name="anyEffortsMadeToResolve"
                        id="anyEffortsMadeToResolve"
                        value={complaintData.anyEffortsMadeToResolve}
                        onChange={handleInputChange}
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[2px] md:py-[5px]"
                    >
                        <option hidden disabled value="">--Please choose an option--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                {complaintData.anyEffortsMadeToResolve === "yes" && (
                    <div className="col-span-2">
                        <label htmlFor="effortsMadeDetails">Efforts Made Details</label>
                        <textarea
                            placeholder="Please describe efforts made to resolve the issue"
                            name="effortsMadeDetails"
                            id="effortsMadeDetails"
                            value={complaintData.effortsMadeDetails}
                            onChange={handleInputChange}
                            rows="4"
                            className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                        ></textarea>
                    </div>
                )}
                <div>
                    <label htmlFor="eSignature">E-Signature <span className="text-red-500">*</span></label>
                    <input
                        placeholder="Please provide your e-signature"
                        type="text"
                        name="eSignature"
                        id="eSignature"
                        value={complaintData.eSignature}
                        onChange={handleInputChange}
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>
            </div>
        </div>
    );
};

ComplaintForm.propTypes = {
    complaintData: PropTypes.shape({
        employeeName: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        department: PropTypes.string.isRequired,
        locationOfConcern: PropTypes.string.isRequired,
        hasSupervisorBeenInformed: PropTypes.oneOf(["yes", "no"]).isRequired,
        typeOfHazardousCondition: PropTypes.string.isRequired,
        explanationAndRecommendation: PropTypes.string.isRequired,
        anyEffortsMadeToResolve: PropTypes.oneOf(["yes", "no"]).isRequired,
        effortsMadeDetails: PropTypes.string,
        eSignature: PropTypes.string.isRequired,
        dateOfEvent: PropTypes.string,
        timeOfEvent: PropTypes.string, 
        injured: PropTypes.bool.isRequired 
    }).isRequired,
    setComplaintData: PropTypes.func.isRequired
};

export default ComplaintForm;
