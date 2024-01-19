// import NewsController
const NewsController = require('./Newscontroller');
// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello News API Express");
});

// Membuat routing news
router.get("/news", NewsController.getAllNews);
router.post("/news", NewsController.addNews);
router.put("/news/:id", NewsController.editNews);
router.delete("/news/:id", NewsController.deleteNews);
router.get("/news/:id", NewsController.getOneNews);
router.get("/news/search/title", NewsController.searchNews);
router.get("/news/category/sport", NewsController.getSportNews);
router.get("/news/category/finance", NewsController.getFinanceNews);
router.get("/news/category/automotive", NewsController.getAutomotiveNews);

// export router
module.exports = router;
