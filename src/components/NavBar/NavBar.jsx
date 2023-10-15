import { links } from "@/config";
import Link from "next/link";

export const NavBar = () => {
  return (
    <header>
      <Link href="/">Marcus </Link>
      <div>
        {links.map(({ id, title, url }) => (
          <Link href={url} key={id}>
            <span>{title}</span>
          </Link>
        ))}
      </div>
    </header>
  );
};
