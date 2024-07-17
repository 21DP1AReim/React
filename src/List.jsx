function List(){

    const fruits = [
        {id: 1, name:"Apple", calories: 95},
        {id: 2, name:"Orange", calories:45},
        {id:3, name:"Banana", calories:105}];

    fruits.sort((a,b) => a.name.localeCompare(b.name));
    fruits.sort((a,b) => a.calories - b.calories) 

    const listItems = fruits.map(fruit => 
                            <li key={fruit.id}>
                                {fruit.name}: &nbsp;
                                <b>{fruit.calories}</b>
                            </li>);
    
    return(<ol>{listItems}</ol>);
}

export default List