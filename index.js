const app = require("express")();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
    // res.json([

    // ])
})

app.listen(port, () => {
    console.log('app is running');
})