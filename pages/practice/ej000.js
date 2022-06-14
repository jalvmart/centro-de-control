import Head from "next/head";
import Layout from "../../components/layout"


const tablas = [1, 12]
const exponentes = [1, 10]

function rango(arr){
    const newRango = [];
    for (let i=arr[0]; i<=arr[arr.length-1]; i++) {
        newRango.push(i)
    }
    return newRango;
}

export default function ej000() {    
    return (
        <Layout>
            <Head>
                <title>Tabla de Multiplicar</title>
            </Head>
            <div>
                                
                <h1>Práctica: Ej001 Tabla de Multiplicar</h1>
                
                {rango(tablas).map((n1, x) =>
                    <div>
                        <h2 key={x}>Tabla del {n1}</h2>
                        <ul>
                            {rango(exponentes).map((n2, y) =>
                                <li key={y}>{n1} x {n2} = {n1 * n2}</li>
                            )}
                        </ul>
                    </div>
                )}
                
            </div>
        </Layout>
    )
}

