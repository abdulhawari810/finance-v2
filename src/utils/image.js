const images = import.meta.glob(`../assets/**/*.{png,jpg,svg}`, {
  eager: true,
  import: "default",
});
export function getImagesBank(type, name) {
  const path = `../assets/${type}/${name}-${type === "e-wallet" ? "ewallet" : type === "debit" ? "debit" : "bank"}.png`;

  return images[path];
}
export function getImagesProfile(name) {
  const path = `../assets/profile/${name}`;

  return images[path];
}
