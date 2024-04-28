const EquipmentInformation = () => {
    return (
        <div>
            <h3 className="text-md md:text-xl font-sedan font-semibold">Equipment Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-6 my-4">
                <div>
                    <label htmlFor="proportionerModel" className="">
                        Proportioner Model <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the proportioner model"
                        type="text"
                        name="proportionerModel"
                        id="proportionerModel"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="hoseLength" className="">
                        Hose Length (feet or meter) <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the spray hose length"
                        type="text"
                        name="hoseLength"
                        id="hoseLength"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="primaryHeaterTemp" className="">
                        Primary Heater Temperature (°C or °F) <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the primary heater temp"
                        type="text"
                        name="primaryHeaterTemp"
                        id="primaryHeaterTemp"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="hoseHeaterTemp" className="">
                        Hose Temperature (°C or °F) <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the hose heater temp"
                        type="text"
                        name="hoseHeaterTemp"
                        id="hoseHeaterTemp"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="pressureASide" className="">
                        Pressure - A Side (psi) <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the A-Side pressure"
                        type="text"
                        name="pressureASide"
                        id="pressureASide"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="pressureBSide" className="">
                        Pressure - B Side (psi) <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the B-Side pressure"
                        type="text"
                        name="pressureBSide"
                        id="pressureBSide"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default EquipmentInformation;
