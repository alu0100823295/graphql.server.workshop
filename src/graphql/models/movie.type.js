import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLFloat,
    GraphQLString
} from 'graphql';

// Tarea 1.a - Importar el servicio 'MoviesDirectorsService'.
// Tarea 1.b - Importa el objeto tipo 'DirectorType' después de 'export default'.

// Tarea 2.a - Importar el servicio 'MoviesActorsService'.
// Tarea 2.b - Importa el objeto tipo 'ActorType' después de 'export default'.

var MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        poster_image: { type: GraphQLString },
        duration: { type: GraphQLInt },
        rating: { type: GraphQLFloat },
        classification: { type: GraphQLString },
        year: { type: GraphQLString }
        // Tarea 3 - Añadir el campo 'directors' y devolver la información correspondiente.
        // Tarea 4 - Añadir el campo 'actors' y devolver la información correspondiente.
    })
});

export default MovieType;


/*
Solución Tarea 1.a
import * as MoviesDirectorsService from '../services/movies-directors.service';
Solución Tarea 1.b
import DirectorType from './director.type';

Solución Tarea 2.a
import * as MoviesActorsService from '../services/movies-actors.service';
Solución Tarea 2.b
import ActorType from './actor.type';

Solución Tarea 3
directors: {
    type: new GraphQLList(DirectorType),
    resolve: async (parentValues, args) => {
        return await MoviesDirectorsService.getDirectorsDataByMovieId(parentValues.id);
    }
},

Solución Tarea 4
actors: {
    type: new GraphQLList(ActorType),
    resolve: async (parentValues, args) => {
        return await MoviesActorsService.getActorsDataByMovieId(parentValues.id);
    }
},
*/
