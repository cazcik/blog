// Core logic for the "foo" endpoint, kept out of the route files so each
// version can reuse or override behavior independently.

export function fooV1() {
  return { foo: true };
}

export function fooV2() {
  // v2 builds on v1 but overrides/extends the shape.
  return { ...fooV1(), foo: "enabled" };
}
