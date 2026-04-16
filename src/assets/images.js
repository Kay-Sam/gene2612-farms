// ================= HERO IMAGES =================
import hero1 from './images/hero1.jpg'
import hero2 from './images/hero2.jpg'
import hero3 from './images/hero3.jpeg'

// ================= PRODUCT IMAGES =================
import tomato1 from './images/tomato.jpg'
import tomato2 from './images/Tomatoes.jpg'
import tomato3 from './images/tomato3.jpg'

import yam1 from './images/yam1.jpg'
import yam2 from './images/yam2.jpg'
import yam3 from './images/yam3.jpg'

import pepper1 from './images/pepper.jpg'
import pepper2 from './images/pepper3.jpg'
import pepper3 from './images/pepper4.jpg'

import cucumber1 from './images/cucumber.jpg'
import cucumber2 from './images/cucumber2.jpg'
import cucumber3 from './images/cucumber.jpg'

import carrot1 from './images/carrots.jpg'
import carrot2 from './images/carrot2.jpg'
import carrot3 from './images/carrots.jpg'

import peas1 from './images/peas.jpg'
import peas2 from './images/peas.jpg'
import peas3 from './images/peas.jpg'

import hp1 from './images/Habanero pepper.jpg'
import hp2 from './images/Habanero pepper2.jpg'
import hp3 from './images/Habanero pepper.jpg'

import b1 from './images/bell pepper.jpg'
import b2 from './images/bell pepper1.jpg'
import b3 from './images/Bell pepper2.jpg'

import herb1 from './images/Herbs.jpg'
import herb2 from './images/Herbs.jpg'
import herb3 from './images/Herbs.jpg'

import s1 from './images/seedlings.jpg'
import s2 from './images/seedlings2.jpg'
import s3 from './images/seedlings.jpg'


// ================= TESTIMONIAL IMAGES =================
import person1 from './images/hero1.jpg'
import person2 from './images/hero2.jpg'

// ================= GALLERY IMAGES =================
import harvest1 from './images/hero1.jpg'
import harvest2 from './images/Habanero pepper.jpg'
import harvest5 from './images/Tomatoes.jpg'
import harvest3 from './images/hero3.jpeg'
import process1 from './images/Gallery.jpg'
import process2 from './images/growbag.jpg'
import process3 from './images/greenhouse.jpg'
import process4 from './images/greenhouse irrigation.jpg'
import activities1 from './images/open field.jpg'
import activities2 from './images/open field farming.jpg'
import activities3 from './images/seedlings2.jpg'
import activities4 from './images/home.jpg'
import activities5 from './images/gallery2.jpg'
import activities6 from './images/gallery3.jpg'
import activities7 from './images/about.jpeg'

// ================= EXPORT HERO =================
export { hero1, hero2, hero3 }

// ================= EXPORT PRODUCTS (WITH MULTIPLE IMAGES) =================
export const products = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    // price: "₦5,000",
    desc: "Fresh organic tomatoes directly from the farm.",
    inStock: true,
    images: [tomato1, tomato2, tomato3]
  },
  {
    id: 2,
    name: "Fresh Yam",
    // price: "₦3,500",
    desc: "Healthy yam grown with care.",
    inStock: false,
    // availableDate: "2026-03-15",
    images: [yam1, yam2, yam3]
  },
  {
    id: 3,
    name: "Organic Carrots",
    // price: "₦4,000",
    desc: "Sweet and nutritious carrots harvested fresh.",
    inStock: true,
    images: [carrot1, carrot2, carrot3]
  }
  ,
  {
    id: 4,
    name: "Cucumber",
    desc: "Organically cultivated cucumbers.",
    inStock: true,
    images: [cucumber1, cucumber2, cucumber3]
  }
  ,
  {
    id: 5,
    name: "Pepper",
    desc: "Fresh, perfect for cooking and seasoning.",
    inStock: true,
    images: [pepper1, pepper2, pepper3]
  }
    ,
  {
    id: 6,
    name: "Green Peas",
    desc: "Sweet and tender green peas, perfect for healthy meals",
    inStock: true,
    images: [peas1, peas2, peas3]
  }
      ,
  {
    id: 7,
    name: "Habanero Pepper",
    desc: "Flavorful habanero peppers to spice up any dish",
    inStock: true,
    images: [hp1, hp2, hp3]
  }
      ,
  {
    id: 8,
    name: "Bell Pepper",
    desc: "Crisp, sweet bell peppers, perfect for salads.",
    inStock: true,
    images: [b1, b2, b3]
  }
      ,
  {
    id: 9,
    name: "Herbs:Mints,Oregano, Basil, Rosemary, Dandelion",
    desc: "Fresh and aromatic herbs for cooking, teas, and garnishing",
    inStock: true,
    images: [herb1, herb2, herb3]
  }
        ,
  {
    id: 10,
    name: "Sales of seedlings strictly by preorder",
    desc: "Healthy young seedlings, ready for planting and fast growth",
    inStock: true,
    images: [s1, s2, s3]
  }
]

// ================= EXPORT GALLERY =================
export const galleryImages = [
  { src: harvest1, alt: 'Fresh harvest in the field', desc: 'Our harvested ripe crops.' },
  { src: harvest2, alt: 'peppers', desc: 'Freshly planted peppers, growing for a healthy harvest.' },
  { src: harvest5, alt: 'tomatoes', desc: 'Freshly planted tomatoes, growing for a healthy harvest.' },
  { src: harvest3, alt: 'Farm produce ready', desc: 'Farm produce, for quality and freshness.' },
  { src: process1, alt: 'Processing crops', desc: 'Our process ensures hygienic handling.' },
  { src: process2, alt: 'Grow Bags', desc: 'Durable Planting bags designed to support healthy roots and maximize crop yield.' },
  { src: process3, alt: 'Greenhouse', desc: 'Efficient watering system that delivers precise moisture for optimal plant growth' },
  { src: process4, alt: 'Greenhouse', desc: 'Efficient watering system that delivers precise moisture for optimal plant growth.' },
  { src: activities1, alt: 'Farm activities', desc: 'Open field management' },
  { src: activities2, alt: 'Farm activities', desc: 'Professional open field management focused on soil health' },
  { src: activities3, alt: 'Farm activities', desc: 'Raising of healthy seedlings.' },
  { src: activities4, alt: 'Farm activities', desc: 'We also train on home backyard farming.' },
  { src: activities5, alt: 'Farm activities', desc: 'We also train on home backyard farming.' },
  { src: activities6, alt: 'Farm activities', desc: 'Premium farming.' },
  { src: activities7, alt: 'Farm activities', desc: 'Careful Harvests.' },
]

// ================= EXPORT TESTIMONIALS =================
export const testimonials = [
  person1,
  person2
]