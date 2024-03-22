import React, { Suspense } from 'react';
// Importo los estilos de la fuente lusitana
import { lusitana } from '../ui/fonts';


/**
 * Importo la funcion fetchApiExterna que se encuentra en el archivo conectarApiExterna.ts
 * esta funcion se encarga de pedir los datos a la api externa
 * el resultado de la peticion se guarda en la variable fetchApiExterna
 */
import { fetchApiExterna } from '../lib/conectarApiExterna';
/**
 * Importo el componente ApiExterna que se encuentra en la carpeta ui/dashboard
 * en este archivo se maqueta la informacion que se obtiene de la api externa
 */
import ApiExterna from '../ui/dashboard/apiExterna';


// traigo los componentes que se encuentran en la carpeta ui/dashboard para maquetar los datos
import RevenueChart from '../ui/dashboard/revenue-chart';
import LatestInvoices from '../ui/dashboard/latest-invoices';

import { LatestInvoicesSkeleton, RevenueChartSkeleton } from '../ui/skeletons';

export default async function Page() {

    /**
     * se ejecuta el fetch de la api externa de forma asincrona y el resultado de la promesa se guarda en la variable apiExt
     * esta variable contiene lo datros que se obtivieron de la APi Externa y son enviados al componente ApiExterna para renderizar
     * la isntrucccion de renderizado es: <ApiExterna apiExterna={apiExt} />
     */
    const apiExt = await fetchApiExterna();


    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>   
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
                <ApiExterna apiExterna={apiExt} />
            </div>
        </main>
    );
}
