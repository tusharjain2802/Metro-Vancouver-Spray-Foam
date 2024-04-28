const EnvironmentalConditions = () => {
    return (
        <div>
            <h3 className="text-md md:text-xl font-sedan font-semibold">Environmental Conditions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-6 my-4">
                <div>
                    <label htmlFor="ambientTemp" className="">
                        Ambient Temp (°C or °F) <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the ambient temp"
                        type="text"
                        name="ambientTemp"
                        id="ambientTemp"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="relativeHumidity" className="">
                        Relative Humidity (%) <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the relative humidity"
                        type="text"
                        name="relativeHumidity"
                        id="relativeHumidity"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="windVelocity" className="">
                        Wind Velocity (km/h) <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the wind velocity"
                        type="text"
                        name="windVelocity"
                        id="windVelocity"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="substrateTemp" className="">
                        Substrate Temp (°C or °F) <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the substrate temp"
                        type="text"
                        name="substrateTemp"
                        id="substrateTemp"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>
            </div>
        </div>
    );
};

const SubstrateConditions = () => {
    return (
        <div>
            <h3 className="text-md md:text-xl font-sedan font-semibold">Substrate Conditions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-6 my-4">
                <div>
                    <label htmlFor="substrateType" className="">
                        Substrate Type <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the substrate type"
                        type="text"
                        name="substrateType"
                        id="substrateType"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="substrateClean" className="">
                        Was The Substrate Clean <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="substrateClean"
                        id="substrateClean"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="substrateDry" className="">
                        Was The Substrate Dry <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="substrateDry"
                        id="substrateDry"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="properAdhesion" className="">
                        Properly Fastened / Proper Adhesion <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="properAdhesion"
                        id="properAdhesion"
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

export { EnvironmentalConditions, SubstrateConditions };
