/*
 *  '.' Matches any single character.
    '*' Matches zero or more of the preceding element.

    The matching should cover the entire input string (not partial).

    The function prototype should be:
    bool isMatch(const char *s, const char *p)

    Some examples:
    isMatch("aa","a") → false
    isMatch("aa","aa") → true
    isMatch("aaa","aa") → false
    isMatch("aa", "a*") → true
    isMatch("aa", ".*") → true
    isMatch("ab", ".*") → true
    isMatch("aab", "c*a*b") → true
* */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if(s === p){
    return true
  }

  if(s === '.*' || p === '.*'){
    return true
  }

  var match_status = false;

  if(s[0] !== '*' && p[0] !== '*' && s.indexOf('**') === -1 && p.indexOf('**') === -1){

    var s_point = 0;
    var p_point = 0;


    while(s_point < s.length && p_point < p.length){
      if(s[s_point] === p[p_point] || s[s_point] === '.' || p[p_point] === '.'){
        s_point ++;
        p_point ++;
      }else if(s[s_point] === '*'){
        while(p_point < p.length && p[p_point] === p[p_point - 1]){
          p_point ++;
        }
      }else if(p[p_point] === '*'){
        while(s_point < s.length && s[s_point] === s[s_point - 1]){
          s_point ++;
        }
      }else if(s[s_point] !== p[p_point]){
        break
      }
    }

    if((p_point === p.length && s[s_point] === '*') || (s_point = s.length && p[p_point] === '*')){
      match_status = true
    }

  }

  if (match_status) {return match_status}
  return false
};