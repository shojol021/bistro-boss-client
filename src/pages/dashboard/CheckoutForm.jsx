import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const CheckoutForm = ({price}) => {

    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const {user} = useContext(AuthContext)

    useEffect(() => {
        console.log(price)
        axiosSecure.post('/create-payment-intent', {price})
        .then(res => {
            setClientSecret(res.data.clientSecret)
        })
    }, [])

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
            setCardError(error.message)

        }
        else {
            console.log('paymentMethod', paymentMethod)
            setCardError('')
        }

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user?.displayName || 'anonymous',
                  email: user?.email || 'unknown'
                },
              },
            },
          );

          if(confirmError){
            setCardError(confirmError.message)
            console.log(confirmError.message)
          }

          console.log(paymentIntent)

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
                <button className="btn btn-primary btn-sm my-5" type="submit" disabled={!stripe || !clientSecret}>
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