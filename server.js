// import modules
let express=require("express");
let cors=require("cors");
let bodyParser=require("body-parser");

let app=express();
// where "app" called as rest object (master object)
// where "app" Object used to "use custom modules"

// Enable the ports communication
app.use(cors());

// set the json as MIME type
app.use(bodyParser.json());

// Parse the json
app.use(bodyParser.urlencoded({extended:false}));

app.use("/fetch",require("./fetch/fetch"));
app.use("/insert",require("./insert/insert"));
app.use("/update",require("./update/update"));
app.use("/remove",require("./remove/remove"));

let port=process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("Server Started");
});