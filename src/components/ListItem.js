const ListItem = (props) => {



    return <>

        <li>{props.name}</li>
        <button onClick={() => props.onDelete(props.idBuddy)}>Eliminar</button>

    </>
}

export default ListItem;