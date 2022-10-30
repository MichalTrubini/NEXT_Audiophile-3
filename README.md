# Audiophile e-commerce app

This project was created using figma design, courtesy of [Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx)

## Tech stack

* Next.js (12.3.1) with Typescript.

## Features

Main app features are:

* multi-page design with three different categories and 6 different products
* adding items to cart
* removing items from cart and adjustment of ordered qty within the cart
* checkout page with form validation

## Data and state management

* No actual database was used. Cart data are stored in localStorage.
* Context was used so that every component has access to the data within the context. If the user adds and item into the cart, this is stored inside localStorage. Then the context pulls the data from localStorage and feeds it into cart and checkout components (or rather, these components pull it from store context).

* Products and categories pull content data from json file.
* GetStaticProps and getStaticPaths is used so that given product can pull the correct data from json file.

## License
[MIT](https://choosealicense.com/licenses/mit/)