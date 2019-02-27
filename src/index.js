/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

  let count=0;
  for(let a=1;a<=preferences.length;a++){
      for(let b=a+1;b<=preferences.length;b++){
          for(let c=a+1;c<=preferences.length;c++){
              if(a===preferences[c-1] && preferences[a-1]===b && preferences[b-1]===c){
                  count++;
              }
          }
      }
  }
  return count;
};
