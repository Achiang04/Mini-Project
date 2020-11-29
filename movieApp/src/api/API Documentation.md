# Team A-Backend - Movie Apps

Create a Movie Apps


```
Status Code Response
200 - OK                      > Call API success
201 - CREATED                 > Post success
202 - ACCEPTED                > Response/Post success
400 - BAD REQUEST             > Error on client side
404 - NOT FOUND               > Req.bodyuest endpoint not found
409 - CONFLICT                > User not fill the requirement
500 - INTERNAL SERVER ERROR   > Error on server side
```

# RESTful endpoints

## GET https://fierce-woodland-97447.herokuapp.com/users/list : 
Get All Users
```json
Request Header {
"access_token" : "<your acces token>"
}
```
```json

Request Body: not needed
```
```json
Response: (200 - OK){
  "id" : "<user id>",
  "name": "<user name>",
  "email": "<user email>",
  "password": "<user password>",
  "role": "<user role>"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## POST https://fierce-woodland-97447.herokuapp.com/users/register : 
Register User
```json
Request Header : not needed
```
```json
Request Body: {
  "name": "<user name>",
  "email": "<user email>",
  "password": "<user password>",
  "role": "<user role>"
}
```
```json
Response: (201 - Created){
  "access_token": "<your access token>"
}
```
```json
Response: (409 - Conclict){
  "Thats email already registered! Input another email account, thanks!"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## POST https://fierce-woodland-97447.herokuapp.com/users/login :
Login User
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body: {
  "email": "<user email>",
  "password": "<user password>"
}
```
```json
Response: (200 - OK){
  "access_token": "<your access token>"
}
```
```json
Response: (409 - Conflict){
  "Incorrect password!"
}
```
```json
Response: (404 - Not Found){
  "User not found!"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## PUT https://fierce-woodland-97447.herokuapp.com/users/edit/:id : 
Edit Users
```json

Request Header : {
  "access_token": "<your access token">
}
```
```json

Request Body: {
  "name": "<user name>", 
  "image" : "<user image>",
  "email": "<user email>", 
  "password": "<user password>"
}
```
```json

Response: (202 - Accepted){
  "Profile has been updated!"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## GET https://fierce-woodland-97447.herokuapp.com/users/find/:id : 
Find User By UserID
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : not needed
```
```json
Response: (200 - OK) {
  "<user id>"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

===========================================================================================================

## GET https://fierce-woodland-97447.herokuapp.com/movie/:page : 
Get all the movies
```json
Request Header : not needed
```
```json

Request Body : not needed
```
```json
Response: (200 - OK) {
  "id": "<movie id>",
  "title": "<movie title>",
  "picture": "<movie picture>",
  "trailer": "<movie trailer>",
  "year": "<movie year>",
  "synopsis": "<movie synopsis>", 
  "character": "<movie main character>",
  "genreId": "<movie genreId>",
  "updatedAt": "<movie updatedAt>",
  "createdAt": "<movie createAt>",
  "genreName": "<genre name>"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## POST https://fierce-woodland-97447.herokuapp.com/movie/add : 
Make/add the movie
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : {
  "title": "<movie title>",
  "picture": "<movie picture>",
  "trailer": "<movie trailer>",
  "year": "<movie year>",
  "synopsis": "<movie synopsis>", 
  "character": "<movie main character>",
  "genreId": "<movie genreId>"
}
```
```json
Response: (201 - Created) {
  "id": "<movieId>",
  "title": "<movie title>",
  "picture": "<movie picture>",
  "trailer": "<movie trailer>",
  "year": "<movie year>",
  "synopsis": "<movie synopsis>", 
  "character": "<movie main character>",
  "genreId": "<movie genreId>",
  "updatedAt": "<movie updatedAt>",
  "createdAt": "<movie createAt>",
  "genreName": "<genre>"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## GET https://fierce-woodland-97447.herokuapp.com/movie/find/:id : 
Find movie by id
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : not needed
```
```json
Response: (200 - OK) {
  "id": "<movie id>",
  "title": "<movie title>",
  "picture": "<movie picture>",
  "trailer": "<movie trailer>",
  "year": "<movie year>",
  "synopsis": "<movie synopsis>", 
  "character": "<movie main character>",
  "genreId": "<movie genreId>",
  "updatedAt": "<movie updatedAt>",
  "createdAt": "<movie createAt>",
  "genreName": "<genre>"
}
```
```json
Response: (404 - Not Found) {
  "Movie is not found."
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## GET https://fierce-woodland-97447.herokuapp.com/movie/find/title :
Find movie by Title
```json
Request Header : not needed
```
```json
Request Body : not needed
```
```json
Response: (200 - OK) {
  "id": "<movie id>",
  "title": "<movie title>",
  "picture": "<movie picture>",
  "trailer": "<movie trailer>",
  "year": "<movie year>",
  "synopsis": "<movie synopsis>", 
  "character": "<movie main character>",
  "genreId": "<movie genreId>",
  "updatedAt": "<movie updatedAt>",
  "createdAt": "<movie createAt>",
  "genreName": "<genre>"
}
```
```json
Response: (404 - Not Found) {
  "Movie is not found."
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## DELETE https://fierce-woodland-97447.herokuapp.com/movie/delete/:id : 
Delete movie
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : not needed

Response: (200 - OK) {
  "Movie deleted."
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## PUT https://fierce-woodland-97447.herokuapp.com/movie/update/:id : 
Edit or update the movie
```json
Request Header : {
  "access_token": "<your access token>"
}
```
```json
Request Body : {
  "title": "<movie title>",
  "picture": "<movie picture>",
  "trailer": "<movie trailer>",
  "year": "<movie year>",
  "synopsis": "<movie synopsis>", 
  "character": "<movie main character>",
  "genreId": "<movie genreId>",
}
```
```json
Response: (200 - OK) {
  "id": "<movie id>",
  "title": "<movie title>",
  "picture": "<movie picture>",
  "trailer": "<movie trailer>",
  "year": "<movie year>",
  "synopsis": "<movie synopsis>", 
  "character": "<movie main character>",
  "genreId": "<movie genreId>",
  "createdAt": "<cast createdAt>",
  "updatedAt": "<cast updateddAt>",
  "genreName": "<genre>"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

===========================================================================================================

## GET https://fierce-woodland-97447.herokuapp.com/movie/genre/ : 
Get all the genres
```json
Request Header : not needed

Request Body : not needed
```
```json
Response: (200 - OK) {
  "id": "<genre id>",
  "genreName" : "<genre name>",
  "updatedAt": "<genre updatedAt>",
  "createdAt": "<genre createAt>"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## POST https://fierce-woodland-97447.herokuapp.com/movie/genre/add : 
Add a new genre
```json
Request Header {
    "access_token": "<your access token">
} 
```
```json

Request Body : {
  "genreName" : "<genre name>"
}
```
```json
Response: (200 - OK) {
  "id": "<genre id>",
  "genreName" : "<genre name>",
  "updatedAt": "<movie updatedAt>",
  "createdAt": "<movie createAt>"
}
```
```json
Response: (400 - Bad Request){
  "Genre already exists."
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## DELETE https://fierce-woodland-97447.herokuapp.com/movie/genre/delete/:id : 
Delete the genre
```json
Request Header {
    "access_token": "<your access token">
} 
```
```json
Request Body : not needed
```
```json
Response: (200 - OK) {
  "Genre deleted."
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## GET https://fierce-woodland-97447.herokuapp.com/movie/genre/find/:id : 
Delete the genre
```json
Request Header {
    "access_token": "<your access token">
} 
```
```json
Request Body : not needed
```
```json
Response: (200 - OK) {
  "genreName" : "<genre name>"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```
===========================================================================================================

## GET https://fierce-woodland-97447.herokuapp.com/review/list : 
Get all the reviews from a movie
```json
Request Header : not needed
```
```json
Request Body : not needed
```
```json
Response: (200 - OK){
  "id" : "<review id>",
  "comment": "<review comment>",
  "rating" : "<review rating>",
  "userId" : "<review userId>",
  "movieId" : "<review movieId>",
  "createdAt" : "<review createdAt>",
  "updatedAt" : "<review updatedAt>",
  "user": "<user name>",
  "movie": "<movie title>"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## POST https://fierce-woodland-97447.herokuapp.com/review/add/:id : 
Add a review
```json
Request Header {
    "access_token": "<your access token">
} 
```
```json
Request Body : {
  "comment": "<review comment>",
  "rating" : "<review rating>",
  "userId" : "<review userId>",
  "movieId" : "<review movieId>"
}
```
```json
Response: (201 - Created){
  "id" : "<review id>",
  "comment": "<review comment>",
  "rating" : "<review rating>",
  "userId" : "<review userId>",
  "movieId" : "<review movieId>",
  "createdAt" : "<review createdAt>",
  "updatedAt" : "<review updatedAt>",
  "user": "<user name>",
  "movie": "<movie title>"
}

```
```json
Response: (400 - Bad Request){
  "You already input your review."
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## DELETE https://fierce-woodland-97447.herokuapp.com/review/delete/:id : 
Delete a review
```json
Request Header {
    "access_token": "<your access token">
} 
```
```json
Request Body : not needed
```
```json
Response: (202 - Accepted){
  "Review has been deleted"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## PUT https://fierce-woodland-97447.herokuapp.com/review/update/:id : 
Edit or update a review
```json
Request Header {
    "access_token": "<your access token">
} 
```
```json
Request Body : {
  "id" : "<review id>",
  "comment": "<review comment>",
  "rating" : "<review rating>",
  "userId" : "<review userId>",
  "movieId" : "<review movieId>",
  "createdAt" : "<review createdAt>",
  "updatedAt" : "<review updatedAt>"
}
```
```json
Response: (202 - Accepted){
  "id" : "<review id>",
  "comment": "<review comment>",
  "rating" : "<review rating>",
  "userId" : "<review userId>",
  "movieId" : "<review movieId>",
  "createdAt" : "<review createdAt>",
  "updatedAt" : "<review updatedAt>",
  "user": "<user name>",
  "movie": "<movie title>"
}
}
```
```json
Response: (404 - Not Found){
  "Review is not found."
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## GET https://fierce-woodland-97447.herokuapp.com/movie/:movieId : 
Edit or update a review

Request Header {
    "access_token": "<your access token">
} 
```
```json
Request Body : not needed
```
```json
Response: (200 - OK){
	"Movie" : "<movie title>",
  "Rating" : "<movie rating>",
  "Review" : "<movie comments>"
}
```
```json
Response: (404 - Not Found){
  "Movie is not found."
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```
================================================================================================================