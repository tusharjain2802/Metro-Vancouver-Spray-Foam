import { useState } from 'react';
import PropTypes from 'prop-types';

const MaterialInformation = ({ onChange }) => {
    const [manufacturer, setManufacturer] = useState('');
    const [productTradeName, setProductTradeName] = useState('');
    const [productType, setProductType] = useState('');
    const [ccmcNumber, setCcmcNumber] = useState('');
    const [lotNumberA, setLotNumberA] = useState('');
    const [expiryDateA, setExpiryDateA] = useState('');
    const [lotNumberB, setLotNumberB] = useState('');
    const [expiryDateB, setExpiryDateB] = useState('');
    const [foamQuantity, setFoamQuantity] = useState('');

    const handleInputChange = (name, setter) => (event) => {
        setter(event.target.value);
        onChange({
            manufacturer,
            productTradeName,
            productType,
            ccmcNumber,
            lotNumberA,
            expiryDateA,
            lotNumberB,
            expiryDateB,
            foamQuantity,
            [name]: event.target.value
        });
    };

    return (
        <div>
            <h3 className="text-md md:text-xl font-sedan font-semibold">Material Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-6 my-4">
                {InputComponent("Manufacturer", "text", "manufacturer", manufacturer, handleInputChange("manufacturer", setManufacturer), true)}
                {InputComponent("Product Trade Name/Number", "text", "productTradeName", productTradeName, handleInputChange("productTradeName", setProductTradeName), true)}
                {InputComponent("Product Type", "text", "productType", productType, handleInputChange("productType", setProductType), true)}
                {InputComponent("Material CCMC #", "text", "ccmcNumber", ccmcNumber, handleInputChange("ccmcNumber", setCcmcNumber), true)}
                {InputComponent("Lot # - A Component", "text", "lotNumberA", lotNumberA, handleInputChange("lotNumberA", setLotNumberA), true)}
                {InputComponent("Expiry Date - A Component", "date", "expiryDateA", expiryDateA, handleInputChange("expiryDateA", setExpiryDateA), true)}
                {InputComponent("Lot # - B Component", "text", "lotNumberB", lotNumberB, handleInputChange("lotNumberB", setLotNumberB), true)}
                {InputComponent("Expiry Date - B Component", "date", "expiryDateB", expiryDateB, handleInputChange("expiryDateB", setExpiryDateB), true)}
                {InputComponent("Quantity of foam used (today)", "text", "foamQuantity", foamQuantity, handleInputChange("foamQuantity", setFoamQuantity), true)}
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

MaterialInformation.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default MaterialInformation;
