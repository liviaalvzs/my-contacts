const contactsRepository = require('../repositories/contactRepository');

class ContactController {
  async index(request, response) {
    // lista todos os registros
    const contacts = await contactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    // obtem um registro
    const { id } = request.params;
    const contact = await contactsRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(contact);
  }

  store() {
    // cria novo registro
  }

  update() {
    // atualiza registro
  }

  async delete(request, response) {
    // deleta registro
    const { id } = request.params;

    const contact = await contactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    await contactsRepository.delete(id);
    // eslint-disable-next-line max-len
    response.sendStatus(204); // no content, same as 200 (ok!) but when request is ok but without body
  }
}

module.exports = new ContactController();
