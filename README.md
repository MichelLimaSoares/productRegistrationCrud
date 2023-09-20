# Product Registration

This project is a simple CRUD application built with Angular. It allows users to register and manage products. 

## Development server

To run the application locally, follow these steps:

1. Make sure you have [Node.js](https://nodejs.org) installed on your machine.
2. Clone this repository to your local machine.
3. Open a terminal or command prompt and navigate to the project's directory.
4. Run the command `npm install` to install the project dependencies.
5. After the installation is complete, run `ng serve` for a development server.
6. Open your browser and navigate to `http://localhost:4200/`. The application will automatically reload if you make any changes to the source files.

## Features

- Register new products with their details, such as name, description, and price.
- Update existing product information.
- Delete products from the list.
- View a list of all registered products.

## Screenshots

Here are some screenshots of the application:

![Product List](/screenshots/home-crud.png)
*Screenshot 1: home page.*

![Product Details](/screenshots/produtos-crud.png)
*Screenshot 2: page with all products*

![Product Details](/screenshots/excluir-produto-crud.png)
*Screenshot 3: delete product page*

![Product Details](/screenshots/alterar-produto-crud.png)
*Screenshot 4: change a selected product page*

![Product Details](/screenshots/novo-produto-crud.png)
*Screenshot 5: page to create a new product*


## Technologies Used

- Angular
- NodeJs
- Rxjs
- TypeScript
- HTML
- CSS
- Material

## DataBase

- Json Server

This project uses a JSON database for data storage. The `database.json` file contains information about registered products. The JSON file format follows the structure of:

![db.json Details](/screenshots/db.json-crud.png)
*Screenshot 1: page db.json for testing *

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Any contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE).
