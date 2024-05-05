import { useState } from 'react';
import PropTypes from 'prop-types';

const SpecialConditions = ({ onChange }) => {
    const [vapourBarrier, setvapourBarrier] = useState('');
    const [PreparationDetails, setPreparationDetails] = useState('');
    const [airBarrier, setAirBarrier] = useState('');
    const [thermalBarrier, setThermalBarrier] = useState('');

    const handleInputChange = (name, setter) => (event) => {
        setter(event.target.value);
        onChange({
            vapourBarrier,
            PreparationDetails,
            airBarrier,
            thermalBarrier,
            [name]: event.target.value
        });
    };

    return (
        <div>
            <h3 className="text-md md:text-xl font-sedan font-semibold">Special Conditions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-6 my-4">
            {InputComponent("Preparation Required", "text", "PreparationDetails", PreparationDetails, handleInputChange("PreparationDetails", setPreparationDetails))}
                {SelectComponent("Vapour Barrier Installed", "vapourBarrier", vapourBarrier, handleInputChange("vapourBarrier", setvapourBarrier), ["Yes", "No", "By others"])}
                {SelectComponent("Air Barrier Installed", "airBarrier", airBarrier, handleInputChange("airBarrier", setAirBarrier), ["Yes", "No", "By others"])}
                {SelectComponent("Thermal Barrier Installed ", "thermalBarrier", thermalBarrier, handleInputChange("thermalBarrier", setThermalBarrier), ["Yes", "No", "By others"])}
            </div>
        </div>
    );
};

SpecialConditions.propTypes = {
    onChange: PropTypes.func.isRequired
};

const OnSiteTestResults = ({ onChange }) => {
    const [sampleWeight, setSampleWeight] = useState('');
    const [sampleVolume, setSampleVolume] = useState('');
    const [calculatedDensity, setCalculatedDensity] = useState('');
    const [minimumRequiredDensity, setMinimumRequiredDensity] = useState('');
    const [siteDensity, setSiteDensity] = useState('');
    const [adhesionTest, setAdhesionTest] = useState('');
    const [cohesionTest, setCohesionTest] = useState('');
    const [numberOfPasses, setNumberOfPasses] = useState('');
    const [thicknessPerPass, setThicknessPerPass] = useState('');
    const [totalFoamThickness, setTotalFoamThickness] = useState('');
    const [jobSiteLabelInstalled, setJobSiteLabelInstalled] = useState('');

    const handleInputChange = (name, setter) => (event) => {
        setter(event.target.value);
        onChange({
            sampleWeight,
            sampleVolume,
            calculatedDensity,
            minimumRequiredDensity,
            siteDensity,
            adhesionTest,
            cohesionTest,
            numberOfPasses,
            thicknessPerPass,
            totalFoamThickness,
            jobSiteLabelInstalled,
            [name]: event.target.value
        });
    };

    return (
        <div>
            <h3 className="text-md md:text-xl font-sedan font-semibold">On-Site Test Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-6 my-4">
                {InputComponent("Weight of Sample (m)", "text", "sampleWeight", sampleWeight, handleInputChange("sampleWeight", setSampleWeight), true)}
                {InputComponent("Volume of Sample (v)", "text", "sampleVolume", sampleVolume, handleInputChange("sampleVolume", setSampleVolume), true)}
                {InputComponent("Calculated Density (kg/m³)", "text", "calculatedDensity", calculatedDensity, handleInputChange("calculatedDensity", setCalculatedDensity), true)}
                {InputComponent("Minimum Required Density (kg/m³)", "text", "minimumRequiredDensity", minimumRequiredDensity, handleInputChange("minimumRequiredDensity", setMinimumRequiredDensity), true)}
                {SelectComponent("Site Density within ± 0.8 kg/m³ ", "siteDensity", siteDensity, handleInputChange("siteDensity", setSiteDensity), ["Yes", "No"])}
                {SelectComponent("Adhesion Test", "adhesionTest", adhesionTest, handleInputChange("adhesionTest", setAdhesionTest), ["Pass", "Fail"])}
                {SelectComponent("Cohesion Test", "cohesionTest", cohesionTest, handleInputChange("cohesionTest", setCohesionTest), ["Pass", "Fail"])}
                {InputComponent("Number of Passes", "text", "numberOfPasses", numberOfPasses, handleInputChange("numberOfPasses", setNumberOfPasses))}
                {InputComponent("Thickness per Pass (mm)", "text", "thicknessPerPass", thicknessPerPass, handleInputChange("thicknessPerPass", setThicknessPerPass), true)}
                {InputComponent("Total Foam Thickness (mm)", "text", "totalFoamThickness", totalFoamThickness, handleInputChange("totalFoamThickness", setTotalFoamThickness), true)}
                {SelectComponent("Job Site Label Installed", "jobSiteLabelInstalled", jobSiteLabelInstalled, handleInputChange("jobSiteLabelInstalled", setJobSiteLabelInstalled), ["Yes", "No"])}
            </div>
        </div>
    );
};

OnSiteTestResults.propTypes = {
    onChange: PropTypes.func.isRequired
};

const InputComponent = (label, type, name, value, onChange, required = false) => (
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
            <option disabled hidden value="">--Please choose an option--</option>
            {options.map(option => (
                <option key={option} value={option.toLowerCase()}>{option}</option>
            ))}
        </select>
    </div>
);

export { SpecialConditions, OnSiteTestResults };
