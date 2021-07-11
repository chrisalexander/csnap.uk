# csnap.uk

Source code for photo hosting site.

Please note the code is not licensed under an open source license, and the photos are copyright.

If you'd like a similar site then please kindly ask :-)

## Post layouts

### Photo

    ---
    layout: photo
    modal: true
    thumb: http://placekitten.com/500/500
    full: http://placekitten.com/2000/2000
    size: small
    ar: square
    body: true
    title: "Photo 1"
    subtitle: "My photo description"
    byline: "Slightly lighter text"
    ---

- `layout: photo`
  - Required
- `modal: true | false`
  - Whether to open a modal when you click on the tile; requires `full`
- `thumb: <uri>`
  - Thumbnail image URI
- `full: <uri>`
  - Modal image URI, not used if `modal` is false
- `size: small | large | full`
  - Size of the image rendered in the responsive layout
  - "full" is always full page width - lots of pixels recommended
  - Other sizes arrange themselves in order
- `ar: square | portrait | landscape | custom`
  - Specify the aspect ratio of the image
  - `portrait` and `landscape` assume a **3:2** aspect ratio
  - See `ar-custom` if you specify "custom"
- `ar-custom: <percentage>`
  - Only applies if `ar` is "custom"
  - Specify the percentage the height of the image is compared to its width
  - e.g. if you have an image 1000 pixels wide and 1200 high, specify `ar: custom` and `ar-custom: 120`
- `body: true | false`
  - Whether or not to render the body contents under the image (`title`, `subtitle` and `byline`)
- `title: <text>`
  - Required
  - Title of the image
  - Used in the modal, alt text, and in the body if `body` is "true"
- `subtitle: <text>`
  - Optional
  - If `body` is "true", rendered under the `title`
- `byline: <text>`
  - Optional
  - If `body` is "true", rendered under the `subtitle` (or `title` if no `subtitle`)


### Card

    ---
    layout: card
    align: left
    size: small
    title: "Card 1"
    subtitle: "Subtitle"
    byline: "Byline"
    ---

- `layout: card`
  - Required
- `align: left | center | right`
  - Optional
  - Determines how text is aligned in the card
- `size: small | large | full`
  - Size of the image rendered in the responsive layout
  - "full" is always full page width - lots of pixels recommended
  - Other sizes arrange themselves in order
- `title: <text>`
  - Required
  - Title of the card
- `subtitle: <text>`
  - Optional
  - Rendered under the `title`
- `byline: <text>`
  - Optional
  - Rendered under the `subtitle` (or `title` if no `subtitle`)

### Quote

    ---
    layout: quote
    highlight: false
    align: center
    size: small
    space: true
    quote: "All men must die, but we are not men."
    author: "Daenerys Targaryen"
    source: "Game of Thrones"
    ---

- `layout: quote`
  - Required
- `highlight: true | false`
  - Whether to highlight the quote by inverting the colours
- `align: left | center | right`
  - Optional
  - Determines how text is aligned in the card
- `size: small | large | full`
  - Size of the image rendered in the responsive layout
  - "full" is always full page width - lots of pixels recommended
  - Other sizes arrange themselves in order
- `space: true | false`
  - Whether to add padding to the quote within the card
- `quote: <text>`
  - Required
  - The quote
- `author: <text>`
  - One of `author` and `source` required
  - Quote author
- `source: <text>`
  - One of `author` and `source` required
  - Quote source (rendered in italics)