import { useState } from "react"
import Layout from "../../components/layout"


export default function EncenderAPagar() {
    const [luz, setLuz] = useState(false)

    function handleClick() {
        //setLuz(!luz)
        setLuz(valorPrevio => !valorPrevio)
    }

    return (
        <Layout>
            <h1>Encender o Apagar la luz</h1>
            <p>La luz está: {
                luz ?
                    <strong>Encedida 💡
                        <img
                            src="https://images.emojiterra.com/google/noto-emoji/v2.034/128px/1f4a1.png"
                            alt="Google (Android 12L)"
                            width="72"
                            height="72">
                        </img>
                    </strong>
                    :
                    "Apagada"}
            </p>
            <button onClick={handleClick}>Encender/Apagar</button>
        </Layout>
    )
}


