# Weather-Journal App Project

## Requirments
use asynchronous javascript to get data from API then update UI accordingly
## Set Express Enviroment
using 
```console
$npm install express body-parser cors
```
## Set local Server and requests
use
```js
app.listen(port,callbackfunction)
```
to start our local server at specified port
set `app.get` and `app.post` to get and post data to project end point 
## Client Side Code
implement `getData` method which use personal api key to get data using zipcode entered by the user .
implement `postData` which send POST request to project end point
implement `updateUI()` which send GET request to project end point and update UI accordingly .
Chain all these promises using `.then()`
