// class StaticMethod{
//   static methodName(){
//     console.log('My method is static!');
//   }
// }
// ClassName.methodName(); // '.this' references the class



// class Formatter {
//   static capitalize(str){
//     str[0].toUpperCase()
//   }

//   static sanitize(str){
//     // ... I don't have time to figure out regx or algorithms for a lab. I have two projects and a test next week...
//   }
// }

class Formatter {
  static capitalize( string ) {
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 )
  }

  static sanitize( string ) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize( sentence ) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = sentence.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
}