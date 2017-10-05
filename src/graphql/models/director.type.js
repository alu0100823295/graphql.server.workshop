import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} from 'graphql';

var DirectorType = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString }
    })
});

export default DirectorType;

/*
Solcuión Tarea 1
import * as MoviesDirectorsService from '../services/movies-directors.service';

Solcuión Tarea 2
import MovieType from './movie.type';

Solcuión Tarea 3
movies: {
    type: new GraphQLList(MovieType),
    resolve: async (parentValues, args) => {
        console.log(`parentValues: ${JSON.stringify(parentValues)`);
        return [];
    }
}

Solcuión Tarea 4
resolve: async (parentValues, args) => {
    return await MoviesDirectorsService.getMoviesDataByDirectorId(parentValues.id);
}
*/
