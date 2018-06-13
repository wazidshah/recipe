# recipe
A Recipe sharing website

Usage:

-Clone the project
-Navigate to recipeApi using command prompt and run node index.js. This will start the server for api;
-Using another command prompt navigate to recipeShare and run ng serve --open


Issues:
In /list, Comments sometimes doesnot appear even though they are fetched perfectly, tried updateing data with NgZone.
Login System not very secure, due to token which is fixed for each user. Token does not change.
Api calls using service links are hardcoded to "http://127.0.0.1:3000".
