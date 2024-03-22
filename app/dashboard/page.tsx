import React from 'react';
import { fetchLatestInvoices, fetchRevenue } from '../lib/data';
import { lusitana } from '../ui/fonts';
import RevenueChart from '../ui/dashboard/revenue-chart';
import LatestInvoices from '../ui/dashboard/latest-invoices';

export default async function Page() {

    const res = fetch('https://fakestoreapi.com/products')
            .then(res=>res.json());
            //.then(json=>console.log(json));
    //console.log(res);

    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard - res[0].id;
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <RevenueChart revenue={revenue} />
                <LatestInvoices latestInvoices={latestInvoices} />
            </div>
        </main>
    );
}
