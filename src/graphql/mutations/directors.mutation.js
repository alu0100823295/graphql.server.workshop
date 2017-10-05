import {
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
} from 'graphql';

import DirectorType from '../models/director.type';

import * as DirectorsService from '../services/directors.service';
import * as MoviesDirectorsService from '../services/movies-directors.service';

var addDirector = {
    type: DirectorType,
    args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        movies: { type: new GraphQLList(GraphQLInt) }
    },
    resolve: async (parentValues, args) => {
        try {
            let persistedDirectorData = await DirectorsService.persistNewDirector({ name: args.name });

            if (args.movies) {
                await MoviesDirectorsService.addMoviesToDirector(persistedDirectorData.id, args.movies);
            }
            
            return persistedDirectorData;
        } catch (error) {
            return error;
        }
    }
};

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

var addMoviesToDirector = {
    type: DirectorType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        movies: { type:new GraphQLNonNull(new GraphQLList(GraphQLInt)) }
    },
    resolve: async (parentValues, args) => {
        try {
            let persistedDirectorMoviesData = await MoviesDirectorsService.addMoviesToDirector(args.id, args.movies);

            if (persistedDirectorMoviesData) {
                return await DirectorsService.getDirectorsData(args.id);
            } else {
                return [];
            }
        } catch (error) {
            return error;
        }
    }
};

var deleteDirectorMovies = {
    type: DirectorType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        movies: { type:new GraphQLNonNull(new GraphQLList(GraphQLInt)) }
    },
    resolve: async (parentValues, args) => {
        try {
            await MoviesDirectorsService.deleteDirectorMovies(args.id, args.movies);
            return await DirectorsService.getDirectorsData(args.id);
        } catch (error) {
            return error;
        }
    }
};

export {
    addDirector,
    updateDirector,
    deleteDirector,
    addMoviesToDirector,
    deleteDirectorMovies
};