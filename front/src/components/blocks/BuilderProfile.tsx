import { BuildCompany, BuilderInfoCard, BuilderReviews, Header } from "../blocks";

export const BuilderProfile = () => {
    const role = localStorage.getItem('role');
    
    return (
        <div>
            <Header />
            <BuilderInfoCard />
            {   
                role === 'builder'
                    ? <BuildCompany />
                    : <BuilderReviews />
            }
        </div>
    );
}