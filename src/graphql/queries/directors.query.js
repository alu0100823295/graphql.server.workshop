import {
    GraphQLList
} from 'graphql';

import DirectorType from '../models/director.type';
import * as DirectorsService from '../services/directors.service';

import * as utils from '../shared/utils';

// En esta fase del proyecto, debes definir qué objeto tipo debe devolver
// la consulta, así como la operación necesaria para obtener dicho objetivo.

var allQuery = {
    type: new GraphQLList(DirectorType),
    description: 'List of all stored directors.',
    resolve: async (parentValues, args) => {
        return await DirectorsService.getDirectorsData();
    }
};

export {
    allQuery
};

/*
Solución:
type: new GraphQLList(DirectorType)
return await DirectorsService.getDirectorsData();
*/