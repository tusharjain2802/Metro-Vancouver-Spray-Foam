const MaterialInformation = () => {
    return (
        <div>
            <h3 className="text-md md:text-xl font-sedan font-semibold">Material Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-6 my-4">
                <div>
                    <label htmlFor="manufacturer" className="">
                        Manufacturer <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the manufacturer"
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="productTradeName" className="">
                        Product Trade Name/Number <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the product name/number"
                        type="text"
                        name="productTradeName"
                        id="productTradeName"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="productType" className="">
                        Product Type <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the product type"
                        type="text"
                        name="productType"
                        id="productType"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="ccmcNumber" className="">
                        Material CCMC # <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the CCMC Number"
                        type="text"
                        name="ccmcNumber"
                        id="ccmcNumber"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="lotNumberA" className="">
                        Lot # - A Component <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the A-Side lot number"
                        type="text"
                        name="lotNumberA"
                        id="lotNumberA"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="expiryDateA" className="">
                        Expiry Date - A Component <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="dd-mm-yyyy"
                        type="date"
                        name="expiryDateA"
                        id="expiryDateA"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="lotNumberB" className="">
                        Lot # - B Component <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Please enter the B-Side lot number"
                        type="text"
                        name="lotNumberB"
                        id="lotNumberB"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="expiryDateB" className="">
                        Expiry Date - B Component <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="dd-mm-yyyy"
                        type="date"
                        name="expiryDateB"
                        id="expiryDateB"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>

                <div>
                    <label htmlFor="foamQuantity" className="">
                        Quantity of foam used (today) <span className="text-red-500">*</span>
                    </label>
                    <input
                        placeholder="Can be in LBS, KGS or Cycles"
                        type="text"
                        name="foamQuantity"
                        id="foamQuantity"
                        required
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default MaterialInformation;
