import assert from "node:assert/strict";
import test from "node:test";
import { buildEmailHref } from "../app/email-link-logic.mjs";

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

test("builds an email link with mail-client-safe spacing", () => {
  const href = buildEmailHref();

  assert.match(href, /subject=Let%27s%20talk%20about%20my%20business/);
  assert.match(href, /body=Hi%20Chris%2C%0A%0AThe%20part%20of%20my%20business/);
  assert.doesNotMatch(href, /\+/);
});

test("renders the production marketing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Less busywork\. More time for the work that pays\./);
  assert.match(html, /For local business owners across DC, Maryland &amp; Northern Virginia/);
  assert.match(html, /Useful tools for the work you do every day\./);
  assert.match(html, /Scheduling &amp; booking/);
  assert.match(html, /Local search &amp; SEO/);
  assert.match(html, /Estimates &amp; approvals/);
  assert.match(html, /Keep customer details, notes, and next steps together in one place\./);
  assert.match(html, /Custom domain &amp; business email/);
  assert.match(html, /set up your domain and business email/);
  assert.match(html, /Free estimates/);
  assert.match(html, /Start with one project\. Add support if you need it\./);
  assert.match(html, /Hosting and maintenance/);
  assert.match(html, /Ongoing support/);
  assert.match(html, /BeerMe/);
  assert.match(html, /HomeTeam/);
  assert.match(html, /built to solve everyday problems/);
  assert.match(html, /Tell me about the problem in your own words\./);
  assert.match(html, /portfolio\/beerme-hero\.png/);
  assert.match(html, /portfolio\/hometeam-hero\.png/);
  assert.match(html, /Email Chris/);
  assert.match(html, /Opens your email app/);
  assert.doesNotMatch(html, /hello@christopherbrown\.io|mailto:/i);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /https:\/\/static\.cloudflareinsights\.com\/beacon\.min\.js/);
  assert.match(html, /data-cf-beacon=[^>]+9d77a540d1424dd0be48e806bce5d132/);
  assert.match(html, /og:image/);
  assert.match(html, /https:\/\/christopherbrown\.ai\/og-local-business-v3\.png/);
  assert.match(html, /og:image:type[^>]+image\/png/);
  assert.match(html, /og:image:width[^>]+1200/);
  assert.match(html, /og:image:height[^>]+630/);
  assert.match(html, /summary_large_image/);
  assert.match(html, /twitter:image:alt/);
  assert.doesNotMatch(html, /og-service-businesses\.png|og-local-business-v2\.png/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|lorem ipsum|private preview|coming soon|placeholder/i);
});
