
# DemoQA

th following project contains UI and API tests for DemoQA website and APIs

# Tech stack : 
**Framework** : Playwright

**Programming language** : Typescript

## API Reference


```http
  Post /Account/v1/User
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `"userName"` | `string` | **Required**
| `"password"` |`string`| **Required**

#### add List Of Books 

```http
  POST Bookstore/v1/Books 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `"userId"`      | `string` | **Required**|
|`"collectionOfIsbns"`|`string` | **Required** |
|`"isbn"`| `"string"`| **Required** |

#### Remove one of the added books
```http
  DELETE Bookstore/v1/Books 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `"isbn"`      | `string` | **Required**|
|`"userId"`|`string` | **Required** |


## Test cases titles

## UI test cases : 

**TC01-A** : Verify user can enter new data into the table

**TC01-B** : Verify user can edit the row in a table

**TC02**   : Verify broken image

**TC03**   : Verify user can submit the form

**TC04**   : Verify the progress bar

**TC05**   : Verify the tooltip

**TC05**   : Verify user can drag and drop

## API test cases : 

Create a new user with valid data

Create a new user with invalid password

Add a list of book for the created authorized User

Add a list of book for an Unauthorized User

Delete a book from list of created user books

Delete a non-existed book from list of created user books



## Running Tests

To run tests, run the following command :

```bash
  npx playwright test 
```

To see the test reports, run the following command :

```bash
  npx playwright show-report 
```
## supporting browsers


| Parameter | Linux    | macOS   | Windows    
| :-------- | :------- | :--------|----------|
| Chromium | **supported** | **supported**| **supported** | 
| Webkit | **supported** |  **supported** | **supported** |  
| Firefox | **supported** |  **supported** | **supported** | 
