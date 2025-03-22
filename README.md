# PixoraCarousel

PixoraCarousel is a highly customizable React carousel component that offers seamless autoplay, looping, and thumbnail navigation. Designed to create flexible and responsive image carousels, it provides a smooth user experience with minimal setup.

## Showcase

### Web and Mobile

| Web                                                                                            | Mobile                                                                                               |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![Web Demo](https://github.com/roshab007/pixora-carousel/blob/main/gifs/PixoracarouselWeb.gif) | ![Mobile Demo](https://github.com/roshab007/pixora-carousel/blob/main/gifs/PixoraCarouselMobile.gif) |

## Installation

### Using npm:

```sh
npm install pixora-carousel
```

### Using Yarn:

```sh
yarn add pixora-carousel
```

## Usage

```tsx
import PixoraCarousel from "pixora-carousel";

const images = [
  {
    src: "https://picsum.photos/500/500?random=1",
  },
  {
    src: "https://picsum.photos/500/500?random=2",
  },
  {
    src: "https://picsum.photos/500/500?random=3",
  },
  {
    src: "https://picsum.photos/500/500?random=4",
  },
  {
    src: "https://picsum.photos/500/500?random=5",
  },
  {
    src: "https://picsum.photos/500/500?random=6",
  },
  {
    src: "https://picsum.photos/500/500?random=7",
  },
];

const App: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <PixoraCarousel images={images} loop={true} />
    </div>
  );
};

export default App;
```

## Props

| Prop                            | Type      | Default      | Description                                                      |
| ------------------------------- | --------- | ------------ | ---------------------------------------------------------------- |
| **images**                      | `Image[]` | **Required** | Array of image objects with `src` and optional `alt` attributes. |
| **loop**                        | `boolean` | `false`      | Enables looping of carousel items.                               |
| **autoPlay**                    | `boolean` | `false`      | Enables or disables autoplay.                                    |
| **autoPlayDelay**               | `number`  | `3000`       | Time in milliseconds between slide transitions.                  |
| **stopOnInteraction**           | `boolean` | `false`      | Stops autoplay on user interaction.                              |
| **containerClassName**          | `string`  | `undefined`  | Custom class for the main container.                             |
| **containerStyle**              | `CSS`     | `undefined`  | Inline styles for the main container.                            |
| **carouselContainer**           | `string`  | `undefined`  | Custom class for the inner carousel container.                   |
| **carouselStyle**               | `CSS`     | `undefined`  | Inline styles for the inner carousel.                            |
| **thumbnailContainerClassName** | `string`  | `undefined`  | Custom class for the thumbnail container.                        |
| **thumbnailContainerStyle**     | `CSS`     | `undefined`  | Inline styles for the thumbnail container.                       |
| **carouselImageClassName**      | `string`  | `undefined`  | Custom class for carousel images.                                |
| **carouselImageStyle**          | `CSS`     | `undefined`  | Inline styles for carousel images.                               |
| **thumbnailClassName**          | `string`  | `undefined`  | Custom class for thumbnail images.                               |
| **thumbnailStyle**              | `CSS`     | `undefined`  | Inline styles for thumbnail images.                              |
| **borderColor**                 | `string`  | `blue`       | Border color for selected thumbnails.                            |

## License

MIT
