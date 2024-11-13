import Button from './Button'

function ButtonGroup({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  const secondaryButtons = [
    { text: 'Mark all as complete', onClick: handleMarkAllAsComplete },
    { text: 'Mark all as incomplete', onClick: handleMarkAllAsIncomplete },
    { text: 'Reset to initial', onClick: handleResetToInitial },
    { text: 'Remove all items', onClick: handleRemoveAllItems },
  ]

  return (
    <section className='button-group'>
      {secondaryButtons.map(({ text, onClick }) => (
        <Button key={text} onClick={onClick}>
          {text}
        </Button>
      ))}
    </section>
  )
}

export default ButtonGroup
