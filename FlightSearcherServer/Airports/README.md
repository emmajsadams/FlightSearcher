# Development Environment Setup
* Install https://www.visualstudio.com/vs/visual-studio-mac/
* Run app using IDE. It should appear on 127.0.0.1:8081
* Use NUnit to run tests in FlightSearcher.Tests

# Endpoints
`GET /flights` - Retrieves flights in JSON with optional parameters listed below 
 * from - `Airport` the flight is departing from
 * to - `Airport` the flight is arriving at
 * sortColumn - The column in `Flight` to sort on.
 * sortOrder - The order to sort the column specified in `sortColumn`
 * EXAMPLE: /flights?from=SEA&to=LAS&sortColumn=MainCabinPrice&sortOrder=Descending

`GET /airports` - Retrieves the airports in JSON

# Testing philosophy
* Unit tests all services, models, and controllers where appropriate.
* Avoiding mocking since the dependencies are minimal and no dependency injection was required.

# Thoughts on scaling this app
* As dependencies grow and become harder to manage it might make sense to use a dependency injection pattern like 
SimpleInjector. This can also help with testing since dependant objects are constructed by the DI framework. More reading on this
can be found here https://martinfowler.com/articles/injection.html 
* DateTime currently renders using Date(mili) format. I would consider switching this to a UTC date format since most developers are more comfortable with that and it works internationally. 
* Docker might help manage deployment and development across multiple environments.
* As more people are added to the app something like git flow would make sense http://nvie.com/posts/a-successful-git-branching-model/. This is a way of using git that allows for many people working on features to easily work together. It also produces versioned releases of the app.