const products = [
    {   
      id:1,
      name: "North Reach",
      description: "Lively and playful, this 3-strut allrounder has unparalleled versatility and wind range. Big jumps. Upwind performance. Effortless relaunch. For 2022 we’ve introduced a new lighter Dacron exo-skeleton in every size and revised the arc design for a crisper, snappier response, more direct steering and more dynamic recovery. Still nimble and easy to ride, but now with a cleaner profile that’s even more stable in kite loops, the Reach is your go-to kite in all conditions.",
      cost: "1579",
      stock: 100,
      image:[
          "https://firebasestorage.googleapis.com/v0/b/kiteplace.appspot.com/o/1.png?alt=media&token=478ec8a1-c74d-4f64-b970-53d5952b0ef1"
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
        description: "The explosive pop, powerful fast turns and responsive steering of our high-performance Hybrid-C kite will set your heart pumping. The Pulse comes alive in unhooked Freestyle, and makes landing even the most technical tricks instinctive. Its upright, low sweep design ensures the twist introduced by the steering impulse goes much deeper into the centre of the kite, so it turns throughout the entire canopy and the power delivery is constant through the entire loop.",
        cost: "1549",
        stock: 50,
        image: [
          "https://firebasestorage.googleapis.com/v0/b/kiteplace.appspot.com/o/2.png?alt=media&token=686bb61d-0106-4e70-a984-54de22101647"
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
        description: "Committing to overpowered airs and megaloops in gusty conditions demands an unwavering trust in your kite. Our iconic premier 5-strut kite delivers incredible top-end control and allows you to hold down more power than any other kite per square metre. Big jumps. Big hang time. Big wind range. This kite was designed to rocket you upwind fast, with effortless steering, extreme boosting and hangtime guaranteed to take your breath away. Tested by nature, proven on the podium.",
        cost: "1339",
        stock: 200,
        image: [
          "https://firebasestorage.googleapis.com/v0/b/kiteplace.appspot.com/o/3.png?alt=media&token=bb7ea33e-a450-4c60-91d3-ffa8789513a2"
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
        description: "Powerful, reactive and controllable, the Carve powers on and off instantly, so you can stay in the pocket for longer and out of the critical impact zone. Featuring a sensory pivot turn for control and huge depower range, the Carve gives you the confidence to focus on surfing - onshore, offshore and anything in between. Strong surf-freestyle characteristics help you perform strapless tricks and lofty jumps with ease, and enhanced down the line drift makes this versatile kite perfect for carving and tucking into a barrel. For 2022 we’ve further reduced the weight and improved the behavior of the kite.",
        cost: "1469",
        stock: 500,
        image:[
          "https://firebasestorage.googleapis.com/v0/b/kiteplace.appspot.com/o/4.png?alt=media&token=717eea2c-e8ad-451c-814f-ee38ecbae2a3",
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
        description: "Instantly familiar, intuitive and comfortable, the Prime helps you progress faster in your freeride game. A sweet performer in all wind and water conditions, it tracks upwind smoothly and slices splash-free through the chop. Jump and boost in full control, with forgiving landings thanks to the softer flex. Ride in tune with nature, in tune with yourself.",
        cost: "529",
        stock: 40,
        image:[
          "https://firebasestorage.googleapis.com/v0/b/kiteplace.appspot.com/o/5.png?alt=media&token=0f194a0c-e152-4a02-b43e-2cce007efd48",
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
        description: "Carve up the park. Slice the flats. Hold your rail upwind. The Flare is designed for advanced riders to slide between kite and park with maximum pop, and never catch a rail again. Its high wakestyle rocker helps to soften your impact on landings. PressFlex tips enable smooth, controlled presses. Rotate, slide and spin. The durable low-friction P-tex base won't stick when you hit that kicker or obstacle. It’s Tom Bridge’s freestyle stick of choice and quite possibly the most durable board in the park.",
        cost: "729",
        stock: 80,
        image:[
          "https://firebasestorage.googleapis.com/v0/b/kiteplace.appspot.com/o/7.png?alt=media&token=b668a033-2357-4036-b89b-3af8cacc4ac7",
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
        description: "Explosive pop. Dynamic Flex. Precise Response. The Focus Hybrid Carbon is precisely engineered to push the boundaries of performance freestyle riding. Greater traction allows you to hold that rail and edge harder, while the geometrically stiffer backbone enables more controlled take-offs. The hybrid carbon technology features unidirectional carbon reinforcement tapes for a well-balanced and responsive flex, so you can ride for longer, with flow and form. Butter-soft tips reduce the impact load on landings and slice through chop.",
        cost: "699",
        stock: 110,
        image:[
          "https://firebasestorage.googleapis.com/v0/b/kiteplace.appspot.com/o/6.png?alt=media&token=59abaaef-ced1-41e8-9b31-94525c756763",
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
        description: "Our most popular high-performance Freeride board for explosive boosting, looping and stable, predictable landings. The Atmos is powerful upwind with precise edge control. Strategically placed layers of unidirectional carbon tape in the hybrid construction help deliver a well-balanced dynamic flex. Designed to ride overpowered with ease and control, yet still enabling early planing and low-end performance. The harmony between medium rocker, progressive outline and flex makes this the ultimate all-terrain board to take you to the next level, in all conditions. Edge harder and release into Earth's atmosphere.",
        cost: "699",
        stock: 210,
        image:[
          "https://firebasestorage.googleapis.com/v0/b/kiteplace.appspot.com/o/8.png?alt=media&token=a604ffd7-5347-480d-ad4c-478e2056f54b",
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
        description: "Let the Seek wing-foil board take you places you’ve never been. Upwind, downwind, ocean roller or lake. Wherever you fly, whatever adventure you take. Engineered for performance. Early take-offs. Effortless touchdown recovery. The Seek provides you with an intuitive and direct connection to your hydrofoil, becoming an extension of you – the rider. It has an ultra-lightweight yet durable hybrid carbon construction that is stiff, responsive and maneuverable and it’s precisely-balanced distribution of volume means that no matter whether you’re in displacement mode, skimming or foiling, your stance remains in the same position - no shuffling required. Because every movement counts. Try it. Land it. Or pump it.",
        cost: "1349",
        stock: 120,
        image:[
          "https://firebasestorage.googleapis.com/v0/b/kiteplace.appspot.com/o/9.png?alt=media&token=058c968f-b2c4-442f-b9c0-f9bf29ed7b7f",
        ],
        categoryId: 3,
        category: {
          name: "foils",
          id:3
        },
        brand: "North Kiteboarding",
    },  
    { 
        id:10,
        name: "North Sense",
        description: "Step up your foiling game on the water with roll to ride water starts, magic glide, fast set up and fuss-free travelling. The Sense offers intuitive modern technology, strength and performance in a user-friendly TwinTip-style foil board, with a lightweight and durable Paulownia wood core construction. For 2022 we’ve improved the board stiffness for an even more direct feel and control and we’ve introduced new Free-V Foil Strap inserts, giving you more flexibility with your foot placement when riding with straps. The max-grip cordoruoy deck pad provides a comfortable grip and visual stance referencing.",
        cost: "729",
        stock: 0,
        image:[
          "https://firebasestorage.googleapis.com/v0/b/kiteplace.appspot.com/o/10.png?alt=media&token=ec14b9e6-dccf-40e5-aa7e-2d1fcd328054",
        ],
        categoryId: 3,
        category: {
          name: "foils",
          id:3
        },
        brand: "North Kiteboarding",
    },
] 
  
  
  module.exports = {
    products,
  }