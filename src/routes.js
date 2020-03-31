const { Router } = require("express");
const { celebrate, Joi, Segments } = require("celebrate");
const routes = Router();

const uploadConfig = require("./config/upload");
const multer = require("multer");
const upload = multer(uploadConfig);

const SessionController = require("./controllers/SessionController");
const PictureController = require("./controllers/PictureController");
const AdminController = require("./controllers/AdminController");

routes.post(
  "/admins",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      user: Joi.string().required(),
      pass: Joi.string().required()
    })
  }),
  AdminController.create
);
routes.post(
  "/sessions",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      user: Joi.string().required(),
      pass: Joi.string().required()
    })
  }),
  SessionController.create
);
routes.post("/pictures", upload.single("picture"), PictureController.store);
routes.get(
  "/pictures/:category",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }),
  PictureController.index
);
routes.delete("/pictures/:id/:picture", PictureController.delete);
module.exports = routes;
