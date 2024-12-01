# Trendzy (Ecommerce App)

# Description
This Angular E-commerce application offers a smooth and user-friendly shopping experience, empowering users to browse products, add items to their cart or wishlist, and complete purchases. The application leverages an API to fetch product data dynamically and incorporates a robust token-based authentication system for security. The authentication tokens are valid for 20 days, while the refresh tokens are set to expire after 10 hours, ensuring secure and reliable access management.

To optimize performance and scalability, the application is modularized and employs lazy loading, loading Component only when needed. The structure includes distinct modules, such as a User Components, where users can manage their personal information, view order history, and update their profiles. This modular approach ensures faster load times and improved maintainability.

# Feature 

* User Authentication with JWT token.
* Data loading using ngx skeleton loader.
* Infinite scrolling to load more products.
* Product details page.
* Product sorting by price and name.
* Product filtering by category.
* Zoom in functionality in product details page.
* Add products to cart or wishlist.
* Lazy loading of Components.
* Checkout products.

# Build With

* [Angular](https://angular.dev/overview)
* [Typescript](https://www.typescriptlang.org/)
* [ng-bootstrap](https://ng-bootstrap.github.io/#/home)
* [Fontawesome](https://www.npmjs.com/package/@fortawesome/fontawesome-free)
* [ngneat/hot-toast](https://www.npmjs.com/package/@ngneat/hot-toast)
* [ngx-image-zoom](https://www.npmjs.com/package/ngx-image-zoom)
* [ngx-skeleton-loader](https://www.npmjs.com/package/ngx-skeleton-loader)
* [ngx-infinite-scroll](https://www.npmjs.com/package/ngx-infinite-scroll)
* [rxjs](https://rxjs.dev/guide/operators)

# Backend Api
 
* Doumentation [here](https://fakeapi.platzi.com/)

# Ecommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
