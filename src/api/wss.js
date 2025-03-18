class DBCRequest {
  ws;
  keepAlive = true;
  wsOpened = false;
  // url: string = "wss://infotest2.dbcwallet.io";
  url = 'wss://info1.dbcwallet.io';
  constructor(keepAlive = true) {
    this.ws = new WebSocket(this.url);
    this.keepAlive = keepAlive;
    this.ws.onclose = () => {
      this.wsOpened = false;
    };
  }
  _send(method, params = []) {
    return new Promise(resolve => {
      const sendParam = {
        jsonrpc: "2.0",
        id: 1,
        method,
        params
      };
      this.ws.send(JSON.stringify(sendParam));
      this.ws.onmessage = evt => {
        resolve(JSON.parse(evt.data).result);
        if (!this.keepAlive) {
          this.ws.close();
        }
      };
    });
  }
  send(method, params = []) {
    return new Promise(resolve => {
      if (this.wsOpened) {
        this._send(method, params).then(resolve);
      } else {
        this.ws = new WebSocket(this.url);
        this.ws.onopen = () => {
          this.wsOpened = true;
          this._send(method, params).then(resolve);
        };
      }
    });
  }
  sendUnique(method, params = []) {
    this.ws = new WebSocket(this.url);
    this.wsOpened = false;
    this.ws.onclose = () => {
      this.wsOpened = false;
    };
    return this.send(method, params);
  }
}

const request = new DBCRequest();

export const getRewardInfo = async () => {
  return request.sendUnique("onlineProfile_getOpInfo");   
};
