---
theme: none
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

---
layout: intro
---

## `<BarBottom />` component

<br />
<br />

<div class="grid grid-cols-2 gap-x-4">
<div>
This component displays a bar at the bottom of the slide. The component needs to be added to each slide where we want to display it.

Receives a `title` prop that is the text displayed on the left.

This component uses `slots` to add items on the right. Exist an `<Item />` component that receives a `text` prop and uses `slots` to add the icon/image.

Exist a large [list of icon collections](https://icones.js.org/collection) available that you can use. These icons are imported automatically by _slidev_, you don't need to configure anything else to use them.

</div>
<div>

### Slide example

```markdown
---
layout: intro
---

# Content

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

</div>
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

---
layout: intro
---

## `<BarBottom />` with custom icons/images

<br />
<br />

<div class="grid grid-cols-2 gap-x-4">
<div>

You can use your own icons/images if you want.

Only need to add an `<Item />` component and use `slots` features.

Also, you can use [Windi CSS](https://windicss.org/) to add style to the icon, for example, adjust the width o height.

</div>
<div>

### Slide example

```markdown
---
layout: intro
---

# Content

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

</div>
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

---
layout: image-x
image: 'https://user-images.githubusercontent.com/13499566/138951075-018e65d5-b5fe-4200-9ea7-34315b1764da.jpg'
imageOrder: 1
---

# layout: image-x

imageOrder: 1

image 600x600

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

---
layout: image-x
image: 'https://user-images.githubusercontent.com/13499566/138950866-7d2addb2-fe3f-41f5-aab6-d35688516612.jpg'
imageOrder: 2
---

# layout: image-x

imageOrder: 2

image 1080x1920

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

---
layout: quote
position: center
---

# "layout: quote"
position: center

'position' variants: left (default), center, right

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

---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features
  
- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

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

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

### Keyboard Shortcuts

|     |     |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

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

---
layout: image-right
image: 'https://user-images.githubusercontent.com/13499566/138950614-52ec045b-aa93-4d52-91df-b782cc9c7143.jpg'
---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = {...user, ...update}  
  saveUser(id, newUser)
}
```

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

---
layout: center
class: "text-center"
---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)

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
