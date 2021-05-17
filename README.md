# slidev-theme-purplin

[![NPM version](https://img.shields.io/npm/v/slidev-theme-purplin?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-purplin)

A (...) theme for [Slidev](https://github.com/slidevjs/slidev).

<!--
run `npm run dev` to check out the slides for more details of how to start writing a theme
-->

<!--
put some screenshots here to demonstrate your theme,
-->

<!-- 
Live demo: [...]
-->

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

<pre><code>---
theme: <b>purplin</b>
---</code></pre>

Learn more about [how to use a theme](https://sli.dev/themes/use).

## Layouts

This theme provides the following layouts:

### quote

Usage:

```markdown
---
layout: quote
position: center
---

# "layout: quote"
position: center

'position' variants: left (default), center, right
```

![quote-layout](https://user-images.githubusercontent.com/13499566/118434542-dd60d500-b6a2-11eb-9f4e-1759abe19349.png)

---

### image-x

Usage:

```markdown
---
layout: image-x
image: 'https://source.unsplash.com/collection/94734566/600x600'
imageOrder: 1
---

# layout: image-x

imageOrder: 1

image 600x600
```

![image-x-1](https://user-images.githubusercontent.com/13499566/118434655-07b29280-b6a3-11eb-902c-3b142d57a770.png)

```markdown
---
layout: image-x
image: 'https://source.unsplash.com/collection/94734566/1080x1920'
imageOrder: 2
---

# layout: image-x

imageOrder: 2

image 1080x1920
```

![image-x-2](https://user-images.githubusercontent.com/13499566/118434696-1a2ccc00-b6a3-11eb-9655-e740b330b2de.png)

## Components

This theme provides the following components:

### `<BarBottom />`

This component displays a bar at the bottom of the slide.

The component needs to be added to each slide where we want to display it.

_Component props:_

- title: String
- social: Array

_Social types:_

- yt: YouTube
- fb: Facebook
- ig: Instagram
- tw: Twitter
- gh: GitHub
- lk: LinkedIn
- wb: Web

Usage:

```markdown
---
layout: intro
---

# Slidev Theme Purplin

Presentation slides for developers

<div class="pt-12">
  <span @click="next" class="px-2 p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<BarBottom
  title="Slidev theme purplin"
  :social="[
    { type: 'gh', username: 'slidevjs/slidev' },
    { type: 'tw', username: 'Slidevjs' },
    { type: 'wb', username: 'sli.dev' }
  ]"
/>
```

![barBottom-component](https://user-images.githubusercontent.com/13499566/118434724-287ae800-b6a3-11eb-8e7c-b52d5765245a.png)


## Contributing

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to genreate the preview PDF
- `npm run screenshot` to genrate the preview PNG
