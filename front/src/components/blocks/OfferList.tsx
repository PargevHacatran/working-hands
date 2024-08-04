import { useEffect, useState } from "react"
import { Offer } from "../ui"
import axios from "axios";

export const OfferList = () => {    
    const [offers, setOffers] = useState<any[]>([]);

    useEffect(() => {
        axios
            .get('https://working-hands.onrender.com/vacancies/get-vacancies')
            .then((resp) => setOffers(resp.data))
    }, [])

    return (
        <div>
            {
                offers.map((offer) => (
                    <Offer 
                        uid={offer.vacancy_id}
                        title={offer.title}
                        price={offer.price}
                        name={offer.name}
                        description={offer.description}
                        responses={offer.responses}
                        category={offer.category}
                        devEmail={offer.devEmail}
                    />
                ))
            }
        </div>
    )
}