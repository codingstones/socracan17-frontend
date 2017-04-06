function onOpen(event) {
  console.log('CONNECTED', event);
}

function onMessage(event) {
  console.log('Message received', event);
}

function onClose(event) {
  console.log('CLOSED', event);
}

function onError(event) {
  console.log('Error', event);
}

export class WebSocketService {

  constructor() {
    this.websocket = this.connect();
  }

  send(message) {
    this.websocket.send(message);
  }

  connect() {
    const websocket = new WebSocket('ws://echo.websocket.org/');
    websocket.onopen = onOpen;
    websocket.onmessage = onMessage;
    websocket.onclose = onClose;
    websocket.onerror = onError;
    return websocket;
  }
}



