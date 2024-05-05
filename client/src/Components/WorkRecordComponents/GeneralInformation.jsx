import { useState } from "react";
import PropTypes from 'prop-types';

const GeneralInformation = ({ onChange }) => {
    const [formData, setFormData] = useState({
        density: '',
        dailyWorkRecord: '',
        date: '',
        contractor: '',
        email: '',
        installer: '',
        installerCertificate: '',
        apprentice: '',
        apprenticeRegNo: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const updatedFormData = { ...formData, [name]: value };
        setFormData(updatedFormData);
        onChange(updatedFormData); 
    };

    const options =["High", "Low", "Medium"]; 

    return (
        <div>
            <h3 className="text-md md:text-xl font-sedan font-semibold">General Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-6 my-4">
                {Object.entries(formData).map(([key, value]) => (
                    <div key={key}>
                        {key ==="density"? 
                        <div>
                        <label htmlFor={key} className="capitalize">
                            Density <span className="text-red-500">*</span>
                        </label>
                        <select
                            name={key}
                            id={key}
                            value={value}
                            onChange={handleInputChange}
                            required
                            
                            className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                        >
                            <option disabled hidden value="">--Please choose an option--</option>
                            {options.map(option => (
                                <option key={option} value={option.toLowerCase()}>{option}</option>
                            ))}
                        </select>
                    </div>
                        : <div>
                        <label htmlFor={key} className="capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </label>
                        <input
                            placeholder={`Please enter ${key.replace(/([A-Z])/g, ' $1').trim().toLowerCase()} `}
                            type={key.includes('email') ? 'email' : key.includes('Certificate') || key.includes('RegNo') ? 'tel': key.includes('date') ? 'date': 'text'}
                            name={key}
                            id={key}
                            value={value}
                            onChange={handleInputChange}
                            className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
                        />
                        </div> 
                        }
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

GeneralInformation.propTypes = {
    onChange: PropTypes.func.isRequired
};


export default GeneralInformation;
