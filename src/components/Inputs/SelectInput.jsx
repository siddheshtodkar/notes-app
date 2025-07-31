const SelectInput = ({ name, label, onChange, value, required = false, options }) => {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block font-semibold">{label}</label>
            <select name={name} id={name} value={value} className="w-full p-2 border rounded-lg" onChange={onChange} required={required}>
                {options.map(option => (
                    <option value={option.value} key={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}

export default SelectInput;