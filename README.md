# MyReads : A book Tracking App

This application helps the user track and manage books in a digital library while categorizing the status of each book according to its location on a library shelf. 

The available shelfs are :
-Currently Reading
-Want to Read
-Read
-None

## Running the Application

To run this app:

-Clone or download the repo MyReads App Repo to your computer
-Navigate to the directory where you saved the folder: Open Terminal install all project dependencies with `npm install`
-Start the development server with `npm start`
-Navigate to http://localhost:3000/ on your browser.

## Folder Structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file..
├── public
│   ├── favicon.ico 
│   └── index.html 
└── src
    ├── App.css # Styles for your app
    ├── App.js # This is the root of your app. 
    ├── App.test.js # Used for testing.
    ├── Book.js
    ├── BookShelf.js
    ├── Search.js
    ├── ShelfChanger.js
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. 
    └── index.js 
```
##Search Terms

More books can be retrieved from the server on the search page http://localhost:3000/search. Refer to the SEARCH_TERMS.md file

## Backend Server

Utilizes Udacity's backend server from the file [`BooksAPI.js`](src/BooksAPI.js) which contains the methods to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

Thanks to the Udacity backend server team for the BooksApi file, icons and initial static folder.
