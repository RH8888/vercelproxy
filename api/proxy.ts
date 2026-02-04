export const config = {
  runtime: "edge",
};

export default async function handler(req: Request) {
  const url = new URL(req.url);

  const target = new URL(
    url.pathname.replace(/^\/api\/proxy/, "") + url.search,
    "https://ver.gold-team.sbs",
  );

  const headers = new Headers(req.headers);
  headers.delete("host");

  return fetch(target.toString(), {
    method: req.method,
    headers,
    body: req.body,
    redirect: "manual",
  });
}
