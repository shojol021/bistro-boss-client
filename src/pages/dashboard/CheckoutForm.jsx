import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {

    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!elements || !stripe) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        console.log('card', card)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card', card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message)

        }
        else {
            console.log('paymentMethod', paymentMethod)
            setCardError('')
        }

    }

    return (
        <>
            <form className="w-2/3" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm my-5" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-error">{cardError}</p>
            }
        </>
    );
};

export default CheckoutForm;