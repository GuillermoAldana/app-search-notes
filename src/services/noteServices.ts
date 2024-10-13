import { INote } from "../domain/note"

export const data: INote[] = [
    { legajo: '1', nombre: 'Enzo Perez', examen: 'Examen 1 - Practicas 1', note: 10 },
    { legajo: '1', nombre: 'Enzo Perez', examen: 'Examen 2 = Practicas 2', note: 8 },
    { legajo: '2', nombre: 'Lionel Messi', examen: 'Examen 2 = Practicas 1', note: 10 },
    { legajo: '2', nombre: 'Lionel Messi', examen: 'Examen 2 = Practicas 2', note: 10 },
    { legajo: '3', nombre: 'Enzo Fernandez', examen: 'Examen 2 = Practicas 1', note: 7 },
    { legajo: '6', nombre: 'Lautaro Martinez', examen: 'Examen 2 = Practicas 2', note: 1 },


]
export const fetchData = (legajo : string) : Promise<INote[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    });
};

