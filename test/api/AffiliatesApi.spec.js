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
    instance = new MinergateApi.AffiliatesApi();
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

  describe('AffiliatesApi', function() {
    describe('getAffiliateChildren', function() {
      it('should call getAffiliateChildren successfully', function(done) {
        //uncomment below and update the code to test getAffiliateChildren
        //instance.getAffiliateChildren(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAffiliateLinks', function() {
      it('should call getAffiliateLinks successfully', function(done) {
        //uncomment below and update the code to test getAffiliateLinks
        //instance.getAffiliateLinks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAffiliateProfit', function() {
      it('should call getAffiliateProfit successfully', function(done) {
        //uncomment below and update the code to test getAffiliateProfit
        //instance.getAffiliateProfit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
