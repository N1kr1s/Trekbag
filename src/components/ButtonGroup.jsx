import Button from './Button'
import { secondaryButtons } from '../lib/constants'

function ButtonGroup() {
  return (
    <section className='button-group'>
      {secondaryButtons.map((phrase) => (
        <Button key={phrase} type='secondary'>
          {phrase}
        </Button>
      ))}
    </section>
  )
}

export default ButtonGroup
