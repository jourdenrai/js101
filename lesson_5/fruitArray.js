let obj = {
  grape: { type: "fruit", colors: ["red", "green"], size: "small" },
  carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
  apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
  apricot: { type: "fruit", colors: ["orange"], size: "medium" },
  marrow: { type: "vegetable", colors: ["green"], size: "large" },
};

let capitalize = word => word[0].toUpperCase() + word.slice(1);

console.log(Object.values(obj).map(attr => {
  if (attr['type'] === 'fruit') {
    return attr['colors'].map(char => capitalize(char));
  } else {
    return attr['size'].toUpperCase();
  }
}));