# Graphql API with Node.js, Mongodb with TypeORM

> A Basic Node.js project

## Build Setup

```bash
# install dependencies
npm install

# serve at http://localhost:3000/graphql

npm start
```

## Prerequisites

-   Nodejs
-   Mongodb

**Request:**

```gql
mutation {
    createProduct(variables: { name: "IPhone 11 Max", quantity: 25 }) {
        quantity
        name
        _id
    }
}

mutation {
    updateProduct(
        fields: { name: "IPhone 11 Max", quantity: 60 }
        id: "6030dc31b8562563acdf37d4"
    )
}

query {
    products {
        _id
        name
    }
}

query {
    products {
        _id
        name
        quantity
    }
}

mutation {
    deleteProduct(id: "6030dc31b8562563acdf37d4")
}
```
