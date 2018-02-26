"use strict";

const AgentChat = require('../lib/agentChat');

var chat = null;
var config = require('../config/config');

beforeEach(function() {
  chat = new AgentChat();
});

test('Get External IP', done => {
  function callback(err, data) {
    expect(data.ip).toMatch(/^\d+[.]\d+[.]\d+[.]\d+$/);
    done();
  }

  chat._getExternalIP(callback);
});