import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className="logo">
            <img src="/imagees/av.svg" alt="Ashish logo"/>
        </div>
      
      <ul>

        <li>Home</li>
        <li>About</li>
        <li>contact</li>

      </ul>
    </nav>
  )
}

export default Navigation
