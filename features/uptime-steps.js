const assert = require('assert');
const { setWorldConstructor, Given, When, Then } = require('@cucumber/cucumber');

const uptime = require('../dist/index')

setWorldConstructor(function (options) {
  function createWorld() {
    let data = {}
    return {
      data,
    }
  }
  this.world = createWorld();
})

Given('the uptime-v2 package is required', function () {
  assert.ok(uptime);
});

When('the toHHMMSS method is called', function () {
  this.world.data.response = uptime.toHHMMSS()
})

Then('the response matches the HH:MM:SS format', function () {
  const response = this.world.data.response
  assert.match(response, /[0-9][0-9]:[0-9][0-9]:[0-9][0-9]/)
})

