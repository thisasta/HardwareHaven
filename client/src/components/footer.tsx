/**
 * v0 by Vercel.
 * @see https://v0.dev/t/x6svvBvp5UF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-gray-900 p-6 md:py-12 w-full text-white ">
            <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
                <div className="grid gap-1">
                    <Link className="flex items-center gap-2 font-semibold" href="#">
                        <span>HardwareHaven</span>
                    </Link>
                    <p className="text-gray-400">Your one-stop shop for all your PC hardware needs.</p>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Products</h3>
                    <Link className="text-gray-300 hover:text-white" href="#">
                        Components
                    </Link>
                    <Link className="text-gray-300 hover:text-white" href="#">
                        Peripherals
                    </Link>
                    <Link className="text-gray-300 hover:text-white" href="#">
                        Accessories
                    </Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Company</h3>
                    <Link className="text-gray-300 hover:text-white" href="#">
                        About
                    </Link>
                    <Link className="text-gray-300 hover:text-white" href="#">
                        Contact
                    </Link>
                    <Link className="text-gray-300 hover:text-white" href="#">
                        Careers
                    </Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Support</h3>
                    <Link className="text-gray-300 hover:text-white" href="#">
                        FAQs
                    </Link>
                    <Link className="text-gray-300 hover:text-white" href="#">
                        Returns
                    </Link>
                    <Link className="text-gray-300 hover:text-white" href="#">
                        Warranty
                    </Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Legal</h3>
                    <Link className="text-gray-300 hover:text-white" href="#">
                        Privacy Policy
                    </Link>
                    <Link className="text-gray-300 hover:text-white" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-gray-300 hover:text-white" href="#">
                        Cookie Policy
                    </Link>
                </div>
            </div>
            <div className="container max-w-7xl mt-8 text-sm text-gray-400">© 2024 HardwareHaven. All rights reserved.</div>
        </footer>
    )
}