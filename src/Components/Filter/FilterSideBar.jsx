import React ,{useContext} from 'react'
import './FilterSideBar.css'
import {MyContext} from '../../App.js'
const FilterSideBar = () => {
    const {myPokemons,setPokemons}=useContext(MyContext)
    const sortByHp=()=>{
        setPokemons([...myPokemons.sort((a,b)=>a.base.HP-b.base.HP)])
    }
    const sortByName = () => {
        setPokemons([...myPokemons.sort((a,b)=>a.name<b.name?-1:1)])

    }
    const sortById = () => {
        setPokemons([...myPokemons.sort((a,b)=>a.id-b.id)])

    }
    const sortByAttack = () => {
        setPokemons([...myPokemons.sort((a,b)=>a.base.Attack-b.base.Attack)])

    }
    const sortBySpeed = () => {
        setPokemons([...myPokemons.sort((a,b)=>a.base.Speed-b.base.Speed)])

    }
    return (
        <div className = "side-bar">
            <form className = "side-bar-form">
                <p>Sort: </p>
                <label><input className="filter-side-bar-input"  onClick={sortById} type="radio" name="sort"/>None</label><hr/>
                <label><input className="filter-side-bar-input" onClick={sortByName} type="radio" name="sort"/>Name</label><hr/>
                <label><input className="filter-side-bar-input" onClick={sortByHp} type="radio" name="sort" />Hp</label><hr/>
                <label><input className="filter-side-bar-input" onClick={sortByAttack} type="radio" name="sort" />Attack</label><hr/>
                <label><input className="filter-side-bar-input" onClick={sortBySpeed} type="radio" name="sort" />Speed</label>

            </form>
        </div>
    )
}

export default FilterSideBar