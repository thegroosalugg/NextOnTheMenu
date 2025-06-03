import { v2 as cloudinary } from 'cloudinary';

const cloud_name = process.env.CLOUDINARY_CLOUD_NAME;
if (!cloud_name) throw new Error('CLOUDINARY_CLOUD_NAME is not set');

const api_key = process.env.CLOUDINARY_API_KEY;
if (!api_key) throw new Error('CLOUDINARY_API_KEY is not set');

const api_secret = process.env.CLOUDINARY_API_SECRET;
if (!api_secret) throw new Error('CLOUDINARY_API_SECRET is not set');

cloudinary.config({ cloud_name, api_key, api_secret });

export async function uploadImage(image: File) {
  const  imageData = await image.arrayBuffer();
  const       mime = image.type;
  const   encoding = 'base64';
  const base64Data = Buffer.from(imageData).toString('base64');
  const    fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data;
  const     result = await cloudinary.uploader.upload(fileUri, { folder: 'nextjs-course' });
  return result.secure_url;
}
