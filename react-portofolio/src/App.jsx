
import styles from "./App.module.css";
import { Navbar } from "./componets/NavBar/NavBar";
import { Avatar } from "./componets/Avatar/Avatar";
function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Avatar />
    </div>
  )
}

export default App
