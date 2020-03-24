const { Router } = require("express");

const routes = Router();

const uploadConfig = require("./config/upload");
const multer = require("multer");
const upload = multer(uploadConfig);

const SessionController = require("./controllers/SessionController");
const PictureController = require("./controllers/PictureController");
const AdminController = require('./controllers/AdminController')

routes.post("/admins", AdminController.create);
routes.post('/sessions', SessionController.create)
routes.post("/pictures", upload.single("picture"), PictureController.store);
routes.get("/pictures", PictureController.index);
routes.delete("/pictures/:id/:picture", PictureController.delete);
module.exports = routes;
