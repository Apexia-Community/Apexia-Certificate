"use client"

import Link from "next/link"
import * as React from "react"
import { useTheme } from "next-themes"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { UserButton, useUser } from "@clerk/nextjs"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
    const { user } = useUser()
    const { setTheme } = useTheme()

    return (
        <>
            <div className="w-full border-b rounded-lg mb-5 backdrop-blur-xl top-0 sticky p-1">
                <div className="max-w-[90%] w-full px-3 xl:p-0 my-5 mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-5">
                        <Link href="../" className="cursor-pointer">
                            <Label className="text-2xl font-bold pointer-events-none max-sm:text-sm">
                                Apexia Certificate
                            </Label>
                        </Link>
                    </div>
                    <div className="flex items-center gap-5">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {user ? (
                            <UserButton afterSignOutUrl="/" />
                        ) : (
                            <Button variant="secondary">
                                <Link
                                    href={`/sign-in`}
                                >
                                    <Label className="gap-2 flex font-medium text-md items-center cursor-pointer">
                                        Login Now
                                    </Label>
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
