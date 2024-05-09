import PropTypes from 'prop-types';

const IncidentReportForm = ({ complaintData, setComplaintData }) => {


    const handleInputChange = (e) => {
        setComplaintData(prev => ({
            ...prev,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }));
    };

    return (
        <div >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-6 my-4">
                <div>
                    <label htmlFor="firstName">First Name <span className="text-red-500">*</span></label>
                    <input
                        placeholder="Please enter your first name"
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={complaintData.firstName}
                        onChange={handleInputChange}
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name <span className="text-red-500">*</span></label>
                    <input
                        placeholder="Please enter your last name"
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={complaintData.lastName}
                        onChange={handleInputChange}
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>
                <div>
                    <label htmlFor="role">Role <span className="text-red-500">*</span></label>
                    <input
                        placeholder="Please enter your role (worker/customer/visitor)"
                        type="text"
                        name="role"
                        id="role"
                        value={complaintData.role}
                        onChange={handleInputChange}
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>
                <div>
                    <label htmlFor="address">Address <span className="text-red-500">*</span></label>
                    <input
                        placeholder="Please enter your address"
                        type="text"
                        name="address"
                        id="address"
                        value={complaintData.address}
                        onChange={handleInputChange}
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number <span className="text-red-500">*</span></label>
                    <input
                        placeholder="Please enter your phone number"
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={complaintData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email <span className="text-red-500">*</span></label>
                    <input
                        placeholder="Please enter your email"
                        type="email"
                        name="email"
                        id="email"
                        value={complaintData.email}
                        onChange={handleInputChange}
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>
            </div>
            {/* Incident Description */}
            <div className="my-4">
                <h4 className="text-lg font-semibold">Incident Description</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-6 mt-2">
                    <div>
                        <label htmlFor="dateOfEvent">Date of Event</label>
                        <input
                            type="date"
                            name="dateOfEvent"
                            id="dateOfEvent"
                            value={complaintData.dateOfEvent}
                            onChange={handleInputChange}
                            className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                        />
                    </div>
                    <div>
                        <label htmlFor="timeOfEvent">Time of Event</label>
                        <input
                            type="time"
                            name="timeOfEvent"
                            id="timeOfEvent"
                            value={complaintData.timeOfEvent}
                            onChange={handleInputChange}
                            className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                        />
                    </div>
                    <div>
                        <label htmlFor="location">Location</label>
                        <input
                            placeholder="Please enter the location of the incident"
                            type="text"
                            name="location"
                            id="location"
                            value={complaintData.location}
                            onChange={handleInputChange}
                            className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                        />
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="description">Description of Event</label>
                        <textarea
                            placeholder="Please describe the event"
                            name="description"
                            id="description"
                            value={complaintData.description}
                            onChange={handleInputChange}
                            rows="4"
                            required
                            className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="injured">Were you injured?</label>
                        <input
                            type="checkbox"
                            name="injured"
                            id="injured"
                            checked={complaintData.injured}
                            onChange={handleInputChange}
                            className="form-checkbox h-6 w-6 text-gray-800"
                        />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="factors">Factors Contributing to the Event</label>
                        <textarea
                            placeholder="Please describe the factors contributing to the event"
                            name="factors"
                            id="factors"
                            value={complaintData.factors}
                            onChange={handleInputChange}
                            rows="4"
                            className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                        ></textarea>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="avoidance">How Could the Event Be Avoided?</label>
                        <textarea
                            placeholder="Please suggest how the event could be avoided"
                            name="avoidance"
                            id="avoidance"
                            value={complaintData.avoidance}
                            onChange={handleInputChange}
                            rows="4"
                            className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="firstAidAdministered">Was First Aid Administered?</label>
                        <select
                            name="firstAidAdministered"
                            id="firstAidAdministered"
                            value={complaintData.firstAidAdministered}
                            onChange={handleInputChange}
                            className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                        >
                            <option hidden disabled value="">--Please choose an option--</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="eSignature">E-Signature</label>
                        <input
                            placeholder="Please provide your e-signature"
                            type="text"
                            name="eSignature"
                            id="eSignature"
                            value={complaintData.eSignature}
                            onChange={handleInputChange}
                            className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

IncidentReportForm.propTypes = {
    complaintData: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        dateOfEvent: PropTypes.string.isRequired,
        timeOfEvent: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        injured: PropTypes.bool.isRequired,
        factors: PropTypes.string.isRequired,
        avoidance: PropTypes.string.isRequired,
        firstAidAdministered: PropTypes.oneOf(['yes', 'no']).isRequired,
        eSignature: PropTypes.string.isRequired
    }).isRequired,
    setComplaintData: PropTypes.func.isRequired
};


export default IncidentReportForm;
