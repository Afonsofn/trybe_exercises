export default function selectColor(color) {
  return {
    type: "SELECT_COLOR",
    color: color,
  };
}