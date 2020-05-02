const brandColors = {
  facebook: "hsl(208, 90%, 53%)",
  youtube: "hsl(348, 97%, 39%)",
};

const getBrandColor = (brandName) => brandColors[brandName];

export default getBrandColor;
