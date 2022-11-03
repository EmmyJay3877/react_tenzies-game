import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#59e391" : "#FFFFFF"
  }
  function checkProps() {

    if (props.value === 1){
      return <FontAwesomeIcon icon={[`fas`, `fa-dice-one`]} size={'3x'} />
    } else if (props.value === 2){
      return <FontAwesomeIcon icon={[`fas`, `fa-dice-two`]} size={'3x'}/>
    } else if (props.value === 3){
      return <FontAwesomeIcon icon={[`fas`, `fa-dice-three`]} size={'3x'}/>
    } else if (props.value === 4){
      return <FontAwesomeIcon icon={[`fas`, `fa-dice-four`]} size={'3x'}/>
    } else if (props.value === 5){
      return <FontAwesomeIcon icon={[`fas`, `fa-dice-five`]} size={'3x'}/>
    } else if (props.value === 6){
      return <FontAwesomeIcon icon={[`fas`, `fa-dice-six`]} size={'3x'}/>
    }

  }

  const checkit = checkProps(props.value)

  return (
        <div className='die-face' style={styles} onClick={props.holdDice}>
            <>{checkit}</>
        </div>
  )
}


export default Die