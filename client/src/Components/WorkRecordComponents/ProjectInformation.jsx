const ProjectInformation = () => {
    return (
        <div>
            <h3 className="text-md md:text-xl font-sedan font-semibold">Project Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-6 my-4">
                <div>
                    <label htmlFor="projectName" className="">
                        Project Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the project name"
                        type="text"
                        name="projectName"
                        id="projectName"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="streetAddress" className="">
                        Street Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the street address"
                        type="text"
                        name="streetAddress"
                        id="streetAddress"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="city" className="">
                        City <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the city"
                        type="text"
                        name="city"
                        id="city"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="province" className="">
                        Province <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the province"
                        type="text"
                        name="province"
                        id="province"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="customerName" className="">
                        Customer Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the customer name"
                        type="text"
                        name="customerName"
                        id="customerName"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="construction" className="">
                        Construction
                    </label>
                    <select
                        name="construction"
                        id="construction"
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="ventilated">Occupied</option>
                        <option value="sprayAreaIsolated">Unoccupied</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="buildingPermitPosted" className="">
                        Building Permit Posted
                    </label>
                    <select
                        name="buildingPermitPosted"
                        id="buildingPermitPosted"
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="buildingPermitNumber" className="">
                        If yes provide the Building Permit #
                    </label>
                    <input
                        placeholder="Please enter the building permit number"
                        type="text"
                        name="buildingPermitNumber"
                        id="buildingPermitNumber"
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="warningSignsPosted" className="">
                        Warning Signs Posted
                    </label>
                    <select
                        name="warningSignsPosted"
                        id="warningSignsPosted"
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="thermalBarrierCompany" className="">
                        Company responsible for thermal barrier
                    </label>
                    <input
                        placeholder="Please enter the company responsible for thermal barrier"
                        type="text"
                        name="thermalBarrierCompany"
                        id="thermalBarrierCompany"
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectInformation;
