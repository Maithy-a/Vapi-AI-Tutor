import { PricingTable } from "@clerk/nextjs";

export default function Subscription() {
    return (
        <main>
            <h1>Subscription Page</h1>
            <div>
                <PricingTable />
            </div>
        </main>
    )
}