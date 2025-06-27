import Link from "next/link";

export default function Home(){
  return (
    <>
     <div className="text-xl w-screen h-screen flex items-center justify-center">This is a Todo app <br /> <div className="text-md bg-white text-blue-400 flex items-center justify-center  "> <Link href="/signin">Sign In</Link> <br />
     <Link href="/signup">Sign Up</Link>
     </div></div> <br />
     

    </>
  )
}