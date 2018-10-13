function APIFetcher(apiUrl) {
  this.fetchParrotsCount = function() {
    return fetch(apiUrl + '/messages/parrots-count')
      .then(function(response) {
        return response.json();
      });
  }

  this.listMessages = function() {
    return fetch(apiUrl + '/messages')
      .then(function(response) {
        return response.json();
      });
  }

  this.changeParrotMessage = function(messageId, hasParrot) {
    let partialUrl = apiUrl + '/messages/' + messageId;
    if (hasParrot)
      return fetch(partialUrl + '/parrot', {
        method: 'PUT'
      });
    else
      return fetch(partialUrl + '/unparrot', {
        method: 'PUT'
      });
  }

  this.sendMessage = function(message, authorId) {
    // Manda a mensagem para a API quando o usuário envia a mensagem
    // Caso o request falhe exibe uma mensagem para o usuário utilizando Window.alert ou outro componente visual
    // Se o request for bem sucedido, atualiza o conteúdo da lista de mensagens
  }

  this.getMe = function() {
    return fetch(apiUrl + '/me')
      .then(function(response) {
        return response.json();
      });
  }
}

export default APIFetcher;