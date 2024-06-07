import styles from "./page.module.scss";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const Home = async () => {
  const project = await db.project.findMany();
  return (
    <main>
      <nav>
        <ul className={styles.List}>
          {project.length ? (
            project.map(({ name }, index) => (
              <li key={index}>
                <Link className={styles.List_Item} href={`${name}/dashboard`}>
                  {name}
                </Link>
              </li>
            ))
          ) : (
            <h1>There is no projects available</h1>
          )}
        </ul>
      </nav>
    </main>
  );
};

export default Home;
