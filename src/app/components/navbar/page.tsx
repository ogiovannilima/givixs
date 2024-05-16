import Link from "next/link";
import { BsBalloonFill } from "react-icons/bs";

export default function NavBar() {
    return (
        <div className="bg-black fixed z-50 top-0 left-0 p-4 w-full shadow-md flex justify-center">
            <div className="flex items-center justify-between w-1/2">
                <span className="text-white text-base tracking-widest">
                    <Link href="/">
                        WORK
                    </Link>
                </span>
                <span>
                    <Link href="/">
                        <BsBalloonFill className="text-red-700 text-3xl" />
                    </Link>
                </span>
                <span className="text-white text-base tracking-widest">
                    <Link href="/contact">
                        CONTACT
                    </Link>
                </span>
            </div>
        </div>
    )
}