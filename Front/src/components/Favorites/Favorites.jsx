import { connect } from 'react-redux'
import Card from '../Card/Card'
import style from './Favorites.module.css'
import { useDispatch } from 'react-redux'
import * as actions from '../../redux/actions'


function Favorites(props) {

    const dispatch  = useDispatch();
    

    const handleOrder = (event) => {
        dispatch(actions.order(event.target.value))
    }
    const handleFilter = (event) => {
        dispatch(actions.filterByGender(event.target.value))
    }
    
    return (
        <div>
            <div className={style.container}>
                <h2 className={style.title}>My favorites</h2>
            </div>
            <div>
                <select name="order" onChange={handleOrder}>
                    <option value="order" disabled="disabled" selected>Order By...</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select name="gender" onChange={handleFilter}>
                    <option value="filter" disabled="disabled" selected>Filter By...</option>
                    <option value="Todos">Todos</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            <div className={style.favorites}>
                {
                    props.myFavorites.map(element => {
                        return <Card
                            key={element.id}
                            name={element.name}
                            species={element.species}
                            gender={element.gender}
                            image={element.image}
                            id={element.id}
                        />
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);