# Static HTML guide

This folder contains a small static website that mirrors the Flutter
app's home screen and the *Protección Radiológica* section. The pages
are mobile-friendly and include a floating font-size control to adjust
text for accessibility.

## Structure
```
web_static/
├── index.html                # Home page with category cards
├── proteccion_radiologica.html
├── styles.css                # Shared styling
└── README.md
```

The pages load assets directly from the Flutter project's `assets/`
folder. To view the site, open `index.html` in a browser. Use the
floating **A** button to toggle font-size controls.

## Creating more pages
Use `proteccion_radiologica.html` as a template. Copy it, adjust the
header color, update the titles and text, and replace image paths with
the appropriate files from `../assets/images/`.
