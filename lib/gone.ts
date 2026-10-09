// Réponse 410 Gone pour une page supprimée définitivement (service qui n'est plus proposé).
// Google retire une URL en 410 plus vite qu'une 404. noindex en plus, par sécurité.
export function goneResponse(): Response {
  const html = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Page supprimée</title>
</head>
<body style="font-family:system-ui,sans-serif;max-width:36rem;margin:4rem auto;padding:0 1rem;line-height:1.6">
<h1>Cette page n'existe plus</h1>
<p>Ce service n'est plus proposé. Vous cherchez un serrurier à Nice ?</p>
<p><a href="/">Retour à l'accueil</a> · <a href="/urgence-serrurier-nice/">Urgence serrurier</a> · <a href="/contact/">Contact</a></p>
</body>
</html>`;
  return new Response(html, {
    status: 410,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
