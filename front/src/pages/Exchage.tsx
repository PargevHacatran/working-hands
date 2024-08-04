import { Header } from "../components/blocks";
import { OfferList } from "../components/blocks/OfferList";

export function Exchange () {
    return (
        <div>
            <Header />
            <div style={{ backgroundColor: '#f4f4f4', paddingTop: 50, paddingBottom: 50 }}>
                <OfferList />
            </div>
        </div>
    )
}