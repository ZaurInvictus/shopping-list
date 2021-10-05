# Shopping list api
Shopping list api

# Available endpoints (if running locally)

# GET ALL ITEMS
http://localhost:5000/api/items/

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
http://localhost:5000/api/items/:id

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
http://localhost:5000/api/items

```json
{
   "name":"Tomatoes",
   "description": "Lorem ipsum",
   "count": "1"
}
```

# UPDATE ITEM
http://localhost:5000/api/items/:id

```json
{
   "name": "Tomatoes",
    "description": "Lorem ipsum",
    "count": "3",
    "isPurchased": false,
}
```

# DELETE ITEM
http://localhost:5000/api/items/:id


# Run tests
# `npm test`

Launches the test runner in the interactive watch mode.