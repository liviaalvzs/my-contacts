const contactsRepository = require('../repositories/contactRepository');

class ContactController {
  async index(request, response) {
    // lista todos os registros
    const contacts = await contactsRepository.findAll();
    response.json(contacts);
  }

  show() {
    // obtem um registro
  }

  store() {
    // cria novo registro
  }

  update() {
    // atualiza registro
  }

  delete() {
    // deleta registro
  }
}

module.exports = new ContactController();
