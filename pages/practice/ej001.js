import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/layout"


const tablas = [1, 12]
const exponentes = [1, 12]


function rango(arr) {
    const newRango = [];
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
        newRango.push(i)
    }
    return newRango;
}

export default function ej001() {
    const [desde, setDesde] = useState(1)
    const [hasta, setHasta] = useState(10)

    function crearTablas() {
        setDesde(Number(desde) + 1)
        setHasta(Number(hasta) + 1)
    }

    return (
        <Layout>
            <Head>
                <title>Tabla de Multiplicar</title>
            </Head>
            <div>
                <h1>Práctica: Ej001 Tabla de Multiplicar</h1>
                <div className="create">
                    <form id="formTabla">
                        <label for="desde">Desde</label>
                        <input
                            type="number"
                            value={desde}
                            onChange={(e) => setDesde(e.target.value)}
                        />
                        <label for="hasta">Hasta</label>
                        <input
                            type="number"
                            value={hasta}
                            onChange={(e) => setHasta(e.target.value)}
                        />
                    </form>
                    <button onClick={crearTablas}>Calcular {desde} | {hasta}</button>

                </div>
                {rango([Number(desde), Number(hasta)]).map((n1, x) =>
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

