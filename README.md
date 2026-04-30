# 🟢 OCG Consulting — Site Web Professionnel

Design sombre premium inspiré du thème **Dark Green + Lime**, avec animations complètes.

---

## 📁 Structure du Projet

```
ocg-consulting/
├── index.html          ← Page principale
├── css/
│   └── style.css       ← Tous les styles + animations
├── js/
│   └── main.js         ← Scroll effects, counters, form
└── .vscode/
    ├── settings.json   ← Config VS Code
    └── extensions.json ← Extensions recommandées
```

---

## 🚀 Lancer le Site (VS Code)

### Méthode 1 — Live Server (recommandé)
1. Ouvre VS Code → **File > Open Folder** → sélectionne `ocg-consulting/`
2. Installe l'extension **Live Server** (ritwickdey.LiveServer)
3. Clic droit sur `index.html` → **"Open with Live Server"**
4. Le site s'ouvre sur `http://127.0.0.1:5500`

### Méthode 2 — Double clic
- Ouvre directement `index.html` dans ton navigateur (Chrome recommandé)

---

## ✨ Fonctionnalités

| Feature | Détail |
|---|---|
| 🎨 Design | Dark green + Lime #CCFF00, typographie Bebas Neue |
| 🖱️ Cursor Glow | Effet lumière qui suit la souris (desktop) |
| 📜 Scroll Reveal | Animations d'apparition au scroll |
| 🔢 Compteurs | Chiffres qui s'animent (3k+, 200+...) |
| 📊 Skill Bars | Barres de progression animées |
| 🎫 Ticker | Bandeau défilant en bas du hero |
| 📱 Responsive | Mobile, tablet, desktop |
| 🍔 Menu Mobile | Hamburger animé pour mobile |
| 📩 Formulaire | Validation + animation d'envoi |
| 🟢 Active Nav | Lien actif selon la section visible |

---

## 🎨 Couleurs du Thème

```css
--lime:       #CCFF00   /* Vert lime accent */
--dark:       #080C08   /* Fond principal */
--green-deep: #0A1F0A   /* Fond sections vertes */
--text-main:  #F2F5F2   /* Texte principal */
--text-muted: #7A8C7A   /* Texte secondaire */
```

---

## 📝 Personnalisation

### Changer les textes
→ Modifier directement dans `index.html`

### Changer les couleurs
→ Variables CSS dans `:root { }` au début de `css/style.css`

### Ajouter des images réelles
→ Remplacer les `avatar-placeholder` et `about-card-icon` par des balises `<img>`

### Connecter le formulaire
→ Dans `js/main.js`, section `CONTACT FORM`, remplacer le `setTimeout` par un `fetch()` vers ton backend ou service email (ex: EmailJS, Formspree)

---

## 📦 Extensions VS Code Recommandées

- **Live Server** — Serveur local avec hot-reload
- **Prettier** — Formatage automatique
- **Auto Rename Tag** — Renommage HTML synchronisé
- **Color Highlight** — Aperçu des couleurs CSS

---

© 2026 OCG Consulting — Casablanca, Maroc
