import { items } from '@/config';
import { notFound } from 'next/navigation';

export const getCategoryData = (cat) => {
  const data = items[cat];

  if (data) return data;

  return notFound();
};
