"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from "./MenuOverlay"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false)
  const closeNavbar = () => setNavbarOpen(false)

  const navLinks = [
    { name: "Destinations", href: "/destinations" },
    { name: "Activities", href: "/activities" },
    { name: "Accommodation", href: "/accommodation" },
    { name: "Visa Information", href: "/visa-information" },
  ]

  return (
    <nav className="mx-auto border sticky left-0 right-0 top-0 z-30 bg-white bg-opacity-100">
      <div className="flex px-4 py-2 md:py-4 md:px-6 items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Visit China logo"
            width={60}
            height={60}
          />
        </Link>

        <ul className="md:flex hidden gap-12">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {navbarOpen ? (
        <MenuOverlay navLinks={navLinks} closeNavbar={closeNavbar} />
      ) : null}
    </nav>
  )
}

export default Navbar
