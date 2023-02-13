import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./Detail.module.css"

const Detail = () => {
    const [character, setCharacter] = useState({});
    const { detailId } = useParams();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
                return err;
            });
        return setCharacter({});
    }, [detailId]);

    const navigate = useNavigate()
    const backToHome = () => navigate("/home")

    return (
        <div className={style.superContainer}>
            <div className={style.container}>
                <div className={style.info}>
                    <button className={style.backButton} onClick={backToHome} >BACK</button>
                    <h1>Name: {character.name}</h1>
                    <span>Status: {character.status}</span><br />
                    <span>Specie: {character.species}</span><br />
                    <span>Gender: {character.gender}</span><br />
                </div>
                <div className={style.image}>
                    <img className={style.img} src={character.image} alt={character.name} width="300px" />
                </div>
            </div>

        </div>

    )

}




export default Detail;