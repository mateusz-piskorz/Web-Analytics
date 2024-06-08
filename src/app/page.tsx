import styles from "./page.module.scss";
import Link from "next/link";
import { getAllProjects } from "@/src/db/data-access/project";

const Home = async () => {
  const projects = await getAllProjects();

  return (
    <main>
      <nav>
        <ul className={styles.List}>
          {projects.length ? (
            projects.map(({ name }, index) => (
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
