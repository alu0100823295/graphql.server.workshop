import {
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
} from 'graphql';

// Tarea 1: Importar el Objetos Tipo que vamos a modificar.

// Tarea 2: Importaremos los servicios que vayamos a emplear.

var addDirector = {
    // Tarea 3: Definir el objeto tipo que vamos a devolver.
    type: 'Objeto tipo que se va a ver afectado por la mutación',
    args: {
        // Tarea 4: Definir el argumento que vamos a pasar para crear al Director.
        // Pista: Debe ser de tipo cadena de caracteres y nunca podrá ser null.
        agumentos: 'que serán usados por la mutación'
    },
    resolve: async (parentValues, args) => {
        // Tarea 5: Implementar el código necesario para llevar a cabo las operaciones propias de la mutación.
    }
};

// Tarea 6: Implementar la mutación 'updateDirector'.
// var updateDirector = {};

// Tarea 7: Implementar la mutación 'deleteDirector'.
// var deleteDirector = {};

export {
    addDirector,
    // updateDirector,
    // deleteDirector,
    // addMoviesToDirector,
    // deleteDirectorMovies
};

/*
Solución Tarea 1
import DirectorType from '../models/director.type';

Solución Tarea 2
import * as DirectorsService from '../services/directors.service';
import * as MoviesDirectorsService from '../services/movies-directors.service';

Solución Tarea 3
type: DirectorType

Solución Tarea 4
name: { type: new GraphQLNonNull(GraphQLString) }

Solución Tarea 5
try {
    let persistedDirectorData = await DirectorsService.persistNewDirector({ name: args.name });

    if (args.movies) {
        await MoviesDirectorsService.addMoviesToDirector(persistedDirectorData.id, args.movies);
    }
    
    return persistedDirectorData;
} catch (error) {
    return error;
}

Solcuión Tarea 6
var updateDirector = {
    type: DirectorType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: async (parentValues, args) => {
        try {
            return await DirectorsService.updateDirector(args);
        } catch (error) {
            return error;
        }
    }
};

Solución Tarea 7
var deleteDirector = {
    type: DirectorType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLInt) }
    },
    resolve: async (parentValues, args) => {
        try {
            return await DirectorsService.deleteDirector(args.id);
        } catch (error) {
            return error;
        }
    }
};
*/