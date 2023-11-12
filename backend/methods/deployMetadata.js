const { NFTStorage, Blob } = require('nft.storage')
require("dotenv").config();

async function getImage(imageURL) {
  const r = await fetch(imageURL)
  if (!r.ok) {
    throw new Error(`error fetching image: [${r.statusCode}]: ${r.status}`)
  }
  const arrayBuffer = await r.arrayBuffer();
  const imageBlob = new Blob([arrayBuffer], {"type": "image/*"});
  return imageBlob
}

// Format json and upload to nftStorage via API
async function deployMetadata(name, description, imageURL) {
  const API_KEY = process.env.NFT_STORAGE_API_KEY
  const image = await getImage(imageURL)
  const nft = {
    image,
    name,
    description,
    properties: {
      "nft": "is fun"
    }
  }
  const client = new NFTStorage({ token: API_KEY })
  const metadata = await client.store(nft)
  return metadata.url
}

module.exports = deployMetadata;