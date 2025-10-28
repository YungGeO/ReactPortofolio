
import styles from "./App.module.css";
import { Navbar } from "./componets/NavBar/NavBar";
import { Avatar } from "./componets/Avatar/Avatar";
import { About } from "./componets/About/About";
function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Avatar />
      <About />
    </div>
  )
}

export default App
