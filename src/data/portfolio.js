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
  { id: "t1", src: "/Website/IMG_2088.webp", alt: "Custom tattoo by Khem Tattoo Studio" },
  { id: "t2", src: "/Website/IMG_2089.webp", alt: "Detailed tattoo by Khem Tattoo Studio" },
  { id: "t3", src: "/Website/IMG_2090.webp", alt: "Black and grey tattoo by Khem Tattoo Studio" },
  { id: "t4", src: "/Website/IMG_2094.webp", alt: "Fine detail tattoo by Khem Tattoo Studio" },
  { id: "t5", src: "/Website/IMG_2095.webp", alt: "Custom tattoo artwork by Khem Tattoo Studio" },
  { id: "t6", src: "/Website/IMG_4727.JPG.webp", alt: "Tattoo portfolio piece by Khem Tattoo Studio" },
  { id: "t7", src: "/Website/IMG_4733.JPG.webp", alt: "Original tattoo design by Khem Tattoo Studio" },
  { id: "t8", src: "/Website/IMG_4964.JPG.webp", alt: "Precision tattoo work by Khem Tattoo Studio" },
  { id: "t9", src: "/Website/IMG_4965.JPG.webp", alt: "Bespoke tattoo by Khem Tattoo Studio" },
  { id: "t10", src: "/Website/IMG_4967.JPG.webp", alt: "Professional tattoo by Khem Tattoo Studio" },
  { id: "t11", src: "/Website/IMG_4972.JPG.webp", alt: "Tattoo artistry by Khem Tattoo Studio" },
  { id: "t12", src: "/Website/IMG_4974.JPG.webp", alt: "Custom ink work by Khem Tattoo Studio" },
  { id: "t13", src: "/Website/IMG_4976.JPG.webp", alt: "Detailed ink design by Khem Tattoo Studio" },
  { id: "t14", src: "/Website/IMG_4981.JPG.webp", alt: "Signature tattoo by Khem Tattoo Studio" },
  { id: "t15", src: "/Website/KHM01034.webp", alt: "Khem Tattoo Studio portfolio artwork" },
];

export const piercingImages = [
  { id: "p1", src: "/piercing/IMG_0484.webp", alt: "Double helix & conch curation" },
  { id: "p2", src: "/piercing/IMG_3369.webp", alt: "Precision nostril piercing" },
  { id: "p3", src: "/piercing/IMG_4210.webp", alt: "Tragus & lobe combination" },
  { id: "p4", src: "/piercing/IMG_4353.webp", alt: "Navel / belly accent" },
  { id: "p5", src: "/piercing/IMG_6259.webp", alt: "Septum precision placement" },
  { id: "p6", src: "/piercing/IMG_6374.webp", alt: "Industrial bar styling" },
  { id: "p7", src: "/piercing/IMG_6503.webp", alt: "Forward helix & flat cluster" },
  { id: "p8", src: "/piercing/IMG_8062.webp", alt: "Eyebrow piercing" },
  { id: "p9", src: "/piercing/IMG_8115.webp", alt: "Lip / medusa placement" },
  { id: "p10", src: "/piercing/IMG_8506.webp", alt: "Daith piercing with decorative hoop" },
  { id: "p11", src: "/piercing/IMG_8870.webp", alt: "High lobe stack & mini hoop" },
  { id: "p12", src: "/piercing/IMG_8876.webp", alt: "Rook piercing with curved gem bar" },
  { id: "p13", src: "/piercing/IMG_4991.webp", alt: "Curated ear piercing project" },
  { id: "p14", src: "/piercing/KHM00617.webp", alt: "Dermal anchor placement" },
  { id: "p15", src: "/piercing/KHM00724.webp", alt: "Snug & outer conch balance" },
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
