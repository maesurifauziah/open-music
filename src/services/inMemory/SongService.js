const { nanoid } = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');

class SongsService {
  constructor() {
    this.songs = [];
  }

  addSong({ title, year, genre, performer, duration, album_id }) {
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newSong = {
      title, year, genre, performer, duration, album_id, id, createdAt, updatedAt,
    };

    this.songs.push(newSong);

    const isSuccess = this.songs.filter((song) => song.id === id).length > 0;

    if (!isSuccess) {
      throw new InvariantError('Lagu gagal ditambahkan');
    }

    return id;
  }

  getSongs() {
    return this._songs;
  }

  getSongById(id) {
    const song = this._songs.filter((n) => n.id === id)[0];
    if (!song) {
      throw new NotFoundError('Lagu tidak ditemukan');
    }
    return song;
  }

  editSongById(id, { title, year, genre, performer, duration, album_id }) {
    const index = this._songs.findIndex((song) => song.id === id);
 
    if (index === -1) {
      throw new NotFoundError('Gagal memperbarui song. Id tidak ditemukan');
    }
 
    const updatedAt = new Date().toISOString();
 
    this._songs[index] = {
      ...this._songs[index],
      title,
      year, 
      genre, 
      performer, 
      duration,
      album_id,
      updatedAt,
    };
  }

  deleteSongById(id) {
    const index = this._songs.findIndex((song) => song.id === id);
    if (index === -1) {
      throw new NotFoundError('Lagu gagal dihapus. Id tidak ditemukan');
    }
    this._songs.splice(index, 1);

  }

}

module.exports = SongsService;
