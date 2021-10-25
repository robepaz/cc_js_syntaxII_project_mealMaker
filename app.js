const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
    },
    set appetizers(appetizerIn) {

    },
    
    get mains() {
    },
    set mains(mainIn) {

    },

    get desserts() {
    },
    set desserts(dessertIn) {

    },

    get courses () {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    }
  }