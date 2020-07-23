class Formatter {
  //add static methods here

  static capitalize(string) {
    
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]+/g, '')
  }


  static titleize( string ) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let words = string.split( " " )
    for ( let n = 0; n < words.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( words[ n ] ) )
      } else {
        if ( exceptions.includes( words[ n ] ) ) {
          result.push( words[ n ] )
        } else {
          result.push( this.capitalize( words[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
}