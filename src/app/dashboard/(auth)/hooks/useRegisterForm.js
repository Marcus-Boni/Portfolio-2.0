import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export const useRegisterForm = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      if (res.status === 201) {
        router.push('/dashboard/login?success= Account has been created');
      } else {
        console.log('Register failed.');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn('credentials', { email, password });
  };

  return { handleSubmit, handleSubmitLogin };
};
