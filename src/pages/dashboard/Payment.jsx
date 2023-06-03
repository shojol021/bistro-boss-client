import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../shared/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const pkKey = import.meta.env.VITE_PAYMENT_GATEWAY_PK 
const stripePromise = loadStripe(pkKey)

const Payment = () => {
    return (
        <div className="w-full p-12">
            <SectionTitle subHeading='Please complete' heading='Payment'></SectionTitle>
            
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;