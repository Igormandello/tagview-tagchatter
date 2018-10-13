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

  this.sendMessage = function(message, author_id) {
    return fetch(apiUrl + '/messages', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message,
        author_id
      })
    });
  }

  this.getMe = function() {
    return fetch(apiUrl + '/me')
      .then(function(response) {
        return response.json();
      });
  }
}

export default APIFetcher;