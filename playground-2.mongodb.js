/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'backend_forms';
const collection = 'users';

// Create a new database.
use(database);

// Create a new collection with fields.
db.createCollection(collection, {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['username', 'name', 'surname', 'country', 'id'],
      properties: {
        username: {
          bsonType: 'string',
          description: 'Username must be a string',
        },
        name: {
          bsonType: 'string',
          description: 'Name must be a string',
        },
        surname: {
          bsonType: 'string',
          description: 'Surname must be a string',
        },
        country: {
          bsonType: 'string',
          description: 'Country must be a string',
        },
        id: {
          bsonType: 'string',
          description: 'ID must be a string',
        },
      },
    },
  },
});

// More information on the `createCollection` command and JSON schema validation:
// https://docs.mongodb.com/manual/core/json-schema-validation/
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
