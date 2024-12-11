require("dotenv").config(); // Load environment variables from a .env file into process.env
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var itemsRouter = require("./routes/items"); // Added items route
var collectionsRouter = require("./routes/collections");
var likedItemsRouter = require("./routes/liked-items");

var app = express();

// Connect to MongoDB with empty database
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
    ssl: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", async () => {
    try {
        await mongoose.connection.dropDatabase(); // Drops the entire database
        console.log("Database cleared. Ready for fresh start.");
    } catch (error) {
        console.error("Error while clearing the database:", error);
    }
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/items", itemsRouter); // Ensure items route is used
app.use("/collections", collectionsRouter);
app.use("/liked-items", likedItemsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
