/**
 * mod97 function for large numbers
 *
 * @param str     The number as a string.
 * @return        The number mod 97.
 */
function _txtMod97(str) {
  var res = 0;
  for (var i = 0; i < str.length; i++) {
    res = (res * 10 + parseInt(str[i], 10)) % 97;
  }
  return res;
}

/**
 * Checks if an IBAN is valid (no country specific checks are done).
 *
 * @param iban        The IBAN to check.
 * @return            True, if the IBAN is valid.
 */
function isIBANValid(iban) {
  var ibrev = iban.substr(4) + iban.substr(0, 4);
  return _txtMod97(_replaceChars(ibrev)) == 1;
}

/**
 * Replace letters with numbers using the SEPA scheme A=10, B=11, ...
 * Non-alphanumerical characters are dropped.
 *
 * @param str     The alphanumerical input string
 * @return        The input string with letters replaced
 */
function _replaceChars(str) {
  var res = '';
  for (var i = 0; i < str.length; i++) {
    var cc = str.charCodeAt(i);
    if (cc >= 65 && cc <= 90) {
      res += (cc - 55).toString();
    } else if (cc >= 97 && cc <= 122) {
      res += (cc - 87).toString();
    } else if (cc >= 48 && cc <= 57) {
      res += str[i];
    }
  }
  return res;
}

module.exports = isIBANValid;
