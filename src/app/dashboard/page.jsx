'use client';

import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';
import { Loading } from '@/components/Loading';
import { notifyError, notifySuccess } from '@/utils/notify';
import 'react-toastify/dist/ReactToastify.css';

export default function Dashboard() {
  const session = useSession();

  const router = useRouter();
  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }

  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === 'loading') {
    return <Loading />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name
        })
      });
      mutate();
      e.target.reset();
      notifySuccess('Post added successfully!');
    } catch (err) {
      console.log(err);
      notifyError('Something went wrong!');
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
      });
      mutate();
      notifySuccess('Post deleted successfully!');
    } catch (error) {
      console.log(error);
      notifyError('Something went wrong!');
    }
  };

  if (session.status === 'authenticated') {
    return (
      <section className={styles.container}>
        <div className={styles.posts}>
          {isLoading ? (
            <Loading />
          ) : (
            data.map(({ _id, title, img }) => (
              <div className={styles.post} key={_id}>
                <div className={styles.imgContainer}>
                  <Image src={img} alt="profile" width={200} height={100} />
                </div>
                <h2 className={styles.postTitle}>{title}</h2>
                <span
                  className={styles.delete}
                  onClick={() => handleDelete(_id)}
                >
                  X
                </span>
              </div>
            ))
          )}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input
            type="text"
            name="post-add"
            placeholder="Title"
            className={styles.input}
          />
          <input
            type="text"
            name="post-add"
            placeholder="Description"
            className={styles.input}
          />
          <input
            type="text"
            name="post-add"
            placeholder="Image"
            className={styles.input}
          />
          <textarea
            name="Content"
            placeholder="Content"
            cols="30"
            rows="10"
            className={styles.textArea}
          ></textarea>
          <button type="submit" className={styles.button}>
            Send
          </button>
        </form>
      </section>
    );
  }
}
