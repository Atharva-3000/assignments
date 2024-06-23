import Link from "next/link"

export const Navbar = () =>{
    return(
        <div className="flex justify-center gap-20 text-2xl my-10">
            <Link href="/">Home</Link>
            <Link href="/interactive-page">Client Page</Link>
            <Link href="/static-page">Static Page</Link>
        </div>
    )
}