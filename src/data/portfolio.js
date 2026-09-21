export const categories = [
  "All",
  "Fine Line",
  "Realism",
  "Black & Grey",
  "Custom & Script",
  "Illustrative",
  "Cover-Up",
];

export const tattooImages = [
  { id: "t1", src: "/Website/IMG_2088.webp", alt: "Lord shiv tattoo" },
  { id: "t2", src: "/Website/IMG_2089.webp", alt: "Realism tattoo Gurgaon" },
  { id: "t3", src: "/Website/IMG_2090.webp", alt: "Japanese tattoo" },
  { id: "t4", src: "/Website/IMG_2094.webp", alt: "Bio organic tattoo" },
  { id: "t5", src: "/Website/IMG_2095.webp", alt: "" },
  { id: "t6", src: "/Website/IMG_4727.JPG.webp", alt: "" },
  { id: "t7", src: "/Website/IMG_4733.JPG.webp", alt: "Portrait tattoo Gurgaon" },
  { id: "t8", src: "/Website/IMG_4964.JPG.webp", alt: "" },
  { id: "t9", src: "/Website/IMG_4965.JPG.webp", alt: "Colour tattoo" },
  { id: "t10", src: "/Website/IMG_4967.JPG.webp", alt: "Animal tattoo" },
  { id: "t11", src: "/Website/IMG_4972.JPG.webp", alt: "Dragon tattoo" },
  { id: "t12", src: "/Website/IMG_4974.JPG.webp", alt: "" },
  { id: "t13", src: "/Website/IMG_4976.JPG.webp", alt: "Coverup tattoo by Khem" },
  { id: "t14", src: "/Website/IMG_4981.JPG.webp", alt: "Colour portrait tattoo" },
  { id: "t15", src: "/Website/KHM01034.webp", alt: "Hand tattoo" },
];

export const piercingImages = [
  { id: "p1", src: "/piercing/IMG_0484.webp", alt: "Ear piercing gurgaon" },
  { id: "p2", src: "/piercing/IMG_3369.webp", alt: "Navel piercing gurgaon" },
  { id: "p3", src: "/piercing/IMG_4210.webp", alt: "Baby ear piercing" },
  { id: "p4", src: "/piercing/IMG_4353.webp", alt: "Helix piercing" },
  { id: "p5", src: "/piercing/IMG_6259.webp", alt: "Virat kohli inspired piercing" },
  { id: "p6", src: "/piercing/IMG_6374.webp", alt: "Lip piercing" },
  { id: "p7", src: "/piercing/IMG_6503.webp", alt: "" },
  { id: "p8", src: "/piercing/IMG_8062.webp", alt: "Septum piercing" },
  { id: "p9", src: "/piercing/IMG_8115.webp", alt: "Conch piercing gurgaon" },
  { id: "p10", src: "/piercing/IMG_8506.webp", alt: "Men ear piercing" },
  { id: "p11", src: "/piercing/IMG_8870.webp", alt: "Flat ear piercing" },
  { id: "p12", src: "/piercing/IMG_8876.webp", alt: "Nose piercing" },
  { id: "p13", src: "/piercing/IMG_4991.webp", alt: "" },
  { id: "p14", src: "/piercing/KHM00617.webp", alt: "Lobe piercing" },
  { id: "p15", src: "/piercing/KHM00724.webp", alt: "Belly button piercing" },
  { id: "p16", src: "/piercing/KHM00789.webp", alt: "Nostril duo & high nostril" },
  { id: "p17", src: "/piercing/KHM00811.webp", alt: "Upper cartilage cluster" },
  { id: "p18", src: "/piercing/KHM00812.webp", alt: "Minimalist septum horseshoe" },
  { id: "p19", src: "/piercing/KHM00980.webp", alt: "Gold-tone ear styling" },
  { id: "p20", src: "/piercing/KHM01285.webp", alt: "Signature Khem piercing portfolio" },
];

// Legacy compat export for existing Work.jsx
export const portfolio = tattooImages.map((img, i) => ({
  id: i + 1,
  title: img.alt,
  category: "All",
  image: img.src,
  size: img.size || "square",
  tag: "Tattoo",
}));
