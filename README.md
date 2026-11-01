# PyLab

A static reference site for Python libraries with copyable examples.

## Files
- `index.html`  page structure
- `style.css`   styles (light and dark mode)
- `data.js`     all libraries and examples (edit this to add more)
- `app.js`      search, sidebar and copy logic

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder.

## Add a library
Add an entry to the `L` array in `data.js`:

    {n:"name", p:"pip install name", d:"Short description.", f:[
      ["function(x)", "What it does.", "code\nhere", "output"]
    ]}

Leave out `p` for standard library modules.

## Deploy on Vercel
1. Push this folder to a GitHub repository.
2. In Vercel choose Add New, then Project, and import the repository.
3. Framework Preset: Other. Leave build command and output directory empty.
4. Click Deploy.

Or with the CLI: `npm i -g vercel`, then run `vercel` in this folder.
