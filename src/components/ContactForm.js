import { useSelector } from 'react-redux'
import ContactFormInput from './ContactFormInput';
import DeliveryInformation from './DeliveryInformation';

export default function ContactForm() {
    const store = useSelector(store => store);

    const keyToProperCase = (key) => {
        const chars = key.split('')
        const newWord = []

        chars.forEach((char, index) => {
            if (index === 0) {
                newWord.push(char.toUpperCase())
            } else if (char.toUpperCase() === char) {
                newWord.push(" " + char)
            } else {
                newWord.push(char)
            }
        })

        return newWord.join('')
    }

    const displayContactInfo = () => {
        return Object.keys(store.contactInfo).map((key, value) => {
            const displayName = keyToProperCase(key)
            return (
                <ContactFormInput key={value} name={key} displayName={displayName}/>
            )
        })
    }

    const displayDeliveryInfo = () => {
        if (store.delivery.type === "delivery") {
            return Object.keys(store.deliveryInfo).map((key, value) => {
                const displayName = keyToProperCase(key)
                return (
                    <DeliveryInformation key={value} name={key} displayName={displayName}/>
                )
            })
        }
    }

    return (
        <section>
            {displayContactInfo()}
            {displayDeliveryInfo()}
        </section>
    )
}
