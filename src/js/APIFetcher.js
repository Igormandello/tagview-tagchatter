function APIFetcher(apiUrl) {
  this.fetchParrotsCount = function() {
    return fetch(apiUrl + '/messages/parrots-count')
      .then(function(response) {
        return response.json();
      });
  }

  this.listMessages = function() {
    // Faz um request para a API de listagem de mensagens
    // Atualiza a o conteúdo da lista de mensagens
    // Deve ser chamado a cada 3 segundos
  }

  this.parrotMessage = function(messageId) {
    // Faz um request para marcar a mensagem como parrot no servidor
    // Altera a mensagem na lista para que ela apareça como parrot na interface
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