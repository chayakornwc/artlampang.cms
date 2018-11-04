require('dotenv').config();
let MONGO_URI = '';
let ADMIN_MIGRATION = '';
if (process.env.NODE_ENV === 'production') {
    MONGO_URI = process.env.MONGO_URI
    ADMIN_MIGRATION = process.env.ADMIN_MIGRATION;
} else {
    MONGO_URI = 'mongodb://127.0.0.1:27017/artlampang';
   ADMIN_MIGRATION = [{ 'name.first': 'Admin', 'name.last': 'User', 'email': 'chayakornwc', 'password': 'password', 'isAdmin': true }],
}

module.exports = {
  'process.env.MONGO_URI': MONGO_URI,
  'process.env.ADMIN_MIGRATION':ADMIN_MIGRATION
}
