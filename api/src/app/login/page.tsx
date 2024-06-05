import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {Label} from "@/components/ui/label";

export default function Component() {
    return (
        <main className="flex h-screen w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
            <div className="w-full max-w-md space-y-4">
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
                        <CardDescription>Enter your email and password to access your account.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="email@example.com" required type="email" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    className="text-sm font-medium underline underline-offset-4 hover:text-gray-900 dark:hover:text-gray-50"
                                    href="/register"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <Input id="password" required type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link href="http://localhost:8080">
                            <Button className="w-full" type="submit">
                                Sign in
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                    Don't have an account?
                    <Link
                        className="font-medium underline underline-offset-4 hover:text-gray-900 dark:hover:text-gray-50"
                        href="/register"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </main>
    )
}