import style from './About.module.css'
import htmlImg from '../../assets/html.png'
import cssImg from '../../assets/css.svg'
import javascriptImg from '../../assets/javascript.png'
import reactImg from '../../assets/react.png'
import redux from '../../assets/redux.png'

const About = () => {

    const techSkills = [{ tech: 'Html', image: htmlImg }, { tech: 'Css', image: cssImg }, { tech: 'JavaScript', image: javascriptImg }, { tech: 'React', image: reactImg }, { tech: 'Redux', image: redux }]

    return (
        <div className={style.container}>
            <h1>Acerca de mi</h1>
            <h2>Medina Gonzalo</h2>
            <p>Soy estudiante de Henry y esta es mi primer proyecto con React.
                En él podrán acceder a tarjetas de personajes de la serie animada de
                'Rick and Morty'. Cuenta con mas de 800 perosnajes con su respectiva información
                mas precisamente 826 personajes. Podras buscarlos mediante un numero de desde
                el buscador en la Home y ver informacion adicional de cada personaje.
            </p>
            <p>En este proyacto se usaron estas tecnologias:</p>
            <ul className={style.unorderedList}>
                {
                    techSkills.map(skill => (
                        <li className={style.listItem} key={skill}>{skill.tech}<img src={skill.image} alt={skill.tech} /></li>
                    ))
                }
            </ul>

        </div>
    )
}

export default About;