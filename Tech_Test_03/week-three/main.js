import brandStore from "./brand-store";
import Color from "color";

/// Long and confusing functions doing to many things - simplified them 
// Unclear argument names
// Mix of ES5 and ES6
// Not sure about the imports? is one a class and the other isn't?

const defaultColours = [
  { name: "primary", value: "#333" },
  { name: "secondary", value: "#222" },
  { name: "tertiary", value: "#555" },
];

const defaultBodyFont = "Lato";
const allowedFonts = ["lato", "arial", "helvetica", "courier"];

const convertToRgb = (colour) => Color(colour).rgb().string();

const validateBodyFont = (bodyFont) =>
  allowedFonts.includes(bodyFont.toLowerCase()) ? bodyFont : defaultBodyFont;

const newColourObj = (colours) => {
  const newColours = {};
  colours.forEach((colour) => {
    newColours[colour.name] = convertToRgb(colour.value);
  });
  return colours ? newColours : defaultColours;
};

const buildTheme = (colours, bodyFont) => {
  return {
    colours: newColourObj(colours),
    bodyFont: validateBodyFont(bodyFont),
  };
};

module.exports = {
  getBranding(user) {
    const brands = brandStore.getAll();

    if (user.brandId && brands.length > 1) {
      let brandDetails;
      brands.forEach((brand) => (brand.id === user.brandId ? (brandDetails = b) : null));
      return buildTheme(brandDetails.colours, brandDetails.bodyFont);
    }
    return buildTheme(defaultColours, defaultBodyFont);
  },
};
