# CourseProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

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


## Create an app
ng generate component app-name
or
ng g c app-name

## Install and configure bootstrap
npm install --save bootstrap@3

On the course is recommended to add the following:
include "node_modules/bootstrap/dist/css/bootstrap.min.css" into projects.architect.build.styles[] in angular.json

But besides the step above, on my projects I also had to add the following line to styles.css
@import '~bootstrap/dist/css/bootstrap.min.css';

## Bindable Properties and Events
The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for YOUR_ELEMENT properties  or YOUR_ELEMENT events  should yield nice results.

## In order to follow along smoothly with the course examples, make sure you install RxJS v6 by running
npm install --save rxjs@6

### In addition, also install the rxjs-compat package:
npm install --save rxjs-compat
