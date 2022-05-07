const products = [
  {
    id: "1",
    category: "shirt",
    title: "Diverse Men's Regular Formal Shirt",
    price: 1600,
    rating: 5,
    specification: [
      "Care Instructions: Machine Wash",
      "Fit Type: Regular",
      "Regular fit and Full sleeve shirt",
      "Pattern - Printed Men’s Formal Shirt",
      "Double yoke for extra durability & stiffness; Patch pocket at chest",
      "Machine wash",
      "Made in India",
      "Material: 100% Cotton",
    ],
    detail:
      "Crafted in a pure cotton fabric, this long-sleeved, regular-fit modern shirt offers superb comfort and an impeccable finish. A reliable option for business wear, the shirt features a modern kent collar and double button mitered cuffs, a shirttail hem and a chest patch pocket. Team with tailored trousers and blazer for a pared-back professional look.",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "2",
    category: "mobile",
    title: "REDMI Note 10 (Aqua Green, 64 GB)  (4 GB RAM)",
    price: 11500,
    rating: 3,
    specification: [
      "Display: FHD+ (1080x2400) AMOLED Dot display; 16.33 centimeters (6.43 inch); 20:9 aspect ratio",
      "Camera: 48 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens| 13 MP Front camera",
      "Battery: 5000 mAh large battery with 33W fast charger in-box and Type-C connectivity",
      "Processor: Qualcomm Snapdragon 678 with Kryo 460 Octa-core; 11nm process; Up to 2.2GHz clock speed",
      "Memory, Storage & SIM: 4GB RAM | 64GB UFS 2.2 storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)",
    ],
    detail:
      "‎Dual Stereo Speakers for immersive audio experience, The display is protected by Corning Gorilla Glass 3, 33W Fast Charger in box, 67% in 30 mins, 3.5mm Jack, IR Blaster, Dedicated Micro SD Slot, Z-Axis Linear Vibration Motor, 48 MP AI Quad Camera Setup 8MP Ultrawide-FOV 118 degrees 2 MP Macro Sensor 2 MP Depth Sensor Slow Motion Support - Up to 960 fps Portrait | Panaroma | Time Lapse | Pro Mode | Night Mode | Short Video Mode | Ultra wide-angle distortion correction | Custom Watermark | Document mode | HDR | AI scene detection | Video macro mode | Movie frame | Time burst | Google Lens| AI Watermark",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71OGzLCrjZS._SL1500_.jpg",
  },
  {
    id: "3",
    category: "tablet",
    title: "Lenovo Tab M10 HD 2nd Gen (10.1 inch, 4 GB, 64 GB, Wi-Fi+LTE)",
    price: 11000,
    rating: 4,
    specification: [
      "4 GB RAM | 64 GB ROM | Expandable Upto 256 GB",
      "25.65 cm (10.1 inch) HD Display",
      "8 MP Primary Camera | 5 MP Front",
      "Android 10 | Battery: 5000 mAh Lithium Polymer",
      "Processor: MediaTek Helio P22T Octa Core Processor",
    ],
    detail:
      "The 10.1” HD IPS panel with 400 nits brightness, TUV certification and narrow bezels pack a pixel-perfect visual experience, that’s also portable. The sleek profile and all-metal finish add on to the beauty. Rely on MediaTek Helio P22T Octa Core processor to keep things running faster and smoother. On top of that, Android 10 brings in features like dark theme, smart reply and focus mode.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41jdvXSoeyS._SL1000_.jpg",
  },
  {
    id: "4",
    title:
      "HP Pavilion Gaming 10th Gen Intel Core i5 Processor 16.1 (40.9 cms) FHD Gaming Laptop",
    price: 53000,
    category: "laptop",
    rating: 4,
    specification: [
      "2.5GHz Intel i5-10300H 10th Gen processor",
      "8GB DDR4 RAM",
      "1TB 7200rpm hard drive + 256GB SSD",
      "16-inch screen, NVIDIA GeForce GTX 1650 4GB Graphics",
      "Windows 10 Home operating system",
      "2.35kg laptop",
    ],
    detail:
      "It’s not just another gaming laptop, it’s THE gaming laptop. Obviously, the OMEN 15 has a powerful Intel® processor and NVIDIA® graphics in a compact frame. Did we mention it has a fast display and long battery life? Yeah, it has everything and you can take it even further with OMEN Gaming Hub. So, just enjoy those envious looks while you play, it’s only natural with a beautiful machine. The OMEN 15 is a perfect example of how there can never be too much of a good thing. With a powerful Intel® processor and NVIDIA® graphics cooled by OMEN Tempest Cooling, it makes you think how it all fits into such a tiny little package.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71FHcGAPevL._SL1498_.jpg",
  },
  {
    id: "7",
    title: "Easies by Killer Trouser,Ankle Length,E-16506 ANKLGHT NVNAVY,40",
    price: 1070,
    category: "trouser",
    rating: 4,
    specification: [
      "Care Instructions: Machine Wash",
      "Fit Type: Skinny",
      "Easies,Ankle Length",
      "Printed Trouser",
      "Item Package Weight: 410.0 grams",
    ],
    detail:
      "It's a igh quality product stitched with the softmost and toughest clothing material, Ready for fit in several occasions",
    image: "https://m.media-amazon.com/images/I/31QYXZdXqtL.jpg",
  },
  {
    id: "5",
    category: "footewear",
    title: "crocs Unisex-Adult Bayaband Clog",
    price: 500,
    rating: 4,
    specification: [
      "Closure: Pull-On",
      "Shoe Width: Regular",
      "Outer Material: EVA",
      "Closure Type: Slip On",
      "Toe Style: Round Toe",
      "Warranty Type: Manufacturer",
      "Warranty Description: 90 days",
    ],
    detail:
      "The product will be an excellent pick for you. It ensures an easy maintenance.",
    image:
      "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSDliYTdmNTViNWY4OTRlNDg4OGUwMzNiNDIyOGU1NWJhdC9OZXdiZWFkcy1Dcm9ja3MtQ3JvY3NlLVNhbmRhbHMtSG9sZS1TaG9lcy1Db3VwbGUtSG9tZS1TbGlwcGVycy1TdW1tZXItSG9sbG93LU91dC1TbWlsaW5nLUZhY2UtQnVja2xlLU1lbi5qcGc.jpg",
  },
  {
    id: "6",
    title:
      "LG 27 inch 4K-UHD (3840 x 2160) HDR 10 Monitor (Gaming & Design) with IPS Panel",
    price: 35000,
    category: "tv",
    rating: 5,
    specification: [
      "27 inch 4K UHD (3840 x 2160) Resoltion with HDR 10",
      "IPS Screen with 178/178 deg viewing angle with 300 nits brightness",
      "Color Calibrated Display with sRGB 99% and 1.07 Billion Color",
      "Radeon Freesync - Gaming Features - DAS Mode and Black Stablizer",
      "Connectivity: HDMI x 2 , Display Port & Headphone out",
      "VESA Wall Mount 100 x 100",
      "HDCP 2.2 for Displaying 4K Content from Streaming Service & Game Console",
    ],
    detail:
      "LG IPS display has extraordinary color accuracy, covering 98% of the sRGB color spectrum. It also has a wider viewing angle, so it's even easier to enjoy true color visuals. Radeon FreeSync reduces the tearing and stuttering that occur between a graphic card's frame rate and a monitor's refresh rate enabling smoother motion and less stuttering in demanding games.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },
  {
    id: "8",
    category: "groom",
    title: "Philips BT3231/15 Smart Beard Trimmer",
    price: 980,
    rating: 4,
    specification: [
      "Power adapt sensor for fast and precise trim that measures your beard density at 125 times/second and adapts to give constant power",
      "Tackles dense, bushy and long beards for a precise, even trim",
      "Up to 60 minutes cordless use after 1 hour charging; 5 min quick charge for use; battery indicator – low/full/empty/charging",
      "Up to 60 minutes cordless use after 1 hour charging; 5 min quick charge for use; battery indicator – low/full/empty/charging",
      "Long lasting performance - 2 plus 1 Year warranty after registration",
    ],
    detail:
      "Pick a new style every day! Take charge of your beard game with the Misfit collection.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd31jeknUCI7LxmuSO7v0QQiVBGzlcjvDaYQ&usqp=CAU",
  },
];

const items = [
  "All",
  "BestSeller",
  "Mobiles",
  "Prime",
  "Electronic",
  "Fashion",
  "New Releases",
  "Customer Service",
  "Amazon Pay",
  "Computers",
  "Home & Kitchen",
  "Today's Deals",
];

export { products, items };
