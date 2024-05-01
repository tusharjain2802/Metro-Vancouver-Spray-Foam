import { useState } from 'react';
import PropTypes from 'prop-types';

const EnvironmentalConditions = ({ onChange }) => {
    const [ambientTemp, setAmbientTemp] = useState('');
    const [relativeHumidity, setRelativeHumidity] = useState('');
    const [windVelocity, setWindVelocity] = useState('');
    const [substrateTemp, setSubstrateTemp] = useState('');

    const handleInputChange = (name, setter) => (event) => {
        setter(event.target.value);
        onChange({
            ambientTemp,
            relativeHumidity,
            windVelocity,
            substrateTemp,
            [name]: event.target.value
        });
    };

    return (
        <div>
            <h3 className="text-md md:text-xl font-sedan font-semibold">Environmental Conditions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-6 my-4">
                {InputComponent("Ambient Temp (°C or °F)", "text", "ambientTemp", ambientTemp, handleInputChange("ambientTemp", setAmbientTemp), true)}
                {InputComponent("Relative Humidity (%)", "text", "relativeHumidity", relativeHumidity, handleInputChange("relativeHumidity", setRelativeHumidity), true)}
                {InputComponent("Wind Velocity (km/h)", "text", "windVelocity", windVelocity, handleInputChange("windVelocity", setWindVelocity), true)}
                {InputComponent("Substrate Temp (°C or °F)", "text", "substrateTemp", substrateTemp, handleInputChange("substrateTemp", setSubstrateTemp), true)}
            </div>
        </div>
    );
};

EnvironmentalConditions.propTypes = {
    onChange: PropTypes.func.isRequired
};


const SubstrateConditions = ({ onChange }) => {
    const [substrateType, setSubstrateType] = useState('');
    const [substrateClean, setSubstrateClean] = useState('');
    const [substrateDry, setSubstrateDry] = useState('');
    const [properAdhesion, setProperAdhesion] = useState('');

    const handleInputChange = (name, setter) => (event) => {
        setter(event.target.value);
        onChange({
            substrateType,
            substrateClean,
            substrateDry,
            properAdhesion,
            [name]: event.target.value
        });
    };

    return (
        <div>
            <h3 className="text-md md:text-xl font-sedan font-semibold">Substrate Conditions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-6 my-4">
                {InputComponent("Substrate Type", "text", "substrateType", substrateType, handleInputChange("substrateType", setSubstrateType), true)}
                {SelectComponent("Was The Substrate Clean", "substrateClean", substrateClean, handleInputChange("substrateClean", setSubstrateClean), ["Yes", "No"])}
                {SelectComponent("Was The Substrate Dry", "substrateDry", substrateDry, handleInputChange("substrateDry", setSubstrateDry), ["Yes", "No"])}
                {SelectComponent("Properly Fastened / Proper Adhesion", "properAdhesion", properAdhesion, handleInputChange("properAdhesion", setProperAdhesion), ["Yes", "No"])}
            </div>
        </div>
    );
};

SubstrateConditions.propTypes = {
    onChange: PropTypes.func.isRequired
};

const InputComponent = (label, type, name, value, onChange, required) => (
    <div>
        <label htmlFor={name} className="capitalize">
            {label} <span className="text-red-500">{required ? '*' : ''}</span>
        </label>
        <input
            placeholder={`Please enter ${label.toLowerCase()}`}
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            required={required}
            className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
        />
    </div>
);

const SelectComponent = (label, name, value, onChange, options) => (
    <div>
        <label htmlFor={name} className="capitalize">
            {label} <span className="text-red-500">*</span>
        </label>
        <select
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            required
            className="text-gray-800 rounded-lg border border-gray-800 w-full px-[12px] text-[12px] md:text-[17px] py-[5px] md:py-[9px]"
        >
            <option value="">--Please choose an option--</option>
            {options.map(option => (
                <option key={option} value={option.toLowerCase()}>{option}</option>
            ))}
        </select>
    </div>
);


export { EnvironmentalConditions, SubstrateConditions };
