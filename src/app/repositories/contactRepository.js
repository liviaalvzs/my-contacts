const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Livia',
    email: 'livia@mail.com',
    phone: '1234-4567',
    category_id: uuid(),
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
