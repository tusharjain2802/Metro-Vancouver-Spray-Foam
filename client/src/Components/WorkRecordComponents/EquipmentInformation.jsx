import { useState } from 'react';
import PropTypes from 'prop-types';

const EquipmentInformation = ({ onChange }) => {
    const [proportionerModel, setProportionerModel] = useState('');
    const [hoseLength, setHoseLength] = useState('');
    const [primaryHeaterTemp, setPrimaryHeaterTemp] = useState('');
    const [hoseHeaterTemp, setHoseHeaterTemp] = useState('');
    const [pressureASide, setPressureASide] = useState('');
    const [pressureBSide, setPressureBSide] = useState('');

    const handleInputChange = (name, setter) => (event) => {
        setter(event.target.value);
        onChange({
            proportionerModel,
            hoseLength,
            primaryHeaterTemp,
            hoseHeaterTemp,
            pressureASide,
            pressureBSide,
            [name]: event.target.value
        });
    };

    return (
        <div>
            <h3 className="text-md md:text-xl font-sedan font-semibold">Equipment Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-6 my-4">
                {InputComponent("Proportioner Model", "text", "proportionerModel", proportionerModel, handleInputChange("proportionerModel", setProportionerModel), true)}
                {InputComponent("Hose Length (feet or meter)", "text", "hoseLength", hoseLength, handleInputChange("hoseLength", setHoseLength), true)}
                {InputComponent("Primary Heater Temperature (°C or °F)", "text", "primaryHeaterTemp", primaryHeaterTemp, handleInputChange("primaryHeaterTemp", setPrimaryHeaterTemp), true)}
                {InputComponent("Hose Temperature (°C or °F)", "text", "hoseHeaterTemp", hoseHeaterTemp, handleInputChange("hoseHeaterTemp", setHoseHeaterTemp), true)}
                {InputComponent("Pressure - A Side (psi)", "text", "pressureASide", pressureASide, handleInputChange("pressureASide", setPressureASide), true)}
                {InputComponent("Pressure - B Side (psi)", "text", "pressureBSide", pressureBSide, handleInputChange("pressureBSide", setPressureBSide), true)}
            </div>
        </div>
    );
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

EquipmentInformation.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default EquipmentInformation;
