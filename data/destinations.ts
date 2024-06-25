
interface Destination {
  name: string
  title: string
  intro: string
  whatToSee: string
  whatToDo: string
  whereToStay: string
  mustSee: string
  howToMove: string
  daysToStay: string
  bestTimeToVisit: string
  whereToEat: string
  recommendedBudget: string
  photo: string
}

export const destinations: Record<string, Destination> = {
  shanghai: {
    name: "Shanghai",
    title: "Discover Shanghai",
    intro:
      "Shanghai, China's largest city and a global financial hub, is renowned for its modern skyline and historical landmarks.",
    whatToSee: "The Bund, Shanghai Tower, Yu Garden...",
    whatToDo:
      "Explore the French Concession, visit museums, enjoy river cruises...",
    whereToStay: "Luxurious hotels, boutique hostels, budget accommodations...",
    mustSee: "Nanjing Road, Oriental Pearl Tower...",
    howToMove: "Metro, buses, taxis, walking...",
    daysToStay: "3-5 days",
    bestTimeToVisit: "Spring and autumn",
    whereToEat: "Local eateries, street food, fine dining...",
    recommendedBudget: "$70-$150 per day",
    photo: "/destination-2.jpg",
  },
  beijing: {
    name: "Beijing",
    title: "Discover Beijing",
    intro:
      "Beijing, the capital of China, is a city rich in history and culture...",
    whatToSee: "The Great Wall, Forbidden City, Summer Palace...",
    whatToDo: "Visit historical sites, explore Hutongs, enjoy Peking Opera...",
    whereToStay: "Downtown hotels, budget hostels, luxury resorts...",
    mustSee: "Tiananmen Square, Temple of Heaven...",
    howToMove: "Subway, buses, taxis, bicycles...",
    daysToStay: "5-7 days",
    bestTimeToVisit: "Spring and autumn",
    whereToEat: "Local restaurants, street food, fine dining...",
    recommendedBudget: "$50-$100 per day",
    photo: "/beijing.jpg",
  },
  xian: {
    name: "Xi'an",
    title: "Discover Xi'an",
    intro:
      "Xi'an, an ancient city in China, is known for its rich history and the famous Terracotta Army.",
    whatToSee: "Terracotta Army, City Wall, Big Wild Goose Pagoda...",
    whatToDo: "Explore ancient sites, visit museums, enjoy local culture...",
    whereToStay: "Traditional inns, modern hotels, budget hostels...",
    mustSee: "Muslim Quarter, Shaanxi History Museum...",
    howToMove: "Buses, taxis, bicycles, walking...",
    daysToStay: "2-4 days",
    bestTimeToVisit: "Spring and autumn",
    whereToEat: "Local restaurants, street food, traditional eateries...",
    recommendedBudget: "$40-$90 per day",
    photo: "/xian.jpg",
  },
  chengdu: {
    name: "Chengdu",
    title: "Discover Chengdu",
    intro:
      "Chengdu, the capital of Sichuan province, is famous for its cuisine and the giant pandas.",
    whatToSee:
      "Chengdu Research Base of Giant Panda Breeding, Wuhou Shrine, Jinli Ancient Street...",
    whatToDo:
      "Visit panda bases, enjoy Sichuan cuisine, explore ancient streets...",
    whereToStay: "Boutique hotels, budget hostels, luxury resorts...",
    mustSee: "Kuanzhai Alley, Mount Qingcheng...",
    howToMove: "Metro, buses, taxis, walking...",
    daysToStay: "3-5 days",
    bestTimeToVisit: "Spring and autumn",
    whereToEat: "Sichuan restaurants, street food, fine dining...",
    recommendedBudget: "$50-$100 per day",
    photo: "/chengdu.jpg",
  },
  zhangjiajie: {
    name: "Zhangjiajie",
    title: "Discover Zhangjiajie",
    intro:
      "Zhangjiajie, known for its stunning sandstone pillars, inspired the floating mountains in the movie Avatar.",
    whatToSee:
      "Zhangjiajie National Forest Park, Tianmen Mountain, Glass Bridge...",
    whatToDo: "Hiking, sightseeing, adventure activities...",
    whereToStay: "Nature resorts, budget hotels, luxury accommodations...",
    mustSee: "Avatar Hallelujah Mountain, Tianzi Mountain...",
    howToMove: "Buses, taxis, cable cars...",
    daysToStay: "2-4 days",
    bestTimeToVisit: "Spring and autumn",
    whereToEat: "Local eateries, street food, hotel dining...",
    recommendedBudget: "$60-$120 per day",
    photo: "/zhangjiajie.jpg",
  },
  greatwall: {
    name: "Great Wall of China",
    title: "Discover The Great Wall",
    intro:
      "The Great Wall of China, one of the Seven Wonders of the World, stretches across northern China and is a must-see landmark.",
    whatToSee: "Mutianyu, Badaling, Jinshanling sections...",
    whatToDo: "Hiking, photography, historical exploration...",
    whereToStay: "Nearby hotels, guesthouses, luxury resorts...",
    mustSee: "Watchtowers, ancient sections, scenic views...",
    howToMove: "Tour buses, private cars, hiking...",
    daysToStay: "1-2 days",
    bestTimeToVisit: "Spring and autumn",
    whereToEat: "Local restaurants, nearby eateries, hotel dining...",
    recommendedBudget: "$30-$80 per day",
    photo: "/great-wall.jpg",
  },
}
