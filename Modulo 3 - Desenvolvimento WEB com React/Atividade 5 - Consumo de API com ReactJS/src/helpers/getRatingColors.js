function getRatingColor(score) {
  const num = parseFloat(score);
  if (isNaN(num)) return "";
  if (num >= 7) return "good";
  if (num >= 5) return "medium";
  return "bad";
}

export default getRatingColor;
