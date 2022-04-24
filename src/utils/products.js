const products = [
    {   
      id:1,
      name: "North Reach",
      description: "Lively and playful, this 3-strut allrounder has unparalleled versatility and wind range. Big jumps. Upwind performance. Effortless relaunch.",
      cost: "2300",
      stock: 100,
      image:[
          "https://www.jupiterkiteboarding.com/store/images/2021-north-reach-kite-yellow__1000.jpg"
        ],
      categoryId: 1,
      category: {
        name: "kites",
        id:1
      },
      brand: "North Kiteboarding",
    },
    {   
        id:2,
        name: "North Pulse",
        description: "The explosive pop, powerful fast turns and responsive steering of our high-performance Hybrid-C kite will set your heart pumping. The Pulse comes alive in unhooked Freestyle, and makes landing even the most technical tricks instinctive",
        cost: "2200",
        stock: 50,
        image: [
          "https://hawaiiansurfing.com/wp-content/uploads/sites/11/2019/07/North-Pulse-blue-2021.png"
        ],
        categoryId: 1,
        category: {
          name: "kites",
          id:1
        },
        brand: "North Kiteboarding",
      },
    {
        id:3,
        name: "North Orbit",
        description: "Committing to overpowered airs and megaloops in gusty conditions demands an unwavering trust in your kite. Our iconic premier 5-strut kite delivers incredible top-end control and allows you to hold down more power than any other kite per square metre.",
        cost: "2400",
        stock: 200,
        image: [
          "https://www.tustablas.com/8765-tm_large_default/north-kiteboarding-orbit-2021-sea-green.jpg"
        ],
        categoryId: 1,
        category: {
          name: "kites",
          id:1
        },
        brand: "North Kiteboarding",
      },
    { 
        id:4,
        name: "North Carve",
        description: "Powerful, reactive and controllable, the Carve powers on and off instantly, so you can stay in the pocket for longer and out of the critical impact zone.",
        cost: "2150",
        stock: 500,
        image:[
          "https://www.tustablas.com/8781-tm_large_default/north-kiteboarding-carve-2021-sunset-red.jpg",
        ],
        categoryId: 1,
        category: {
          name: "kites",
          id:1
        },
        brand: "North Kiteboarding",
    },
    { 
        id:5,
        name: "North Prime",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        cost: "650",
        stock: 40,
        image:[
          "https://santatabla.com/shop/img/post/2053/prime-1.jpg",
        ],
        categoryId: 2,
        category: {
          name: "boards",
          id:2
        },
        brand: "North Kiteboarding",
    },
    { 
        id:6,
        name: "North Flare",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        cost: "450",
        stock: 80,
        image:[
          "https://santatabla.com/shop/img/post/2951/imagen_2022-02-21_164626.png",
        ],
        categoryId: 2,
        category: {
          name: "boards",
          id:2
        },
        brand: "North Kiteboarding",
    },
    { 
        id:7,
        name: "North Focus",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        cost: "850",
        stock: 110,
        image:[
          "https://www.kitemana.com/_images/h537/focus-2021-kiteboard-287248.jpg",
        ],
        categoryId: 2,
        category: {
          name: "boards",
          id:2
        },
        brand: "North Kiteboarding",
    },
    { 
        id:8,
        name: "North Atmos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        cost: "550",
        stock: 210,
        image:[
          "https://www.ozu-tarifa.com/wp-content/uploads/north-atmos-hybrid-2021-1.jpg",
        ],
        categoryId: 2,
        category: {
          name: "boards",
          id:2
        },
        brand: "North Kiteboarding",
    },
    { 
        id:9,
        name: "North Seek",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        cost: "1250",
        stock: 120,
        image:[
          "https://santatabla.com/shop/img/post/2996/tabla-north-sweet-2021.jpg",
        ],
        categoryId: 3,
        category: {
          name: "foils",
          id:3
        },
        brand: "North Kiteboarding",
    },
    /* { 
        id:10,
        name: "North Scoop",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        cost: "950",
        stock: 100,
        image:[
          "https://www.santatabla.com/shop/img/post/1569/tabla-north-scoop-2021-1.jpg",
        ],
        categoryId: 3,
        category: {
          name: "foils",
          id:3
        },
        brand: "North Kiteboarding",
    }, */
    { 
        id:11,
        name: "North Sense",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        cost: "850",
        stock: 0,
        image:[
          "https://www.ozu-tarifa.com/wp-content/uploads/north-sense-foil-board-2021-1000x1000.jpg",
        ],
        categoryId: 3,
        category: {
          name: "foils",
          id:3
        },
        brand: "North Kiteboarding",
    },
    /* { 
        id:12,
        name: "North Sweel",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        cost: "850",
        stock: 10,
        image:[
          "https://santatabla.com/shop/img/post/3014/sweell-boar.jpg",
        ],
        categoryId: 3,
        category: {
          name: "foils",
          id:3
        },
        brand: "North Kiteboarding",
    }  */
  ] 
  
  
  module.exports = {
    products,
  }