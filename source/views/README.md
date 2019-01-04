## Views

* Views are components dedicated for `react-routing`
* Mostly don't have styling
* Define position of containers and components on the page
* Tests are placed in separate directory in order to allow async loading
    When you will use `import()` with dynamic path webpack will convert everything in the folder to chunks.
    Tests (as well as styles and other support files) shouldn't be converted.
