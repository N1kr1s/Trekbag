import Footer from './Footer'
import BackgroundHeading from './BackgroundHeading'
import Header from './Header'
import ItemList from './ItemList'
import Sidebar from './Sidebar'
// import ItemContextProvider from '../contexts/ItemContextProvider'

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        {/* <ItemContextProvider> */}
        <Header />
        <ItemList />
        <Sidebar />
        {/* </ItemContextProvider> */}
      </main>
      <Footer />
    </>
  )
}

export default App
