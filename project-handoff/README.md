# The Herbivore Handbook Project Handoff

Last updated: June 11, 2026

## Local Project

Current editable folder:

```text
/home/alexandra/src/veganism/projects/herbivore-handbook
```

Main public site:

```text
https://theherbivorehandbook.com
```

Hosting:

```text
Netlify
```

Domain registrar:

```text
Name.com
```

## Current Site Structure

The top navigation has five main pages:

```text
Veganism 101
Intersectionality
Blog
Recipes
Links
```

Top-level files:

```text
index.html              Veganism 101
intersectionality.html  Intersectionality
blog.html               Blog
recipes.html            Recipes
links.html              Links
```

Old compatibility redirects:

```text
veganism-101.html       redirects to index.html
answering-arguments.html redirects to faq.html
sources.html            redirects to links.html
```

## Subpages

Veganism 101:

```text
case-for-veganism.html
ethics.html
health.html
affordability.html
efficacy.html
faq.html
```

Intersectionality:

```text
leftism.html
feminism.html
coloniality.html
```

Blog:

```text
No subpages yet.
```

Links:

```text
foundational-texts.html
recommended-reads.html
```

## Visual Direction

Style:

```text
cozy Y2K / old internet blog
pastel greens
cream paper panels
brown borders and shadows
soft pink/blue header circles
Georgia display type
Courier labels
Trebuchet body text
```

Primary image:

```text
assets/aesthetic-nature.png
```

## Mobile Rules

Mobile usability is a standing requirement. Every development pass should check the site at phone width.

Current mobile behavior:

```text
top nav becomes a two-column button grid
search icon moves below the menu as a centered button
page shell uses a fixed mobile max width to avoid horizontal clipping
sidebar stacks above main content
images become wide 16:9 panels
```

Relevant CSS is near the bottom of:

```text
styles.css
```

Look for:

```css
@media (max-width: 760px)
```

## Search

Search is handled by:

```text
search.js
```

It opens as a popup from the magnifying-glass button, not as a visible inline search bar.

## Deployment

Current workflow:

```text
edit locally in VS Code
save files
upload/redeploy the folder to Netlify
```

Auto-deploy through GitHub was discussed but not set up.

## Security Note

A Neocities API key was pasted in the original chat earlier in the project history. Treat it as compromised if it still exists anywhere. Do not commit API keys or secrets to the project.
