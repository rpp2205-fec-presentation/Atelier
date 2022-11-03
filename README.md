# Atelier

## Overview
Project Atelier comprises a complete redesign of the retail portal designed to address this concern and modernize the site.  This repo focuses on the development of the Product Detail Page.

## Table of Contents
* [Description](https://github.com/rpp2205-fec-presentation/Atelier/blob/update-readme/README.md#description)
  * [Product Overview Module](https://github.com/rpp2205-fec-presentation/Atelier/edit/update-readme/README.md#product-overview-module)
  * [Related Items & Outfit Creation Module](https://github.com/rpp2205-fec-presentation/Atelier/edit/update-readme/README.md#related-items--outfit-creation-module)
  * [Ratings & Reviews Module](https://github.com/rpp2205-fec-presentation/Atelier/edit/update-readme/README.md#ratings--reviews-module)

* [Installation](https://github.com/rpp2205-fec-presentation/Atelier/blob/update-readme/README.md#installation)
  * [Steps](https://github.com/rpp2205-fec-presentation/Atelier/blob/update-readme/README.md#steps)
  * [npm](https://github.com/rpp2205-fec-presentation/Atelier/blob/update-readme/README.md#npm)

## Description
The product detail page shows relevant information for a single product in the catalog.  The catalog is organized by products.  One single product can be associated with many sizes and styles which each result in unique SKUs (stock keeping units).  The same product detail page is shown for every product in the catalog.  Upon navigating to the product detail page or selecting a new product to display, the contents of the page updates to show information relevant to the selected product. The item detail page is comprised of three distinct modules, which are described in more detail below.

### Product Overview Module
This component guides the customer through selecting a specific style and size to add to their cart.  This module includes product information, a style selector, an add to cart option, as well as an image gallery.
![image](https://user-images.githubusercontent.com/93614292/199642140-c0ce3347-c96a-47bf-b216-58a1e2635303.png)

### Related Items & Outfit Creation Module
The Related Items & Comparison module displays two sets of related products.  The first set is a list of products that are related to the product currently being viewed.  The second set is a list, custom created by the user, of products which the user has grouped with the current product into an ‘outfit’.
![image](https://user-images.githubusercontent.com/93614292/199642830-b78bcfff-79f1-45ff-85de-40892dfff384.png)

### Ratings & Reviews Module
The Ratings & Reviews module allows viewing and submission of reviews for the product selected.  The functionality contained within this module is divided into several pieces:
1. Write new review
2. Reviews List
3. Sorting 
4. Rating Breakdown
5. Product Breakdown
![image](https://user-images.githubusercontent.com/93614292/199642472-5b87a758-b945-4bc5-aa0d-f9a877fa2985.png)

## Installation
### Steps
- [ ] Install dependencies: `npm install`
- [ ] Make a copy of the config-example.js file and rename it config.js.  Update it with an appropriate github token for authentication
- [ ] Start webpack: `npm run react-dev`
- [ ] Start the server: `npm run server-dev`
- [ ] Open the application in the browser at [link](localhost:3000)

### npm
Atelier uses npm to manage dependencies.  It comes bundled with Node.  To get started, run `npm install`, which will handle the dependencies captured in the `package.json` file.  npm will download the packages into `node_modules`.
