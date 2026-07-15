import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the bilingual portfolio homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Research open networks/);
  assert.match(html, /研究开放网络/);
  assert.match(html, /ProofLens Research Terminal/);
  assert.match(html, /kevinyang20070105@gmail\.com/);
  assert.match(html, /Skip to content/);
  assert.match(html, /property="og:image" content="http:\/\/localhost(?::3000)?\/og\.png"/i);
  assert.match(html, /rel="canonical" href="http:\/\/localhost(?::3000)?\/"/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("server-renders every main page and detail route", async () => {
  const routes = [
    ["/about", /Finding questions worth testing/],
    ["/projects", /SELECTED PROJECTS/],
    ["/projects/prooflens", /The question to answer/],
    ["/projects/agent-ledger", /Agent Ledger/],
    ["/projects/commons-signals", /Commons Signals/],
    ["/writing", /RESEARCH &amp; WRITING/],
    ["/writing/trust-is-a-product-surface", /Trust Is a Product Surface/],
    ["/writing/from-protocols-to-products", /From Protocols to Products/],
    ["/writing/research-as-a-reproducible-system", /Research as a Reproducible System/],
    ["/contact", /kevin132435y/],
  ];

  for (const [path, expected] of routes) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    assert.match(await response.text(), expected, path);
  }
});

test("serves sitemap and robots with the current request host", async () => {
  const sitemapResponse = await render("/sitemap.xml");
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  assert.match(sitemap, /<loc>http:\/\/localhost(?::3000)?\/projects\/prooflens<\/loc>/);
  assert.match(sitemap, /<loc>http:\/\/localhost(?::3000)?\/writing\/trust-is-a-product-surface<\/loc>/);

  const robotsResponse = await render("/robots.txt");
  assert.equal(robotsResponse.status, 200);
  assert.match(await robotsResponse.text(), /Sitemap: http:\/\/localhost(?::3000)?\/sitemap\.xml/);
});
