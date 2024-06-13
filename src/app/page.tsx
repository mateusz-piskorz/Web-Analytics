import style from "./page.module.scss";
import Link from "next/link";
import { getAllProjects } from "@/src/db/data-access/project";
import Image from "next/image";

const Home = async () => {
  const projects = await getAllProjects();

  return (
    <main className={style.Main}>
      <div>
        <h1 className={style.Main_Title}>
          <span>Web </span>Analytics
        </h1>
        <Image src="/chartImg.svg" alt="chart image" width={325} height={235} />
      </div>
      <nav>
        <ul>
          {projects.length ? (
            projects.map(({ name, nameLabel }, index) => (
              <li key={index}>
                <Link
                  className={style.Main_ListItem}
                  href={`${name}/dashboard`}
                >
                  {nameLabel}
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
