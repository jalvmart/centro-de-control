import { useState } from "react";
import { Courses } from "../lib/courses";
import { skills_part1, skills_part2 } from "../components/data/skills.Data";
import { Tools } from "../lib/toolsDev";
import Link from "next/link";
import Date from '../components/date';
import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}


const Header = ({ title }) => <h1>{title ? title : "Default title"}</h1>;



export default function HomePage({allPostsData}) {
    const [likes, setLikes] = useState(0)

    function handleClick() {
        setLikes(likes + 1);
    }
    return (
        <Layout home>
            <div>
                Ejercicios {' '}
                <ul>
                    <li>
                        <Link href="/">
                            <a>Inicio</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/practice/ej000">
                            <a>Tabla de Multiplicar Básico</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/practice/ej001">
                            <a>Tabla de Multiplicar con Formulario y useState</a>
                        </Link>
                    </li>                    
                    <li>
                        <Link href="/practice/ej003-encender-apagar">
                            <a>Encender / Apagar</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <Header title="Aprende a Programar con JavaScript, React y Next.js" />
            <section className={utilStyles.headingMd}>
                <h2>Ruta de Aprendizaje 2022-2023 del equipo Code-R11</h2>
                <h3>Básicos</h3>
                <ul>
                    {skills_part1.map((x, y) => <li key={y}>{x}</li>)}
                </ul>
                <h3>Complementos</h3>
                <ul>
                    {skills_part2.map((x, y) => <li key={y}>{x}</li>)}
                </ul>

                <button onClick={handleClick}>Me gusta {likes}</button>
            </section>


            <h2>Herramientas</h2>
            <ul><Tools /></ul>
            <h2>Cursos y Material de estudio</h2>
            <ul><Courses /></ul>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>
                          <a>{title}</a>
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                          <Date dateString={date} />
                        </small>
                      </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}


