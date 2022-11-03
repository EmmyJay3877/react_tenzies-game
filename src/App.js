import React from 'react'
import Die from './components/Die'
import swal from 'sweetalert';


var start = Date.now();
let rolls = 0;
const App = () => {

  const [dice, setDice] = React.useState(allNewDice())

  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
      const allHeld = dice.every(die => die.isHeld)
      const firstValue = dice[0].value
      const allSameValue = dice.every(die => die.value === firstValue)

      if (allHeld && allSameValue) {
        setTenzies(true)
      }

  }, [dice])
  
  function secondsTaken(){
    if(tenzies===true){
      let timeTaken = Date.now() - start
      let overAll = timeTaken / 1000
      return overAll
    }
  }

  function uniqueId() {
    return Math.random().toString(36).substr(2, 9)
  }

  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6), 
      isHeld: false, 
      id: uniqueId()
    }
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice())
    }
    return newDice
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(oldDie => {
      return oldDie.id===id ? 
            {...oldDie, isHeld: !oldDie.isHeld} : 
            oldDie
    }))
  }

  function rollDice() {
    rolls++
    if (!tenzies) {
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ?
                die :
                generateNewDice()
      }))
    } else {
      setTenzies(false)
      setDice(allNewDice())
    }
  }
  function message(){
    if(tenzies===true){
      swal({
        title: "Good job",
        text: `Your overall time is ${secondsTaken()}seconds 
        and you made ${rolls} dice rolls, Congrats.`,
        icon: "success"
      })
    }
  }

  const congratMessage = message()

  const diceElements = dice.map(die => (
  <Die key={die.id} 
      value={die.value} 
      isHeld={die.isHeld} 
      holdDice={() => holdDice(die.id)}  
      />
  ))
  
    return (
      <main>
        <h1 className='title'>Tenzies</h1>
        <p className='instructions'>Roll until all dice are the same. Click each die 
          to freeze it at its current value between rolls.</p>
        <div className='dice-container'>
          {diceElements}
          {congratMessage}
        </div>
        <button id='btn' className='roll-dice' 
          onClick={rollDice}>
          {tenzies ? "New Game" : "Roll"}
        </button>
      </main>
    )
}

export default App