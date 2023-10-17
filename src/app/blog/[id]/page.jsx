import Image from 'next/image';
import styles from './page.module.css';

export default function BlogPost({ params }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            necessitatibus sapiente nemo saepe, quod, ex esse iste est illo
            sequi ullam voluptates nam iure perspiciatis beatae commodi quo
            itaque. Reiciendis.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3369191/pexels-photo-3369191.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>user</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3369191/pexels-photo-3369191.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          exercitationem vero distinctio necessitatibus voluptatibus enim
          tempore pariatur voluptatem sit quia reiciendis dolores, nam deleniti
          laudantium excepturi rerum veniam minus omnis. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Explicabo, esse consequatur quod
          voluptatibus sequi sit corrupti temporibus obcaecati saepe hic. Unde,
          voluptatum!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          exercitationem vero distinctio necessitatibus voluptatibus enim
          tempore pariatur voluptatem sit quia reiciendis dolores, nam deleniti
          laudantium excepturi rerum veniam minus omnis.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi
          earum debitis exercitationem officiis facere vero quo ab laboriosam
          veritatis provident, hic unde expedita harum quidem dicta modi itaque
          eos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
          reiciendis corporis dignissimos amet atque dolores officia numquam? Id
          ullam laudantium iste? Veniam, nam molestias. Sequi quasi
          necessitatibus esse error iusto! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officia doloremque nisi, deserunt
          corporis optio quasi, voluptatem unde, earum iste animi minus. Alias,
          fugiat ea. Excepturi quia tenetur autem incidunt voluptatibus.
        </p>
      </div>
    </div>
  );
}
