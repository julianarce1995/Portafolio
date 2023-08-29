import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex bg-gray-800 pb-4 z-10">
      <div className="w-full mx-10 py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h5 className="text-3xl text-white font- sans font-bold text-gray-500">
            Julian David Arce Araujo
          </h5>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <Link
                href="/harry_potter"
                className="mr-4 hover:underline md:mr-6 "
              >
                Harry Potter API
              </Link>
            </li>
            <li>
              <a href="/" className="hidden hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 w-full" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2023{" "}
          <Link href="/" className="hover:underline">
            julianarceportafolio
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
