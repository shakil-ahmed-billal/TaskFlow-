import { SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from "next/link";

const Header = async () => {

  const { userId } = await auth()

  return (
    <div className=" bg-[#f9f9f9]">
      <header className="w-11/12 md:w-10/12 mx-auto py-4 flex items-center justify-between ">
        <div>
          <h1 className="text-lg font-medium">
            <span role="img" aria-label="wave">
              👋
            </span>
            {`Welcome, ${"name"} Welcome to Task_Flow!`}
          </h1>
        </div>
        <div className="h-[50px] flex items-center gap-[10.4rem]">
          <div className="flex items-center">
            {!userId ? <div className="text-sm w-16 justify-center flex items-center">
              <SignInButton />
            </div>
              : <div className="app">
                <SignedOut>
                </SignedOut>
                <UserButton />
              </div>}
          </div>

          <div className="flex gap-4 items-center">
            <Link
              href=""
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="h-[40px] w-[40px] text-purple-500 rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]"
            >
              github
            </Link>
            <Link
              href=""
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="h-[40px] w-[40px] text-purple-500 rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]"
            >
              moon
            </Link>
            <Link
              href=""
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="h-[40px] w-[40px] text-purple-500 rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]"
            >
              Profile
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header