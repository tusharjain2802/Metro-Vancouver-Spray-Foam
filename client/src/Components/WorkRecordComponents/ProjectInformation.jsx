import { useState } from 'react';
import PropTypes from 'prop-types';

const ProjectInformation = ({ onChange }) => {
    const [projectName, setProjectName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [construction, setConstruction] = useState('');
    const [buildingPermitPosted, setBuildingPermitPosted] = useState('');
    const [buildingPermitNumber, setBuildingPermitNumber] = useState('');
    const [warningSignsPosted, setWarningSignsPosted] = useState('');
    const [thermalBarrierCompany, setThermalBarrierCompany] = useState('');

    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
        onChange({
            projectName,
            streetAddress,
            city,
            province,
            customerName,
            construction,
            buildingPermitPosted,
            buildingPermitNumber,
            warningSignsPosted,
            thermalBarrierCompany,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div>
            <h3 className="text-md md:text-xl font-sedan font-semibold">Project Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-6 my-4">
                <div>
                    <label htmlFor="projectName">Project Name <span className="text-red-500">*</span></label>
                    <input
                        placeholder="Please enter the project name"
                        type="text"
                        name="projectName"
                        id="projectName"
                        value={projectName}
                        onChange={handleInputChange(setProjectName)}
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="streetAddress">Street Address <span className="text-red-500">*</span></label>
                    <input
                        placeholder="Please enter the street address"
                        type="text"
                        name="streetAddress"
                        id="streetAddress"
                        value={streetAddress}
                        onChange={handleInputChange(setStreetAddress)}
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="city">City <span className="text-red-500">*</span></label>
                    <input
                        placeholder="Please enter the city"
                        type="text"
                        name="city"
                        id="city"
                        value={city}
                        onChange={handleInputChange(setCity)}
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="province">Province <span className="text-red-500">*</span></label>
                    <input
                        placeholder="Please enter the province"
                        type="text"
                        name="province"
                        id="province"
                        value={province}
                        onChange={handleInputChange(setProvince)}
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="customerName">Customer Name <span className="text-red-500">*</span></label>
                    <input
                        placeholder="Please enter the customer name"
                        type="text"
                        name="customerName"
                        id="customerName"
                        value={customerName}
                        onChange={handleInputChange(setCustomerName)}
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="construction">Construction</label>
                    <select
                        name="construction"
                        id="construction"
                        value={construction}
                        required
                        onChange={handleInputChange(setConstruction)}
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="occupied">Occupied</option>
                        <option value="unoccupied">Unoccupied</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="buildingPermitPosted">Building Permit Posted</label>
                    <select
                        name="buildingPermitPosted"
                        id="buildingPermitPosted"
                        value={buildingPermitPosted}
                        onChange={handleInputChange(setBuildingPermitPosted)}
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option
                        >
                    </select>
                </div>

                <div>
                    <label htmlFor="buildingPermitNumber">If yes, provide the Building Permit #</label>
                    <input
                        placeholder="Please enter the building permit number"
                        type="text"
                        name="buildingPermitNumber"
                        id="buildingPermitNumber"
                        value={buildingPermitNumber}
                        onChange={handleInputChange(setBuildingPermitNumber)}
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="warningSignsPosted">Warning Signs Posted</label>
                    <select
                        name="warningSignsPosted"
                        id="warningSignsPosted"
                        value={warningSignsPosted}
                        onChange={handleInputChange(setWarningSignsPosted)}
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="thermalBarrierCompany">Company responsible for thermal barrier</label>
                    <input
                        placeholder="Please enter the company responsible for thermal barrier"
                        type="text"
                        name="thermalBarrierCompany"
                        id="thermalBarrierCompany"
                        value={thermalBarrierCompany}
                        onChange={handleInputChange(setThermalBarrierCompany)}
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>
            </div>
        </div>
    );
};

ProjectInformation.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default ProjectInformation;
