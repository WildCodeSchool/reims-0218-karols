"use strict"

const allPreparations = [
  {
    id: 1,
    selected: false,
    count: 0,
    image: "http://localhost:8000/images/preparation1.1.png",
    info: "https://www.mille-et-une-bieres.fr/les-boutiques/boutique-de-reims/",
    titlePreparation:
      "Maquillage' focus sur un élément' ou 'effet bonne mine' (au choix)"
  },
  {
    id: 2,
    selected: false,
    count: 0,
    image: "http://mille-et-une-bieres-champigny.business.site/",
    info:
      "https://www.1jour1vin.com/fr/vin-champagne?s=GOOGLE-RWD&o=295&p=2&v=wmPr87&gclid=CjwKCAjw68zZBRAnEiwACw0eYRL1riv_mm8L8uRt-zi9RK1rolzk73MRDXJo2mfMnEFP2taCbpUTQRoCMAEQAvD_BwE",
    titlePreparation: "Maquillage KAROLS"
  },
  {
    id: 3,
    selected: false,
    count: 0,
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5aa1d44d3153feb30a3ac5dbf9bbccd3&auto=format&fit=crop&w=1051&q=80",
    titlePreparation: "Maquillage ultime",
    info: "https://your-cbd-store.jimdofree.com/"
  },
  {
    id: 1,
    selected: false,
    count: 0,
    image: "http://localhost:8000/images/preparation2.1.png",
    info:
      "https://www.vinatis.com/spiritueux-vodka#p1&n15&t7&f[]73[]190577:f[]27[]11427[]s",
    titlePreparation: "Coiffure stylisée"
  },
  {
    id: 2,
    selected: false,
    count: 0,
    image: "http://localhost:8000/images/preparation2.2.jpg",
    info:
      "https://www.wildness.fr/lancer-de-haches/?gclid=CjwKCAjw68zZBRAnEiwACw0eYajjlmS25u_as-TS4g-mMReBSk90FEYk2CVuzZpN3DtwNGx0Yy3RbhoCZ8sQAvD_BwE",
    titlePreparation: "Coiffure stylisée élaborée"
  },
  {
    id: 3,
    selected: false,
    count: 0,
    image: "http://localhost:8000/images/preparation2.3.png",
    titlePreparation: "Coiffure stylisée très élaborée"
  },
  {
    id: 1,
    selected: false,
    count: 0,
    image: "http://localhost:8000/images/preparation3.1.png",
    titlePreparation: "Coupe classique",
    duration: {
      minutes: 20
    },
    price: 16
  },
  {
    id: 2,
    selected: false,
    count: 0,
    image: "http://localhost:8000/images/preparation3.2.png",
    titlePreparation: "Coupe très stylisée",
    duration: {
      minutes: 30
    },
    price: 24
  },
  {
    id: 1,
    selected: false,
    count: 0,
    image: "http://localhost:8000/images/preparation7.jpg",
    titlePreparation: "Pose de vernis au choix",
    duration: {
      minutes: 10
    },
    price: 7.5
  },
  {
    id: 1,
    selected: false,
    count: 0,
    image: "http://localhost:8000/images/preparation10.png",
    titlePreparation: "Coupe 1",
    duration: {
      minutes: 20
    },
    price: 16
  },
  {
    id: 1,
    selected: false,
    count: 0,
    image: "http://localhost:8000/images/preparation11.png",
    info: "http://palf.free.fr/portrait/vocabulaire.htm",
    titlePreparation: "Barbe 1",
    duration: {
      minutes: 20
    },
    price: 16
  }
]

module.exports.id = "CREATE-PREPARATIONS"

module.exports.up = function(done) {
  // use this.db for MongoDB communication, and this.log() for logging
  const preparations = this.db.collection("preparations")

  allPreparations.forEach(preparation => {
    preparations.insert(preparation, done)
  })
}

module.exports.down = function(done) {
  // use this.db for MongoDB communication, and this.log() for logging
  const preparations = this.db.collection("preparations")
  preparations.remove({}, done)
}
