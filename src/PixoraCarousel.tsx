"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";

import "./css/PixoraCarousel.css";

interface Image {
  src: string;
  alt?: string;
}

interface Props {
  images: Image[];
  loop?: boolean;
  autoPlay?: boolean;
  stopOnInteraction?: boolean;
  autoPlayDelay?: number;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  carouselContainer?: string;
  carouselStyle?: React.CSSProperties;
  thumbnailContainerClassName?: string;
  thumbnailContainerStyle?: React.CSSProperties;
  carouselImageClassName?: string;
  carouselImageStyle?: React.CSSProperties;
  thumbnailClassName?: string;
  thumbnailStyle?: React.CSSProperties;
  borderColor?: string;
}

const PixoraCarousel: React.FC<Props> = ({
  images,
  loop,
  autoPlay = false,
  stopOnInteraction = false,
  autoPlayDelay = 3000,
  containerClassName,
  containerStyle,
  carouselContainer,
  carouselStyle,
  thumbnailContainerClassName,
  thumbnailContainerStyle,
  carouselImageClassName,
  carouselImageStyle,
  thumbnailClassName,
  thumbnailStyle,
  borderColor,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, emblaMainApi] = useEmblaCarousel({ loop: loop }, [
    Autoplay({
      active: autoPlay,
      stopOnInteraction: stopOnInteraction,
      delay: autoPlayDelay,
    }),
  ]);

  const [thumbViewportRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;

    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div
      className={`carousel-container ${containerClassName}`}
      style={containerStyle}
    >
      <div
        className={`carousel-inner-container ${carouselContainer}`}
        style={carouselStyle}
      >
        <div className="main-viewport" ref={mainViewportRef}>
          <div className="main-viewport-inner">
            {images.map((image, index) => (
              <div className="carousel-slide" key={index}>
                <img
                  src={image.src}
                  alt={image?.alt}
                  className={`carousel-image ${carouselImageClassName}`}
                  style={carouselImageStyle}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="thumbnail-viewport" ref={thumbViewportRef}>
        <div
          className={`thumbnail-container ${thumbnailContainerClassName}`}
          style={thumbnailContainerStyle}
        >
          {images.map((image, index) => (
            <button
              onClick={() => onThumbClick(index)}
              className={`thumbnail-button ${
                index === selectedIndex ? "selected" : ""
              }`}
              key={index}
              style={{ borderColor: borderColor }}
            >
              <img
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                style={thumbnailStyle}
                className={`thumbnail-image ${thumbnailClassName}`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PixoraCarousel;
