export const BASE_API_URL =
  process.env.PARCEL_NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://personal-cv-api-ivan-lavers-projects.vercel.app';
console.log(process.env.PARCEL_NODE_ENV);
