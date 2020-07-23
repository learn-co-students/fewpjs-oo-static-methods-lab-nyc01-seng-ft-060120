class Formatter {
    static capitalize(string) {
        return string.replace(/(^\w)/, (match) => match.toUpperCase())
    }

    static sanitize(string) {
      return string.replace(/[^A-Za-z0-9-' ]+/g, '')
    }

    static titleize(string) {
        let exclude = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from'];
        let newString = string.replace(/\b(\w+)/g, (word) => {
          if (exclude.includes(word)) {
            return word;
          } else {
            return this.capitalize(word);
          }
        })
        return this.capitalize(newString)
    }


}