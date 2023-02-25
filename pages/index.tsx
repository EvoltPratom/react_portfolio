import Link from "next/link";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";


export default function Home() {
  const bg = {
    backgroundImage:
      "url(https://images.pexels.com/photos/4512439/pexels-photo-4512439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    backgroundPosition: "center",
  };
  return (
    <>
      <div style={{ backgroundColor: "black", height: "100vh" }}>
        <Navbar>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#skills">Skills</Link>
        </Navbar>

        <div className={styles.main_body}>
          <div className={styles.introbox}>
            <img
              className="m-2"
              src="https://bishantadhikari.vercel.app/assets/img/profile.jpg"
              alt="My photo"
              width="200px"
            />
            <div className={styles.introDesc}>
              <div className="head1">
                Bishant <div className="text-primary">
                Adhikari
                </div>
                </div><br />
              <h2>MANAMAIJU - 5 KATHMANDU NEPAL <a>BISHANTAD@GMAIL.COM</a></h2><br />
    
              Junior developer with experience in Nextjs and Firebase, as well
              as skills in Python, JavaScript, and Database Management.
              Proficient in computer science fundamentals and core mathematical
              concepts such as Linear Algebra, Statistics, and Probabilities.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
