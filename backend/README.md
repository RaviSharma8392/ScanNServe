This is a MERN stack project for QR based food menu system with admin control.

--- Project Structure 
'src' -> Inside the src folder, all the actual source code regarding the project will reside. This will not include any kind of tests.
Inside the src folder, we will have the following directories - 
'config' -> In this folder, anything and everything related to setting up any configuration or setup of any module or library will be done.
'routes' -> In this folder, we register a route and the corresponding middleware and controllers to it.
'middlewares' -> They are just going the intercept where we can write our validators, authenticators, etc.
'controllers' -> Theya re kind of last middlewares as post them you can call your business layer to execute the business logic.
'repositories' -> this folder contains all the logic using which we interact with database by writing queries.
'services' -> contains the business logic and interact with repositories for data from the database.
'utils' -> contains helper methods, error classes, etc.
'schema' -> here the schema will be defined according to which creation of database entities will be done.

routes -> v1 -> this will contain all routes that are defined in version 1 of the project.
