# slidev-theme-purplin

[![NPM version](https://img.shields.io/npm/v/slidev-theme-purplin?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-purplin)

[![Netlify Status](https://api.netlify.com/api/v1/badges/c011b5f3-5d1f-4c16-a1df-929b1e503724/deploy-status)](https://app.netlify.com/sites/slidev-theme-purplin/deploys)

A (...) theme for [Slidev](https://github.com/slidevjs/slidev).

<!--
run `npm run dev` to check out the slides for more details of how to start writing a theme
-->

<!--
put some screenshots here to demonstrate your theme,
-->

Live demo: https://slidev-theme-purplin.netlify.app/

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

Receives a `title` prop that is the text displayed on the left.

This component uses `slots` to add items on the right. Exist an `<Item />` component that receives a `text` prop and uses `slots` to add the icon/image.

Exist a large [list of icon collections](https://icones.js.org/collection) available that you can use. These icons are imported automatically by _slidev_, you don't need to configure anything else to use them.

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

<BarBottom  title="Slidev theme purplin">
  <Item text="slidevjs/slidev">
    <carbon:logo-github />
  </Item>
  <Item text="Slidevjs">
    <carbon:logo-twitter />
  </Item>
  <Item text="sli.dev">
    <carbon:link />
  </Item>
</BarBottom>
```

This example uses [carbon collection](https://icones.js.org/collection/carbon).

![barBottom-component](https://user-images.githubusercontent.com/13499566/118434724-287ae800-b6a3-11eb-8e7c-b52d5765245a.png)

**How to use other available icons**

You have to go to the [icon list](https://icones.js.org/collection) and select a collection, click on an icon a copy its name. You don't need to do anything else, only copy the name and use an `<Item />` component and the icon will be automatically imported from the collections.

**How to use custom icon/image**

You can use your own icons/images if you want, you only need to add an `<Item />` component and use `slots` features.

Also, you can use [Windi CSS](https://windicss.org/) to add style to the icon, for example, adjust the width o height.

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

<BarBottom  title="Slidev theme purplin">
  <Item text="slidevjs/slidev">
    <carbon:logo-github />
  </Item>
  <Item text="Slidevjs">
    <carbon:logo-twitter />
  </Item>
  <Item text="sli.dev">
    <img
      src="https://d33wubrfki0l68.cloudfront.net/273aa82ec83b3e4357492a201fb68048af1c3e6a/8f657/logo.svg"
      class="w-4"
    />
  </Item>
</BarBottom>
```

![barBottom-component](https://user-images.githubusercontent.com/13499566/139119534-4398a2ff-4f83-4282-9d12-bf5f27b99174.png)

## Contributing

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to genreate the preview PDF
- `npm run screenshot` to genrate the preview PNG
