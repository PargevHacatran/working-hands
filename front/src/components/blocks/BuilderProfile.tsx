import { BuildCompany, BuilderInfoCard, BuilderReviews, Header } from "../blocks";

export const BuilderProfile = () => {
    const role = localStorage.getItem('role');
    
    return (
        <div>
            <Header />
            <BuilderInfoCard />
            <BuildCompany />
            {   
                role === 'builder'
                    ? null
                    : <BuilderReviews />
            }
        </div>
    );
}