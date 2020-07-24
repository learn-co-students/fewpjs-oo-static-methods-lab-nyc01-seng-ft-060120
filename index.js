class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    let badWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let title = string.split(" ")
    title[0] = Formatter.capitalize(title[0])
    for (let i = 1; i < title.length; i++) {
      if (!badWords.includes(title[i])) {
        title[i] = Formatter.capitalize(title[i])
      }
    }
    return title.join(" ")
  }
}