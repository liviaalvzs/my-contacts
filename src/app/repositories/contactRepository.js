const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Livia',
    email: 'livia@mail.com',
    phone: '1234-4567',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Raphael',
    email: 'rapha@mail.com',
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

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }
}

module.exports = new ContactRepository();
