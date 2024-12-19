const express = require("express");

const PORT = 3000;
const app = express();

app.get('/user/:id', (request, response) => {
        // You can run any code which you like here before
        // sending back data
	response.json({ name: 'Some Person' });
});

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));