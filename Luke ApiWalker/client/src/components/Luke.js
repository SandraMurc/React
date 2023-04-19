import { useState } from "react";


const Luke = () => {
    const [ input , setInput ] = useState ("");
    const [ number, setNumber ] = useState ([]);
    const [ buscar, setBuscar ] = useState ("");


    const handleSubmit = function(ev) {
        ev.preventDefault()
        const nuevaBusqueda = { input, number, buscar };
        console.log("Welcome", nuevaBusqueda);
    }

/*     const swapiBuscar= ( ) => {
        fetch("http://swapi.dev/api")
        .then(response => response.json())
        .then(response => setBuscar(response.results))
        return 
    }

    const swapiNumber = ( ) => {
        fetch("http://swapi.dev/api")
        .then(response => response.json())
        .then(response => setNumber(response.results))
        return 
    }

    const swapiInput = ( ) => {
        fetch("http://swapi.dev/api")
        .then(response => response.json())
        .then(response => setInput(response.results))
        return 
    } */

    /* useEffect(()=>{
        fetch("http://swapi.dev/api/people")
            .then(response => response.json())
            .then(response => setPeople(response.results))
    }, []); */
    /*  submitData = () => {

    } */
    return(
        <div>
            <form onSubmit= {handleSubmit} >
                <h3>Search of: </h3> 
                <select name="select" id="select" onSelect={(ev) => setInput(ev.target.value)} /* value={ input } */ required >
                    <option value="people">People</option>
                    <option value="film">Film</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </select>
                Id &nbsp;
                <input type="number" onSelect={(ev) => setNumber(ev.target.value)} /* value={ number } */required/>
                &nbsp;
                <button type="submit"  onClick={(ev) => setBuscar(ev.target.value)} /* value= {buscar} */ > Buscar </button>
            </form>
            
            <form>
                
            </form>
        </div>
    )
}

export default Luke;