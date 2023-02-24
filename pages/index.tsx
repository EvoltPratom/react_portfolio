import Link from "next/link";
import Navbar from "../components/Navbar";


export default function Home() {
  const bg = {
    backgroundImage:
      "url(https://images.pexels.com/photos/4512439/pexels-photo-4512439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: '100vh',
    backgroundPosition: "center",
  };
  return (
    <>
    <div style={bg}>
      <Navbar>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#skills">Skills</Link>
      </Navbar>
      SOmething else
    </div>
    </>
  )
}