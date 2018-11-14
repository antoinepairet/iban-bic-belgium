const assert = require('assert');
const isIBANValid = require('./is-iban-valid');
const BICFromIBAN = require('./bic-from-iban');
assert.equal(isIBANValid('BE57063578217035'), true);
assert.equal(isIBANValid('Not a IBAN'), false);
assert.equal(BICFromIBAN('BE57063578217035'), 'GKCCBEBB');
