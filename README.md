# SpotOn App Site

This repo contains a small static site for SpotOn Energy app-store support and legal links.

Pages:

- `index.html` redirects to the support page
- `support/index.html` is the support page
- `privacy/index.html` is the privacy policy
- `terms/index.html` redirects to the current Terms and Conditions version
- `terms/2026-09-04/index.html` is the immutable Swedish Terms and Conditions version
- `styles.css` contains the shared styling

When publishing updated terms, add a new dated page and update the redirect in `terms/index.html`.
