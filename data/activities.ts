export interface ActivityItem {
  id: string
  name: string
  title: string
  imgUrl: string
  howToGetThere: string
  price: string
  nearestCity: string
  description: string
}

export const activities: ActivityItem[] = [
  {
    id: "terracotta-warriors",
    name: "Xi'an",
    title: "Terracotta Warriors",
    imgUrl: "/terracotta-warriors.jpg",
    howToGetThere: "Take a bus or taxi from Xi'an city center",
    price: "$25",
    nearestCity: "Xi'an",
    description:
      "Discover the famous Terracotta Warriors, a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China.",
  },
  {
    id: "disney-shanghai",
    name: "Shanghai",
    title: "Disneyland",
    imgUrl: "/disney-shangai.jpeg",
    howToGetThere: "Take Metro Line 11 to Disneyland Resort station",
    price: "$65",
    nearestCity: "Shanghai",
    description:
      "Enjoy a magical day at Disneyland Shanghai, the happiest place on earth with a Chinese twist.",
  },
  {
    id: "universal-studios-beijing",
    name: "Beijing",
    title: "Universal Studios",
    imgUrl: "/universal-studios-beijing.jpg",
    howToGetThere: "Take Metro Line 7 to Universal Resort station",
    price: "$75",
    nearestCity: "Beijing",
    description:
      "Experience the thrill of your favorite movies at Universal Studios Beijing.",
  },
  {
    id: "li-river-cruise",
    name: "Guilin",
    title: "Li River Cruise",
    imgUrl: "/li-river-cruise.jpeg",
    howToGetThere: "Boats depart from Guilin city",
    price: "$50",
    nearestCity: "Guilin",
    description:
      "Take a relaxing cruise along the picturesque Li River, known for its stunning karst mountain scenery.",
  },
  {
    id: "forbidden-city",
    name: "Beijing",
    title: "Forbidden City",
    imgUrl: "/forbidden-city.avif",
    howToGetThere:
      "Take Metro Line 1 to Tiananmen East or Tiananmen West station",
    price: "$10",
    nearestCity: "Beijing",
    description:
      "Explore the Forbidden City, the former Chinese imperial palace from the Ming dynasty to the end of the Qing dynasty.",
  },
  {
    id: "potala-palace",
    name: "Lhasa",
    title: "Potala Palace",
    imgUrl: "/potala-palace.jpeg",
    howToGetThere: "Accessible by taxi or local bus from Lhasa",
    price: "$30",
    nearestCity: "Lhasa",
    description:
      "Visit the Potala Palace, a fortress-like palace that served as the winter residence of the Dalai Lamas.",
  },
]
