# Shopping list api
Shopping list api

## Technologies

### Production

- [Express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js
- [Knex](https://www.npmjs.com/package/knex): Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use
- [Sqlite3](https://www.npmjs.com/package/postgres): PostgreSQL is a free and open-source relational database management system emphasizing extensibility and SQL compliance
- [Cors](https://www.npmjs.com/package/cors): CORS is a Node.js package for providing a Connect/Express middleware that can be used to enable CORS
- [Helmet](https://www.npmjs.com/package/helmet): Helmet helps you secure your Express apps by setting various HTTP headers
- [Dotenv](https://www.npmjs.com/package/dotenv): Dotenv is a zero-dependency module that loads environment variables from a .env file

### Development

- [Nodemon](https://www.npmjs.com/package/nodemon): nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected

## Setup

(# <--- signifies comment)
In your terminal run:

```
# Install dependencies
npm install

# Starts express server using nodemon
npm run server
```

# Available endpoints 

# GET ALL ITEMS
/api/items/

```json
[
  {
    "id": 1,
    "name": "Tomatoes",
    "description": "Lorem ipsum",
    "count": "3",
    "isPurchased": false,
    "created_at": "2021-10-05T18:10:03.809Z"
  },
  {
    "id": 2,
    "name": "Cherry",
    "description": "Lorem ipsum",
    "count": "2",
    "isPurchased": false,
    "created_at": "2021-10-05T18:11:03.809Z"
  },
]
```

# GET BY ITEM ID
/api/items/:id

```json
{
    "id": 1,
    "name": "Tomatoes",
    "description": "Lorem ipsum",
    "count": "3",
    "isPurchased": false,
    "created_at": "2021-10-05T18:10:03.809Z"
  }
 ```

# POST ITEM
/api/items

```json
{
   "name":"Tomatoes",
   "description": "Lorem ipsum",
   "count": "1"
}
```

# UPDATE ITEM
/api/items/:id

```json
{
   "name": "Tomatoes",
    "description": "Lorem ipsum",
    "count": "3",
    "isPurchased": false,
}
```

# DELETE ITEM
/api/items/:id


# Run tests
# `npm test`

Launches the test runner in the interactive watch mode.