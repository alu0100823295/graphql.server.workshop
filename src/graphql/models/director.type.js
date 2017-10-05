import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} from 'graphql';

// En esta fase del proyecto, debes definir los campos (fields) del objeto tipo DirectorType,
// siguiendo las indicaciones dadas en la pantalla.

var DirectorType = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString }
    })
});

export default DirectorType;

/*
Solución:
id: { type: GraphQLInt },
name: { type: GraphQLString }
*/