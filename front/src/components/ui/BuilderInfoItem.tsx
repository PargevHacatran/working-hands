interface IBuilderInfoItem {
    text: string;
    imgURL: string;
}

export const BuilderInfoItem = ({ text, imgURL }:IBuilderInfoItem) => {
    return (
        <li>
            <img src={imgURL} alt="" />
            <span>{ text }</span>
        </li>
    )
}