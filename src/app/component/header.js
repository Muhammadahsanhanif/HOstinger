import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white text-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Language Selector */}
        <div className="flex items-center space-x-4">
          <Image src="/download.svg" alt="HOSTINGERS" width={150} height={38} priority />
          <div className="flex items-center space-x-1">
            <Image src="/public.avif" width={30} height={30} alt="hoater" />
            <span className="text-sm font-medium">English</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-[#3d226d]">
          {/* WordPress Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-900 flex items-center">
              WordPress ▼
            </button>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 w-40 rounded-md border">
              <ul className="flex flex-col text-sm p-2">
                <Link href="#" className="p-2 hover:bg-gray-100 rounded-md">Themes</Link>
                <Link href="#" className="p-2 hover:bg-gray-100 rounded-md">Plugins</Link>
                <Link href="#" className="p-2 hover:bg-gray-100 rounded-md">Support</Link>
              </ul>
            </div>
          </div>

          {/* Hosting Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-900 flex items-center">
              Hosting ▼
            </button>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 w-40 rounded-md border">
              <ul className="flex flex-col text-sm p-2">
                <Link href="#" className="p-2 hover:bg-gray-100 rounded-md">Shared Hosting</Link>
                <Link href="#" className="p-2 hover:bg-gray-100 rounded-md">VPS Hosting</Link>
                <Link href="#" className="p-2 hover:bg-gray-100 rounded-md">Cloud Hosting</Link>
              </ul>
            </div>
          </div>

          <Link href="#">Pro</Link>
          <Link href="#">Domains</Link>
          <Link href="#">Website Builder</Link>
        </nav>

        {/* Login Button - Desktop */}
        <button className="hidden md:block border border-gray-700 px-4 py-2 rounded-md hover:bg-gray-100">
          Log in
        </button>

        {/* Mobile Menu - Checkbox Hack */}
        <div className="md:hidden">
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          <label htmlFor="menu-toggle" className="cursor-pointer">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4 6h16M4 12h16m-16 6h16" />
            </svg>
          </label>

          {/* Mobile Dropdown Menu */}
          <nav className="absolute left-0 top-16 w-full bg-white border-t shadow-md hidden peer-checked:block">
            <ul className="flex flex-col items-center space-y-4 p-4 text-[#3d226d]">
              {/* Mobile Dropdowns */}
              <details className="w-full text-center">
                <summary className="p-2 cursor-pointer hover:bg-gray-100 rounded-md">WordPress ▼</summary>
                <ul className="text-sm space-y-2">
                  <Link href="#" className="block hover:text-gray-900">Themes</Link>
                  <Link href="#" className="block hover:text-gray-900">Plugins</Link>
                  <Link href="#" className="block hover:text-gray-900">Support</Link>
                </ul>
              </details>

              <details className="w-full text-center">
                <summary className="p-2 cursor-pointer hover:bg-gray-100 rounded-md">Hosting ▼</summary>
                <ul className="text-sm space-y-2">
                  <Link href="#" className="block hover:text-gray-900">Shared Hosting</Link>
                  <Link href="#" className="block hover:text-gray-900">VPS Hosting</Link>
                  <Link href="#" className="block hover:text-gray-900">Cloud Hosting</Link>
                </ul>
              </details>

              <Link href="#">Pro</Link>
              <Link href="#">Domains</Link>
              <Link href="#">Website Builder</Link>
              <button className="border border-gray-700 px-4 py-2 rounded-md hover:bg-gray-100">
                Log in
              </button>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
