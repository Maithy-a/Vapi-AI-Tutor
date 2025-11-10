import Image from "next/image";
import Link from "next/link";
import NavItems from "@/components/NavItems";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <nav className="navbar" >
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4 py-3">
                <Link href="/">
                    <div className="flex items-center gap-2 5 cursor-pointer">
                        <Image
                            src="/icons/logo.svg"
                            alt="Logo"
                            width={40}
                            height={40}
                        />
                    </div>
                </Link>
                <NavItems />
                <div className="flex items-center gap-8">
                    <Button size="lg" className="px-6" >
                        Sign In
                    </Button>
                </div>
            </div>
        </nav>
    );
}