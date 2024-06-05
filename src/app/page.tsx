import styles from "./page.module.scss";
import Link from "next/link";

const navList = [
  { name: "Audiophile", href: "audiophile/dashboard" },
  { name: "Google Drive Clone", href: "google-drive-clone/dashboard" },
  {
    name: "Interactive Comments Section",
    href: "interactive-comments-section/dashboard",
  },
  { name: "Multi Step Form", href: "google-drive-clone/dashboard" },
];

export default function Home() {
  return (
    <main>
      <nav>
        <ul className={styles.List}>
          {navList.map((item, index) => (
            <li key={index}>
              <Link className={styles.List_Item} href={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <h1>Main Page</h1>
    </main>
  );
}
