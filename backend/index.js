import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import FileUpload from "express-fileupload";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import CategoriesRoute from "./routes/CategoriesRoutes.js";
import AuthRoute from "./routes/AuthRoute.js";
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});


app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:49926",
  })
);
app.use(express.json());
app.use(FileUpload());
app.use(express.static("uploads"));
app.use(UserRoute);
app.use(ProductRoute);
app.use(CategoriesRoute);
app.use(AuthRoute);

store.sync();
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running...");
});
