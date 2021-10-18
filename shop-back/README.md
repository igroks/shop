# Ecommerce Management API

This api aims to simulate the operation of an e-commerce for learning and obtaining grades in the web 2 programming discipline.
# Building

To start run: 

```
make docker-run
```
When first run, to perform migrations and seeds use: 

```
make docker-set-database
```
To stop run:
```
make docker-stop
```
The server will be available at port `3000`.

# Usage

For a broad knowledge of the functionality of this API see the documentation in the `/api-docs` route.