import style from './About.module.css'

const About = () => {
    return (
        <div className={style.container}>
            <h1>Acerca de mi</h1>
            <h2>Medina Gonzalo</h2>
            <p>Soy estudiante de Henry y esta es mi primer proyecyo.
                En él podrán acceder a tarjetas de personajes de la serie animada de
                'Rick and Morty'. Cuenta con mas de 800 perosnajes con su respectiva información
                mas precisamente 826 personajes. Podras buscarlos mediante un numero de ID desde
                el buscador en la Home.
            </p>
        </div>
    )
}

export default About;