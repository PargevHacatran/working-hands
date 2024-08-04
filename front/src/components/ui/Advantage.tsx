interface IAdvantage {
    index: number;
    text: string;
}

export const Advantage = ({ index, text }:IAdvantage) => {
    return (
        <div>
            <p>{ index + 1 }</p>
            <p>{ text }</p>
        </div>
    );
}