// import Model News
const news = require('./news.js');
// buat class NewsController
class NewsController {
  // buat fungsi


  //  untuk mendapatkan semua berita
  getAllNews(req, res) {
    const allNews = News.all();
    res.send(allNews);
  }

  //  untuk menambahkan berita baru
  addNews(req, res) {
    const newNews = News.create();
    res.send(newNews);
  }

  //  untuk mengedit berita
  editNews(req, res) {
    const editedNews = News.update();
    res.send(editedNews);
  }

  // Fungsi untuk menghapus berita
  deleteNews(req, res) {
    const deletedNews = News.delete();
    res.send(deletedNews);
  }

  //  untuk mendapatkan satu berita berdasarkan ID
  getOneNews(req, res) {
    const oneNews = News.find();
    res.send(oneNews);
  }

  //  untuk mencari berita berdasarkan judul
  searchNews(req, res) {
    const searchedNews = News.search();
    res.send(searchedNews);
  }

  //  untuk mendapatkan berita kategori olahraga
  getSportNews(req, res) {
    const sportNews = News.findByCategory('sport');
    res.send(sportNews);
  }

  //  untuk mendapatkan berita kategori keuangan
  getFinanceNews(req, res) {
    const financeNews = News.findByCategory('finance');
    res.send(financeNews);
  }

  //  untuk mendapatkan berita kategori otomotif
  getAutomotiveNews(req, res) {
    const automotiveNews = News.findByCategory('automotive');
    res.send(automotiveNews);
  }
}

// Membuat object NewsController
const newsController = new NewsController();

// Export object NewsController
module.exports = newsController;



