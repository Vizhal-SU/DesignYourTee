import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('database.sqlite'); // Use a file-based database for persistent storage

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT UNIQUE, password TEXT)');
  db.run('CREATE TABLE IF NOT EXISTS cart (id INTEGER PRIMARY KEY, username TEXT, design TEXT, qty INTEGER DEFAULT 1, type TEXT DEFAULT "default", size TEXT DEFAULT "M")');
  // db.run('DROP TABLE IF EXISTS orders');
  db.run('CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY, username TEXT, address TEXT, city TEXT, state TEXT, zipCode TEXT, items OBJECT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)');
});

export default db;
