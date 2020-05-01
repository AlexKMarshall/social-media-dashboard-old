const brandColors = {
  facebook: "hsl(195, 100%, 50%)",
  youtube: "hsl(348, 97%, 39%)",
};

const getBrandColor = (brandName) => brandColors[brandName];

export default getBrandColor;
