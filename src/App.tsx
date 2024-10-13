import { useEffect, useState } from 'react';
import './App.css';
import Title from './components/Title';
import Input from './components/Input';
import Table from './components/Table';
import { INote } from './domain/note';
import { data, fetchData } from './services/noteServices';

const App = () => {
  const [note, setNote] = useState<INote[]>([]);
  const [loading, setLoading] = useState(false);

  const getNoteByLegajo = async (legajo: string) => {
    setLoading(true);
    if (legajo) {
      try {
        const response = data.filter(element => element.legajo === legajo);
        setNote(response);
      } catch (error) {
        console.error("Ha ocurrido un problema");
      } finally {
        setLoading(false);
      }

    }
  };
  return (
    <div className="container mx-auto h-screen flex flex-col justify-center items-center px-4">
      <Title text="Buscar notas de examenes" />
      <Input getNoteByLegajo={getNoteByLegajo} setNote={setNote} />
      {note.length > 0 && <Table note={note} loading={loading} /> }
    </div>
  );
};

export default App;
