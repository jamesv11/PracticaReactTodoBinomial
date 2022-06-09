import ListItem from "./ListItem";

const List = (props) => {
    return <>
        <h3>Lista</h3>
        <ul>
            {
                props.buddies.map((element, index) => (
                    <ListItem key={index} name={element} onDelete={props.onDelete}/>
                ))
            }
        </ul>
    </>
}

export default List;