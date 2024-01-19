// import database

// membuat class News
class News {
  // buat fungsi
  constructor() {
    // Data dummy sebagai contoh
    this.newsData = [
      { ID: 1, Judul_Berita: 'Berita 1', Kategori_Berita: 'sport' },
      { ID: 2, Judul_Berita: 'Berita 2', Kategori_Berita: 'finance' },
      { ID: 3, Judul_Berita: 'Berita 3', Kategori_Berita: 'automotive' },
    ];
  }

  // Mendapatkan semua berita
  all() {
    return this.newsData;
  }

  // Menambahkan berita baru
  create() {
    const newNews = { ID: this.newsData.length + 1, Judul_Berita: 'Berita Baru', Kategori_Berita: 'general' };
    this.newsData.push(newNews);
    return newNews;
  }

  // Mengedit berita
  update() {
    // Logika update berita
    return 'Berita berhasil diubah';
  }

  // Menghapus berita
  delete() {
    // Logika hapus berita
    return 'Berita berhasil dihapus';
  }

  // Mendapatkan satu berita berdasarkan ID
  find() {
    return this.newsData[0]; // Mengambil berita pertama sebagai contoh
  }

  // Mencari berita berdasarkan judul
  search() {
    // Logika pencarian berita
    return 'Berita berhasil ditemukan';
  }

  // Mendapatkan berita berdasarkan kategori
  findByCategory(category) {
    const filteredNews = this.newsData.filter(news => news.Kategori_Berita === category);
    return filteredNews;
  }
}

// Membuat objek News
const newsModel = new News();


// export class News
module.exports = News;
