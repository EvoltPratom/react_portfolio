import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <button>Home</button>
      <button>About</button>
      <button>Projects</button>
      <button>Contact</button>
    </nav>
  );
}
