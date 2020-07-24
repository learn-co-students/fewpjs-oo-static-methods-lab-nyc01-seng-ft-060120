class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = []
    let words = string.split(' ')
    result.push(this.capitalize(words[0]))
    for (let i = 1; i < words.length; i++) {
      if(exceptions.includes(words[i])){
        result.push(words[i])
      } else {
        result.push(this.capitalize(words[i]));
      }
    }
    return result.join(' ')
  }
}