import Link from "next/link";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#skills">Skills</Link>
      </Navbar>
    </>
  )
}