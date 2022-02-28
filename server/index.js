import express from "express";
import Connection from "./database/db.js";
import cors from "cors"; // when we transfer data from one web to another then cors error occur to handle this cors used.
import bodyParser from "body-parser"; // it is used to encoded url and while transfer data to web make it in json Then json use stringify to convert it into string.
import userRoute from "./route/userRoute.js";
import Router from "./route/route.js";
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/home", Router);
app.use("/user", userRoute);

// this is for backend server.
const PORT = 8000;
app.listen(PORT, () => console.log("vasu"));

Connection();
