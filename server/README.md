# Express Server

### Using a basic Express server, leveraging Mongoose for MongoDB, and such as dotenv and cors, this is a simple CRUD server.

## API endpoints

### GET `/api/article`

Get all articles.

### POST `/api/article`

Create a new article.

- Body:

```js
{
  "title": "POST request",
  "text": "This should be in the body of your post request"
}
```

### PUT `/api/article/:articleId`

Update article with specific id.

- Body:

```js
{
  "title": "New title",
  "text": "New text for put request"
}
```

### DELETE `/api/article/:articleId`

Delete item with specific id.
