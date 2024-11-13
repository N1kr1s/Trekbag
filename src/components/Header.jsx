import Counter from './Counter'
import Logo from './Logo'

function Header({ handleItemsPackedCount }) {
  return (
    <header>
      <Logo />
      <Counter handleItemsPackedCount={handleItemsPackedCount} />
    </header>
  )
}

export default Header
