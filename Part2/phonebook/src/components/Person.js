const Person = ({personToShow}) =>{
    return (
        <ul>
        {personToShow.map(person => 
          <li key={person.id}> {person.name} {person.number}</li>
          )}
      </ul>
    )
}

export default Person