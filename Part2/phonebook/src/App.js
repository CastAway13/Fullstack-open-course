import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  const addPerson = (event) =>{
    event.preventDefault()
    var nameCheck = persons.find(person => person.name === newName)
    if(typeof nameCheck === 'undefined'){
      const nameObject ={
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
    else{
      window.alert(`${newName} is already added to phonebook`);
    }
  }

  const handleNameChange = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) =>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchname = (event) =>{
    console.log(event.target.value)
    setSearchName(event.target.value)
  }

  const personToShow = persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} handleSearchname={handleSearchname}></Filter>
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} 
               newNumber={newNumber} handleNumberChange={handleNumberChange}></PersonForm>
      <h2>Numbers</h2>
      <Person personToShow={personToShow}></Person>
    </div>
  )
}

export default App