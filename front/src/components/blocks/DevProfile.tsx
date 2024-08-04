import { BuilderInfoItem } from "../ui";
import { BuildCompany } from "./BuildCompany";
import { BuilderInfoCard } from "./BuilderInfoCard";
import { BuilderProfile } from "./BuilderProfile";
import { FilterCategory } from "./FilterCategory";
import { Header } from "./Header";
import { OfferList } from "./OfferList";

export const DevProfile = () => {
    return (
        <div>
            <Header />
            <BuilderInfoCard />
            <img src={self.location.href.split('imgURL=')[1]} alt="" />
            <FilterCategory />
            <OfferList />
        </div>
    );
} 