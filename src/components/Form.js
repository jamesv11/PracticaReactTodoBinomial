import List from "./List";
import {useState} from "react";

const Form = () => {

    const [buddy, setBuddy] = useState("");
    const [buddies, setBuddies] = useState([]);

    const handleName = (e) => {
        setBuddy(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setBuddy("");
        setBuddies([...buddies, buddy]);
    }

    const onDelete = () => {

    }

    return <>

        <form onSubmit={onSubmit} >
            <label for="name">Nombre</label>
            <input type="text" name="nombre" onChange={(e) => handleName(e)} value={buddy}/>
            <br />
            <button type="submit">Agregar</button>

            <p>El integrante ha agregar es: <strong>{buddy}</strong></p>
        </form>

        <List buddies={buddies} onDelete={onDelete}/>
    </>

}

export default Form;