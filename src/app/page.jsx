import Image from "next/image";
import styles from "@/styles/page.module.css";
import Hero from "public/hero.png";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.description}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button text="See Our Works" url="/portfolio" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="contact" className={styles.img} />
      </div>
    </section>
  );
}
