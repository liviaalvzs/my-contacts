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

  async store(request, response) {
    // cria novo registro
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'name is required' });
    }

    const contactExists = await contactsRepository.findByEmail(email);
    if (contactExists) {
      return response.status(400).json({ error: 'this email is already in use' });
    }

    const contact = await contactsRepository.create({
      name, email, phone, category_id,
    });

    response.json(contact);
  }

  async update(request, response) {
    // atualiza registro
    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;

    // verificação se o id existe
    const contactExists = await contactsRepository.findById(id);
    if (!contactExists) {
      return response.status(400).json({ error: 'user not found' });
    }

    // verifica se o nome foi passado
    if (!name) {
      return response.status(400).json({ error: 'name is required' });
    }

    // verifica se e-mail ja existe em outro registro
    const contactExistsbyEmail = await contactsRepository.findByEmail(email);
    if (contactExistsbyEmail && contactExistsbyEmail.id !== id) {
      return response.status(400).json({ error: 'this email is already in use' });
    }

    const contact = await contactsRepository.update(id, {
      name, email, phone, category_id,
    });

    response.json(contact);
  }

  async delete(request, response) {
    // deleta registro
    const { id } = request.params;

    const contact = await contactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'user not found' });
    }

    await contactsRepository.delete(id);
    // eslint-disable-next-line max-len
    response.sendStatus(204); // no content, same as 200 (ok!) but when request is ok but without body
  }
}

module.exports = new ContactController();
