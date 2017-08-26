/**
 * Minergate API
 * *MinerGate is a mining pool created by a group of cryptocoin enthusiasts.*  It is the first pool which provides service for merged mining. This means that while mining on our pool you can mine different coins simultaniously without decrease of hashrate for major coin.  **If you are interested in cooperation drop a message to janikakouki@minergate.com.**  | Currency Name | Currency Code (cc) | | --- | --- | | Bitcoin | btc | | Litecoin | ltc | | Bytecoin | bcn | | Monero | xmr | | FantomCoin | fcn | | QuazarCoin | qcn | | DigitalNote | xdn | | MonetaVerde | mcn | | Dashcoin | dsh | | Aeon coin | aeon | | Infinium-8 | inf8 | 
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MinergateApi);
  }
}(this, function(expect, MinergateApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MinergateApi.WalletApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('WalletApi', function() {
    describe('getBalance', function() {
      it('should call getBalance successfully', function(done) {
        //uncomment below and update the code to test getBalance
        //instance.getBalance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTransfers', function() {
      it('should call getTransfers successfully', function(done) {
        //uncomment below and update the code to test getTransfers
        //instance.getTransfers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWithdrawals', function() {
      it('should call getWithdrawals successfully', function(done) {
        //uncomment below and update the code to test getWithdrawals
        //instance.getWithdrawals(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
