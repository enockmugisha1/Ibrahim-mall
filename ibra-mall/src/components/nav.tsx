"use client"
import Link from "next/link";
export default function Nav() {
  return(
  <nav className="bg-gray-800 text-white p-4">
<div className="container flex justify-between items-center">
  <h1>IbraMall</h1>
  <ul>
    <li className="inline-block mx-2"> <Link href="/"> Home </Link></li>
    <li className="inline-block mx-2"> <Link href="/About"> About </Link> </li>
    <li className="inline-block mx-2">Contact</li>
    
  </ul>
</div>
</nav>
);
}