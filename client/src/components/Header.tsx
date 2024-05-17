import logo from '../assets/logo.png'


function Header(this: any) {
    return (
        <header className="bg-white font-poppins sticky top-0">
            <nav className="flex justify-between items-center w-[92%] mx-auto">
                <div>
                    <img className="w-16 cursor-pointer" src={logo}/>
                </div>
                <div
                    className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li>
                            <a className="hover:text-gray-500" href="#">Home</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Brands</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Models</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">About us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
        ;
}

export default Header;