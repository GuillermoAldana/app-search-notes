import { ChangeEvent, useState } from "react";
import { INote } from "../../domain/note";

interface IInputProps {
  getNoteByLegajo: (value: string) => void;
  setNote: (searchValue: INote[]) => void;
}
const Input: React.FC<IInputProps> = ({ getNoteByLegajo, setNote }) => {
  const [legajo, setLegajo] = useState<string>('');
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLegajo(e.target.value)
    setNote([]);
  }
  const handleSearch = () => {
    getNoteByLegajo(legajo);
  };

  const handleClear = () => {
    setLegajo('');
    setNote([]);

  };

  return (
    <div className="flex items-center space-x-2 w-full">
      <input
        type="text"
        value={legajo}
        onChange={(e) => handleInput(e)}
        placeholder="Ingrese su número de legajo"
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 flex-grow"
      />
      <button
        onClick={() => {handleSearch()}}
        className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
      >
        Buscar
      </button>
      <button
        onClick={handleClear}
        className="bg-gray-300 text-gray-700 rounded-lg px-4 py-2 hover:bg-gray-400"
      >
        Limpiar
      </button>
    </div>
  )
}

export default Input;