require('dotenv').config();

const app = require('../app/index');
const port = process.env.PORT || '8080';

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})