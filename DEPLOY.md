# Deploying to GitHub Pages — 2 minutes

These files are already a committed git repository. From this folder, run:

```bash
git remote add origin https://github.com/olajumokemedunoye/OlaDigitalHub.git
git branch -M main
git push -u origin main --force
```

(`--force` is only needed the first time if the repo already has old content you want to replace. Drop it afterwards.)

Then enable Pages (one-time):
1. Open https://github.com/olajumokemedunoye/OlaDigitalHub/settings/pages
2. Under **Source**, choose **Deploy from a branch**, branch **main**, folder **/ (root)** and save.
3. The site goes live at https://olajumokemedunoye.github.io/OlaDigitalHub/ within a minute or two.

If GitHub asks you to sign in when pushing, use your GitHub username and a Personal Access Token (github.com → Settings → Developer settings → Tokens) as the password.
