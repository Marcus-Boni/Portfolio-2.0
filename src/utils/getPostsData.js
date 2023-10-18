import { notFound } from 'next/navigation';

export const getPostsData = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
      cache: 'no-store'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Erro nos posts', error);
    return notFound();
  }
};
