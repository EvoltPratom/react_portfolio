import styles from "../styles/Navbar.module.css";

type NavbarProps = {
    children: React.ReactNode;
  }

export default function Navbar(props: NavbarProps) {
  return (
    <nav className={styles.nav}>
        {props.children}
    </nav>
  );
}

