const brandColors = {
  facebook: "hsl(208, 90%, 53%)",
  youtube: "hsl(348, 97%, 39%)",
  twitter: "hsl(203, 89%, 53%)",
  instagram: "hsl(329, 70%, 58%)",
};

// TODO sort out instagram gradient https://css-tricks.com/gradient-borders-in-css/

const getBrandColor = (brandName) => brandColors[brandName];

export default getBrandColor;
