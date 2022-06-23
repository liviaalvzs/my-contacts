class ContactController {
  index(request, response) {
    // lista todos os registros
    response.send('Send from Contact Controller');
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
