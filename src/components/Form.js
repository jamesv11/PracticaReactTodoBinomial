import List from "./List";
import { useState } from "react";

const Form = () => {

    const [buddy, setBuddy] = useState({ name: "", id: 0 });
    const [buddies, setBuddies] = useState([]);

    const handleName = (e) => {
        setBuddy({ ...buddy, name: e.target.value });
    }

    const cleanInput = () => {
        setBuddy({ name: "", id: buddy.id + 1 });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setBuddies([...buddies, { ...buddy}]);
        cleanInput();
    }

    const onDelete = (buddyId) => {
        setBuddies(buddies.filter((buddy) => buddy.id !== buddyId));
    }

    return <>

        <form onSubmit={onSubmit} >
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" onChange={(e) => handleName(e)} value={buddy.name} />
            <br />
            <button type="submit">Agregar</button>

            <p>El integrante ha agregar es: <strong>{JSON.stringify(buddy)}</strong></p>
        </form>

        <List buddies={buddies} onDelete={onDelete} />
    </>

}

export default Form;