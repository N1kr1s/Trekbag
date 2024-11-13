function Button({ buttonType, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttonType === 'secondary' ? 'btn--secondary' : ''}`}
    >
      {children}
    </button>
  )
}

export default Button
