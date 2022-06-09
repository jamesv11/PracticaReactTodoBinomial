const ListItem = (props) => {



    return <>

        <li>{props.name}</li>
        <button onClick={props.onDelete}>Eliminar</button>

    </>
}

export default ListItem;