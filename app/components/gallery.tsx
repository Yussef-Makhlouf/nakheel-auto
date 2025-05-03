'use client'
import React from "react";
import styled from "styled-components";

const images = [
  "/det.png",
  "/det2.png",
  "/det3.png",
  "/det4.png",
  "/det5.png",
  "/det6.png",
  "/cover2.png",
];

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 32px;

  padding: 40px ;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 24px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: none;
    gap: 16px;
    padding: 20px 0;
  }
`;

const GalleryItem = styled.div<{ area: string }>`
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  background: #fff;
  transition: transform 0.2s;
  grid-area: ${({ area }) => area};
  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  }
  @media (max-width: 900px) {
    grid-area: unset;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
  @media (max-width: 900px) {
    height: 220px;
  }
  @media (max-width: 600px) {
    height: 180px;
  }
`;

// Define grid areas for each image
const areas = [
  "a", "b", "c", // first row
  "d", "e", "f", "g" // second row
];

// Map grid areas to CSS
const gridTemplateAreas = `
  "a b c c"
  "d e f g"
`;

const Gallery = () => (
  <GalleryGrid style={{ gridTemplateAreas }}>
    <GalleryItem area="a"><GalleryImage src={images[0]} alt="Gallery 1" /></GalleryItem>
    <GalleryItem area="b"><GalleryImage src={images[1]} alt="Gallery 2" /></GalleryItem>
    <GalleryItem area="c" style={{ gridColumn: "3 / span 2", gridRow: "1 / span 1" }}>
      <GalleryImage src={images[2]} alt="Gallery 3" />
    </GalleryItem>
    <GalleryItem area="d"><GalleryImage src={images[3]} alt="Gallery 4" /></GalleryItem>
    <GalleryItem area="e"><GalleryImage src={images[4]} alt="Gallery 5" /></GalleryItem>
    <GalleryItem area="f"><GalleryImage src={images[5]} alt="Gallery 6" /></GalleryItem>
    <GalleryItem area="g"><GalleryImage src={images[6]} alt="Gallery 7" /></GalleryItem>
  </GalleryGrid>
);

export default Gallery;