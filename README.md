# Timestamp

A timestamp microservice that supports natural language.


### Example outputs

```javascript
# Pass in the date and get the timestamp out!
'/Wednesday 28 December 2016' 
=> {"unix":1482883200,"natural":"Wednesday 28 December 2016"}

# Shorten the day and month names and get the same output as above
'/Wed 28 Dec 2016
=> {"unix":1482883200,"natural":"Wednesday 28 December 2016"}

# Pass in unix timestamps directly to get the natural date out
'/1482883200'
=> {"unix":1482883200,"natural":"Wednesday 28 December 2016"}

# Bad requests return a null object
'/wasd'
=> {"unix":null,"natural":null}
```