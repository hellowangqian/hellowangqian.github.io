
# Deploying to GitHub Pages

## Initial Setup

1. Create a GitHub repository for your project
2. Push your code to the repository

## Configuration

Make sure your repository is set up for GitHub Pages:

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under "Source", select "GitHub Actions"

## Deployment Workflow

Create a GitHub Actions workflow file in your repository:

1. Create a directory `.github/workflows` in your repository
2. Create a file `deploy.yml` with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: './dist'
          
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

## Manual Deployment Option

If you prefer to deploy manually:

1. Run `npm run build` to create the production build
2. Create a branch named `gh-pages`
3. Remove all content except for the `dist` folder content
4. Rename the `dist` folder content to be at the root of the repository
5. Commit and push the changes to the `gh-pages` branch

## Ensuring Proper Routing

This project uses HashRouter instead of BrowserRouter to ensure proper routing on GitHub Pages. HashRouter uses URL hashes to simulate navigation, which works well with static file servers like GitHub Pages.
