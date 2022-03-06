<h1 align="center">Advice generator App</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/9369ff42-c13e-44d0-95b2-784ceb255214/deploy-status)](https://app.netlify.com/sites/advice-generator-challenge/deploys)

![Advice-generator-banner](https://user-images.githubusercontent.com/62628408/156934417-62060d7a-360a-4e69-a167-f2412197428c.png)

## Welcome! 👋

Thanks for checking out this front-end coding challenge by [Frontend Mentor](https://www.frontendmentor.io) a platform for helping you improve your coding skills by building realistic projects.

**To do this challenge, you need a basic understanding of HTML, CSS and JavaScript.**

## The challenge

Your challenge is to build out this advice generator app using the [Advice Slip API](https://api.adviceslip.com) and get it looking as close to the design as possible.
You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.
Your users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

## Support 
[Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

## 📝 Learning

### Picture Tag
The picture tag is a semantic html element used in adding multiple images, according to [W3schools](https://www.w3schools.com/tags/tag_picture.asp), the most common use of the <picture> element is for art direction in responsive designs. Instead of having one image that is scaled up or down based on the viewport width, multiple images can be designed to more nicely fill the browser viewport.

Since we have a small and large image for the line, we can use the picture element to specify what image to show based on a given viewport. Example:

```html
<picture>
<source class="desktop" media="(min-width: 601px)" srcset="images/pattern-divider-desktop.svg" />
<source class="mobile" media="(max-width: 550px)" srcset="images/pattern-divider-mobile.svg" />
<img class="line" src="images/pattern-divider-desktop.svg" alt="Icon divider" />
</picture>
```

In the code above, at 601px and above, (from tablet to desktop and beyond) we want to load the desktop divider image and on 550px and below, we want to load the mobile divider image and then we have a fallback image in case of any browser support issues. No css, no hiding the image manually, 😎 cool right?

### Semantic Tags
To practice writing cleaner and more accesible code, I made sure to use semantic html elemnents like:
- `<Blockquote></Blockquote>`: For wrapping the advice element
- `<Picture></Picture>`: For the images
- `<Main></Main>`: For wrapping the whole content
- `<Section></Section>`: For the card container itself.
