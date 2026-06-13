// Core logic for the "bar" endpoint, kept out of the route files so each
// version can reuse or override behavior independently.

export function barV1() {
  return { bar: true };
}

export function barV2() {
  // v2 builds on v1 but overrides/extends the shape.
  return { ...barV1(), bar: "enabled" };
}
