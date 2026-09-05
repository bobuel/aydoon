# Brassline: Train Heist

A free steampunk train-heist tactical autobattler.

[Play in your browser](https://bobuel.github.io/brassline/) · [More of my work](https://aydoon.com/)

Plan your crew, follow the fight, and adjust the combat speed. The interface separates planning from combat, with a full-screen Crew Ledger for reviewing the crew.

## About this repository

This is the playable web export, not the editable Godot source project. The source is maintained separately. These files demonstrate the shipped browser experience; they are not a source-code walkthrough.

## Run locally

With Python 3 installed, serve the repository over HTTP:

```bash
python -m http.server 8000
```

Open `http://localhost:8000/`. Opening `index.html` directly from the filesystem will not load the game correctly.

## Build notes

- Godot 4.7.1 web export, Screen Audit 1.1.3.
- GL Compatibility renderer; threading disabled for standard GitHub Pages hosting.
- Active bundle: `screen_audit.pck` and `screen_audit.wasm`.
- Visible 1x / 2x / 4x speeds map to 0.5 / 1.0 / 2.0 simulation scale.
