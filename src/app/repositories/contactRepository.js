const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Livia',
    email: 'livia@mail.com',
    phone: '1234-4567',
    category_id: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactRepository();
