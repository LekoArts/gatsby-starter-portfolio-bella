![](https://i.imgur.com/wfrTcgk.png)

# Gatsby Starter Portfolio: Bella

A portfolio starter for [Gatsby](https://www.gatsbyjs.org/). The target audience are designers and photographers.

[Demo Website](https://portfolio-bella.netlify.com/)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/LeKoArts/gatsby-starter-portfolio-bella)

- Big Typography & Images
- White Theme
- [Prismic.io](https://prismic.io/) as CMS
- One-Page layout with sub-pages for projects

## Why?

If you want to quickly bootstrap a design/photography portfolio or use it as a foundation for your personal site the *gatsby-starter-portfolio* are a perfect fit for you! The project's goal is to offer minimalistic and fast websites. 

I hope you like my starters and create something awesome! To see some of my work you can visit my [website](https://www.lekoarts.de) or support me on [Patreon](https://www.patreon.com/lekoarts) to get some neat rewards (4K images, project files, tutorial insights). Every pledge on Patreon helps me creating more free starters!

Also check out the other *gatsby-starter-portfolio*:
- [gatsby-starter-portfolio-emma](https://github.com/LeKoArts/gatsby-starter-portfolio-emma)
- [gatsby-starter-portfolio-emilia](https://github.com/LeKoArts/gatsby-starter-portfolio-emilia)
- [gatsby-starter-portfolio-cara](https://github.com/LeKoArts/gatsby-starter-portfolio-cara)

Check out the [Gatsby Starter Portfolio Overview](https://gatsby-starter-portfolio.netlify.com/)!

## Features

- Gatsby v2.0.0
- Configurable
    - Use the website.js to easily change the most important information
    - Google Fonts
- [Prismic.io](https://prismic.io/) as CMS
- [Emotion](https://emotion.sh/) + Emotion-Grid for CSS
- SEO
    - Sitemap
    - Schema.org JSONLD
    - OpenGraph Tags
    - Twitter Tags
- Offline Support
- WebApp Manifest Support
- Typography.js
- Responsive images
    - The right image size for every screen size
    - Traced SVG Loading (Lazy-Loading)
    - WebP Support

## Getting Started

Check your development environment! You'll need [Node.js](https://nodejs.org/en/), the [Gatsby CLI](https://www.gatsbyjs.org/docs/) and [node-gyp](https://github.com/nodejs/node-gyp#installation) installed. The official Gatsby website also lists two articles regarding this topic:
- [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)
- [Check your development environment](https://www.gatsbyjs.org/tutorial/part-zero/)

To copy and install this starter run this command (with "project-name" being the name of your folder you wish to install it in):

```bash
gatsby new project-name https://github.com/LeKoArts/gatsby-starter-portfolio-bella
```

## Prismic?!

This starter uses [Prismic.io](https://prismic.io/) as its CMS and therefore you have two options:
- Setup an account on Prismic and also use it
- Modify this starter in order to use your favourite data source

If you choose Prismic, you need to create the exact same "Custom Type" if you not want to modify the queries and names in the components.

Go to your custom types:

`https://your-name.prismic.io/masks/` and click **New**. Choose the name `Case Study` which results in the API ID `case_study`.
On the right side you have your **Build mode** and **JSON editor**. Open the **JSON editor** and copy/paste the following content:

```JSON
{
  "Content" : {
    "uid" : {
      "type" : "UID",
      "config" : {
        "label" : "SEO",
        "placeholder" : "SEO"
      }
    },
    "header_image" : {
      "type" : "Image",
      "config" : {
        "constraint" : {
          "width" : 1920,
          "height" : 1080
        },
        "thumbnails" : [ ],
        "label" : "Header Image"
      }
    },
    "title" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1",
        "label" : "Title",
        "placeholder" : "Case study title"
      }
    },
    "subtitle" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading2",
        "label" : "Subtitle",
        "placeholder" : "Subtitle"
      }
    },
    "content" : {
      "type" : "StructuredText",
      "config" : {
        "multi" : "paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, list-item, o-list-item",
        "label" : "content",
        "placeholder" : "Case study content"
      }
    }
  }
}
```

This is the exact same content type I used for the starter.

You need to define the API Key for your Prismic repository in `gatsby-config.js`. You can retrieve the key here:

- You can generate an access token in the "API & Security" section of your repository settings. Setting a "Callback URL" is not necessary.
- The token will be listed under "Permanent access tokens".

It's best to store the API Key in an environment variable. Create the file `.env.development` in the root dir of your project. Its content should be:

`API_KEY=OIJSOJIO-YOURKEYHERE-EAJNALÖKND`

If you deploy to Netlify you can also setup an environment variable.

More information on the source plugin: [gatsby-source-prismic](https://github.com/angeloashmore/gatsby-source-prismic)

### Development

Before running the local development server you'll need to add Content to your Prismic site! Go to your documents (`https://your-name.prismic.io/documents/`) and create content with the newly created *caseStudy* type. You have to **publish** the documents.

After that you can run the local server:

```bash
npm run dev
```

### Adding new features/plugins

You can add other features by having a look at the offical [plugins page](https://www.gatsbyjs.org/docs/plugins/)

### Building your site

```
npm run build
```
Copy the content of the ``public`` folder to your webhost or use a website like Netlify which automates that for you.

## Configuration

You can configure your setup in ``config/website``:

```JS
module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Bella - Gatsby Starter Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Bella', // Alternative Site title for SEO
  siteUrl: 'https://portfolio-bella.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'A bright single-page portfolio starter with big typography & images for Gatsby.',
  author: 'LekoArts', // Author for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@bella', // Twitter Username
  ogSiteName: 'bella', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: '#b710a1',
  backgroundColor: '#350d27',
};
```

You can also change the colors, container widths and other stuff in ``config/theme``:

```JS
const theme = {
  colors: {
    primary: '#b710a1', /* Used for the headings and image overlay */
    primaryLight: '#e456e9', /* Used for links */
    primaryDark: '#3d0435', /* Used for backgrounds */
    bg: '#fff',
    text: '#021212',
    textInvert: '#fff',
    greyLight: '#B4B9C1',
    greyMedium: '#414141',
    greyDark: '#2F2F2F',
  },
  fontFamily: {
    body: `'Open Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
    heading: `'Bree Serif', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
  },
  maxWidth: '1800px',
  maxWidthText: '1000px',
  breakpoint: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
};
```

You can change the fonts used in ``config/typography``:

```JS
headerFontFamily: [
  'Bree Serif',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
],
bodyFontFamily: [
  'Open Sans',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
],
googleFonts: [
  {
    name: 'Bree Serif',
    styles: ['400'],
  },
  {
    name: 'Open Sans',
    styles: ['400'],
  },
],
```

**Attention:** You also need to edit ``static/robots.txt`` to include your domain!
