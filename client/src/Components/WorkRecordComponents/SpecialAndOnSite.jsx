
const SpecialConditions = () => {
    return (
        <div>
            <h3 className="text-md md:text-xl font-sedan font-semibold">Special Conditions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-6 my-4">
                <div>
                    <label htmlFor="primerRequired" className="">
                        Primer Required <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="primerRequired"
                        id="primerRequired"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="primerDetails" className="">
                        If Yes Provide Details
                    </label>
                    <input
                        placeholder="Please enter the primer details"
                        type="text"
                        name="primerDetails"
                        id="primerDetails"
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="exteriorCoatingRequired" className="">
                        Exterior Coating Required <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="exteriorCoatingRequired"
                        id="exteriorCoatingRequired"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="interiorThermalBarrier" className="">
                        Interior Thermal Barrier <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="interiorThermalBarrier"
                        id="interiorThermalBarrier"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="required">Required</option>
                        <option value="notRequired">Not Required</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

const OnSiteTestResults = () => {
    return (
        <div>
            <h3 className="text-md md:text-xl font-sedan font-semibold">On-Site Test Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-6 my-4">
                <div>
                    <label htmlFor="sampleWeight" className="">
                        Weight of Sample (m) <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the sample weight in grams"
                        type="text"
                        name="sampleWeight"
                        id="sampleWeight"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="sampleVolume" className="">
                        Volume of Sample (v) <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the sample volume in ml"
                        type="text"
                        name="sampleVolume"
                        id="sampleVolume"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="calculatedDensity" className="">
                        Calculated Density (kg/m³) NOTE: Density = m ÷ v x 1000 <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the calculated density"
                        type="text"
                        name="calculatedDensity"
                        id="calculatedDensity"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="minimumRequiredDensity" className="">
                        Minimum Required Density (kg/m³) <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the minimum allowable density"
                        type="text"
                        name="minimumRequiredDensity"
                        id="minimumRequiredDensity"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="siteDensity" className="">
                        Site Density equal or greater <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="siteDensity"
                        id="siteDensity"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="adhesionTest" className="">
                        Adhesion Test <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="adhesionTest"
                        id="adhesionTest"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="pass">Pass</option>
                        <option value="fail">Fail</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="cohesionTest" className="">
                        Cohesion Test <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="cohesionTest"
                        id="cohesionTest"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="pass">Pass</option>
                        <option value="fail">Fail</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="numberOfPasses" className="">
                        Number of Passes
                    </label>
                    <input
                        placeholder="Please enter the number of passes"
                        type="text"
                        name="numberOfPasses"
                        id="numberOfPasses"
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="thicknessPerPass" className="">
                        Thickness per Pass (mm) <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the thickness per pass"
                        type="text"
                        name="thicknessPerPass"
                        id="thicknessPerPass"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="totalFoamThickness" className="">
                        Total Foam Thickness (mm) <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the total thickness"
                        type="text"
                        name="totalFoamThickness"
                        id="totalFoamThickness"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="jobSiteLabelInstalled" className="">
                        Job Site Label Installed <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="jobSiteLabelInstalled"
                        id="jobSiteLabelInstalled"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export { SpecialConditions, OnSiteTestResults };
