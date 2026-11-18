# Portfolio — Youssef El Kasri

Site statique : HTML, CSS et JavaScript, sans framework ni étape de build.

```
portfolio-youssef/
├── index.html                    contenu de toutes les sections
├── style.css                     styles, effets 3D et animations
├── main.js                       ouverture des projets, effet 3D à la souris, apparitions
├── README.md
└── assets/
    ├── photo.jpg
    ├── favicon.svg
    └── CV_Youssef_El_Kasri.pdf   téléchargé par le bouton « CV (PDF) »
```

## Voir le site en local

Double-cliquez sur `index.html`, ou lancez un petit serveur depuis le dossier :

```bash
python -m http.server 8000      # puis ouvrez http://localhost:8000
```

## Modifier le contenu

- **Textes, projets, expériences** : tout est dans `index.html`. Chaque section commence par un commentaire `<!-- ===== NOM ===== -->`.
- **Couleur d'accent** : la variable `--accent` en haut de `style.css`.
- **Ajouter un projet perso** : copiez un bouton `.project-card` et un bloc `.detail`, puis donnez-leur le même identifiant (`data-project="monprojet"` et `id="detail-monprojet"`).
- **Lien direct vers un projet** : `votre-site/#projet-ovlik` (ou `#projet-frontier`, `#projet-devil`).

## Héberger gratuitement

### Option A — GitHub Pages (recommandé)

1. Créez un dépôt **public** nommé exactement `YoussefElkasri.github.io`.
2. Envoyez-y le **contenu** de ce dossier, avec `index.html` à la racine :
   ```bash
   cd portfolio-youssef
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/YoussefElkasri/YoussefElkasri.github.io.git
   git push -u origin main
   ```
   Vous pouvez aussi utiliser **Add file → Upload files** sur github.com, sans Git.
3. Dans le dépôt, ouvrez **Settings → Pages**, choisissez **Deploy from a branch**, puis la branche `main` et le dossier `/ (root)`. Enregistrez.
4. Après une ou deux minutes, le site est en ligne sur **https://youssefelkasri.github.io**.

Pour le mettre à jour, il suffit de pousser vos modifications avec `git push`.

### Option B — Netlify Drop (sans Git)

1. Allez sur https://app.netlify.com/drop.
2. Glissez-y le dossier `portfolio-youssef`.
3. Créez un compte pour garder le site : sans compte, un site déposé est supprimé au bout d'une heure.
4. Vous pouvez renommer l'adresse dans **Site configuration → Change site name**, par exemple `youssef-elkasri.netlify.app`.

### Nom de domaine personnel (optionnel)

Achetez un domaine comme `youssef-elkasri.dev` chez un registraire (environ 10 à 15 € par an). Ajoutez-le ensuite dans **Settings → Pages → Custom domain** sur GitHub, ou dans **Domain management** sur Netlify. Le HTTPS est activé automatiquement dans les deux cas.
