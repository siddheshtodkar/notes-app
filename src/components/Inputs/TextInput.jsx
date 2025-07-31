const TextInput = ({ label, name, value, onChange, required = false }) => {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block font-semibold">{label}</label>
            <input type="text" name={name} id={name} value={value} className="w-full p-2 border rounded-lg"
                onChange={onChange} required={required} />
        </div>
    );
}

export default TextInput;