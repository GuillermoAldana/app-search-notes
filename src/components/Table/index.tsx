
import { INote } from "../../domain/note";

interface ITableProps {
    note: INote[];
    loading: boolean;
}

const Table: React.FC<ITableProps> = ({ note, loading }) => {

    if (loading) {
        return <h6 className="text-center py-4">Cargando...</h6>;
    }

    return (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md mt-4">
            <thead className="bg-gray-200">
                <tr>
                    <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Legajo</th>
                    <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Nombre</th>
                    <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Examen</th>
                    <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Nota</th>
                </tr>
            </thead>
            <tbody>
                {note && note.length > 0 ? (
                    note.map((item) => (
                        <tr key={item.legajo} className="border-t border-gray-200 bg-gray-50">
                            <td className="py-2 px-4 border-b">{item.legajo}</td>
                            <td className="py-2 px-4 border-b">{item.nombre}</td>
                            <td className="py-2 px-4 border-b">{item.examen}</td>
                            <td className="py-2 px-4 border-b">{item.note}</td>
                        </tr>
                    ))
                ) :
                    <td className="py-2 px-4 border-b">Sin resultados</td>
                }
            </tbody>
        </table>
    );
};

export default Table;