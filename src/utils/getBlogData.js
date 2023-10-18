import { notFound } from 'next/navigation';

export const getBlogData = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/posts', {
      cache: 'no-store'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return notFound();
  }
};
