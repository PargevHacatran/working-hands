interface IButton {
    btnText: string;
    className: string;
    onClick: any;
}

export const Button = ({ btnText, onClick, className }:IButton) => {
    return (
        <button
            onClick={(e) => onClick(e)}
            className={className}
        >
            { btnText }
        </button>
    );
}