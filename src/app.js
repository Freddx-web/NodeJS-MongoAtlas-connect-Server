
import express from "express";
import morgan from "morgan";
import cors from "cors";

// Extentions
import AuthRouter from "./routers/route.js"

// Settings
const app = express();
app.use(cors());
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routers
app.use("/api/auth", AuthRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome Server Mongo Atlas!"});
});

// 404
app.use(function(req, res, next) {
  next(createError(404));
    return res.status(404).json({
      message: ["404. Page not Found."],
  });
});
  
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
  
// Export App 
export default app;