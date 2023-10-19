import { notFound } from 'next/navigation';

export const getBlogData = async () => {
  try {
    const response = await fetch(
      'https://marcus-dev-sigma.vercel.app/api/posts',
      {
        cache: 'no-store'
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return notFound();
  }
};
