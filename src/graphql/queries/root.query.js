import { GraphQLObjectType } from 'graphql';

import * as DirectorsQuery from './directors.query';
import * as GenresQuery from './genres.query';

// Tarea: Inlcuir los métodos 'allGenres' y 'genresById' en las queries de GraphQL.

var RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        allDirectors: DirectorsQuery.allQuery,
        directorsById: DirectorsQuery.byIdQuery,

        // allWriters: WritersQuery.allQuery,
        // writersById: WritersQuery.byIdQuery,

        // allActors: ActorsQuery.allQuery,
        // actorsById: ActorsQuery.byIdQuery,

        // allGenres: GenresQuery.allQuery,
        // genresById: GenresQuery.byIdQuery,

        // allMovies: MoviesQuery.allQuery,
        // moviesById: MoviesQuery.byIdQuery,
    })
});

export default RootQueryType;