/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yS7UMgCLgWs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import pc from "../../public/pc.png"
import Image from "next/image"
import FetchTop from "../components/fetchTop"

export default function page() {
    return (
        <>
        <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <Image
                            alt="Hero Product"
                            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                            height="550"
                            src={pc}
                            width="550"
                        />
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Upgrade Your PC with HardwareHaven
                                </h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Find the latest PC components and accessories at HardwareHaven. Upgrade your rig with our top-quality
                                    products and fast shipping.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    href="#"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container space-y-12 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Check out our top-selling PC components and accessories.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                                <img
                                    alt="Product 1"
                                    className="aspect-square overflow-hidden rounded-xl object-cover"
                                    height="150"
                                    src="/placeholder.svg"
                                    width="150"
                                />
                                <div className="space-y-1 text-center">
                                    <h3 className="text-lg font-bold">NVIDIA RTX 3080</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">High-performance GPU</p>
                                    <div className="flex items-center justify-center gap-1 text-lg font-bold">$799</div>
                                </div>
                                <Button size="sm">Add to Cart</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                <div className="container space-y-12 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Shipping & Returns</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                We offer fast, reliable shipping and a hassle-free return policy. Learn more about our shipping and
                                return policies.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                        <div className="grid gap-1">
                            <h3 className="text-lg font-bold">Fast Shipping</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                We offer fast, reliable shipping to ensure your products arrive quickly.
                            </p>
                        </div>
                        <div className="grid gap-1">
                            <h3 className="text-lg font-bold">Free Returns</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                If you're not satisfied, you can return your purchase for a full refund.
                            </p>
                        </div>
                        <div className="grid gap-1">
                            <h3 className="text-lg font-bold">Secure Checkout</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Our checkout process is secure and encrypted to protect your information.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div>

            </div>
        </main>
        </>
    )
}