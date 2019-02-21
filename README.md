"# shop" 
<h2>Documentation<h2>

<h3>App Status</h3>
Not ready for release yet, still in development mode

<h3>Getting Started</h3>
Before installing, download and install Node.js.
Installation is done using the npm install command:

<h3>Install</h3>
`npm install`

<h3>Run app</h3>
`npm start`

<h3>Features</h3>
<ul>
  <li>User can view products showing only a few detail</li>
  <li>User can view more details of a specific product</li>
  <li>User can post new products</li>
</ul>

<!DOCTYPE html>
<html>
<head>
</head>
<body>

<h2>Test API endpoints</h2>
Use POSTMAN to test 

<table>
  <tr>
    <th>request</th>
    <th>endpoint</th>
    <th>secription</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>api/items</td>
    <td>Create new item</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>api/items</td>
    <td>Get all items</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>api/:itemId</td>
    <td>Get details of a particular item</td>
  </tr>
</table>

</body>
</html>

To view UI demo <a href="https://secure-castle-12417.herokuapp.com/">click here</a>

API data currently available on Heroku
1. Endpoint to view all items 
<a href="https://secure-castle-12417.herokuapp.com/api/items">view items</a>

2. Individual item with more detail by id example
<a href="https://secure-castle-12417.herokuapp.com/api/items/5c6ca66338ab06001731c569">an individual item by id</a> 

3. Create route to post items
<a href="https://secure-castle-12417.herokuapp.com/items/new">Post item</a>

