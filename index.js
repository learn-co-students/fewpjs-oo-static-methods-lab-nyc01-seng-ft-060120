 class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase().concat(string.slice(1))
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, "");
  }

  static titleize(string) {
    const smallWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = []
    let words = string.split(' ')
    result.push(this.capitalize(words[0]));
    let i = 1
    while(i  < words.length) {
      if(smallWords.includes(words[i])){
        result.push(words[i])
      } else {
        result.push(this.capitalize(words[i]));
      }
      i++
    }
    return result.join(' ')
  }
}