import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the production marketing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Less busywork\. More time for the work that pays\./);
  assert.match(html, /Where your day can get easier\./);
  assert.match(html, /BeerMe/);
  assert.match(html, /HomeTeam/);
  assert.match(html, /hello@christopherbrown\.io/);
  assert.match(html, /mailto:hello@christopherbrown\.io\?subject=Let%27s%20talk%20about%20my%20business/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /og:image/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|lorem ipsum|private preview|coming soon|placeholder/i);
});
