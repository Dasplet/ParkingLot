const app = require('./app');

app.listen(app.get('port'), () => {
    console.log("Server connected on port", app.get("port"));
});