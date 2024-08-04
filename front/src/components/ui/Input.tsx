interface IInput {
    name: string;
    type: string;
    placeholder: string;
    className: string;
    onChange: any;
}

export const Input = ({ name, type, placeholder, className, onChange }:IInput) => {
    return (
        <input 
            name={name}
            type={type}
            placeholder={placeholder}
            className={className}
            onChange={(e) => onChange(e)}
        />
    )
}