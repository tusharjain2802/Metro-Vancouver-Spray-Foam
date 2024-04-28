const GeneralInformation = () => {
    return (
        <div>
            <h3 className="text-md md:text-xl font-sedan font-semibold">General Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-6 my-4">
                <div>
                    <label htmlFor="dailyWorkRecord" className="">
                        Daily Work Record #
                    </label>
                    <input
                        placeholder="Please enter your daily work record #"
                        type="text"
                        name="dailyWorkRecord"
                        id="dailyWorkRecord"
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px] "
                    />
                </div>

                <div>
                    <label htmlFor="date" className="">
                        Date
                    </label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px] "
                    />
                </div>

                <div>
                    <label htmlFor="contractor" className="">
                        Contractor
                    </label>
                    <input
                        placeholder="Please enter your company name"
                        type="text"
                        name="contractor"
                        id="contractor"
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px] "
                    />
                </div>

                <div>
                    <label htmlFor="email" className="">
                        Email
                    </label>
                    <input
                        placeholder="Please enter your email address"
                        type="email"
                        name="email"
                        id="email"
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px] "
                    />
                </div>

                <div>
                    <label htmlFor="installer" className="">
                        Installer
                    </label>
                    <input
                        placeholder="Please enter the installers full name"
                        type="text"
                        name="installer"
                        id="installer"
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px] "
                    />
                </div>

                <div>
                    <label htmlFor="installerCertificate" className="">
                        Installer Certification #
                    </label>
                    <input
                        placeholder="Please enter the installers certification number"
                        type="tel"
                        name="installerCertificate"
                        id="installerCertificate"
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px] "
                    />
                </div>

                <div>
                    <label htmlFor="Apprentice" className="">
                        Apprentice
                    </label>
                    <input
                        placeholder="Please enter the apprentice full name"
                        type="text"
                        name="Apprentice"
                        id="Apprentice"
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px] "
                    />
                </div>

                <div>
                    <label htmlFor="apprenticeregistrationnumber" className="">
                        Apprentice Registration #
                    </label>
                    <input
                        placeholder="Please enter the apprentice registration number"
                        type="tel"
                        name="apprenticeRegNo"
                        id="apprenticeRegNo"
                        className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px] "
                    />
                </div>
            </div>
        </div>
    )
}

export default GeneralInformation;