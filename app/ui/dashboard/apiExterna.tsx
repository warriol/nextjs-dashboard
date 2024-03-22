/**
 * para renderizar la ifnormaci'on debo tener definido el formato del arreglo que se obtiene de la api externa
 */
import { ApiExterna } from "@/app/lib/definitions";
import clsx from "clsx";
import { lusitana } from "../fonts";

export default async function ApiExterna({
    apiExterna,
}: {
    apiExterna: ApiExterna [];
}) {
    return (
        <div className="flex w-full flex-col md:col-span-8">
            <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
                Api Externa
            </h1>
            <div className="mt-6 flow-root">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
                            <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                                <thead className="hidden md:table-header-group">
                                    <tr>
                                        <th className="text-left py-3 px-4 md:px-6">Titulo</th>
                                        <th className="text-left py-3 px-4 md:px-6">Precio</th>
                                        <th className="text-left py-3 px-4 md:px-6">Descripcion</th>
                                        <th className="text-left py-3 px-4 md:px-6">Categoria</th>
                                    </tr>
                                </thead>
                                <tbody className="md:table-row-group">
                                    {apiExterna.map((apiExterna, i) => {
                                        return (
                                            <tr
                                                key={apiExterna.id}
                                                className={clsx('md:table-row', {
                                                    'bg-white': i % 2 === 0,
                                                    'bg-gray-50': i % 2 !== 0,
                                                })}
                                            >
                                                <td className="py-4 px-4 md:px-6">{apiExterna.title}</td>
                                                <td className="py-4 px-4 md:px-6">{apiExterna.price}</td>
                                                <td className="py-4 px-4 md:px-6">{apiExterna.description}</td>
                                                <td className="py-4 px-4 md:px-6">{apiExterna.category}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>    
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}