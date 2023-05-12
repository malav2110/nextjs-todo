import Link from "next/link";
import { fetchAllIds, fetchTodoById } from "@/utils/todoUtils";
import styles from "@/styles/Home.module.css";

export default function Todo({ todoData }) {
  const { title, description, dueDate } = todoData;
  return (
    <main className={`${styles.main}`}>
      <div>
        <h1>Todo Details</h1>
        <br />
        <h3>Title</h3>
        <br />
        <h4>{title}</h4>
        <br />
        <br />
        <h3>Description</h3>
        <br />
        <h4>{description}</h4>
        <br />
        <br />
        <h3>Due Date</h3>
        <br />
        <h4>{dueDate}</h4>
        <br />
        <Link href="/viewTodo">
          <button>Go Back</button>
        </Link>
        <br />
        <Link href="/">
          <button>Go to Home Page</button>
        </Link>
      </div>
    </main>
  );
}

// Find All the potential paths for the todo
export async function getStaticPaths() {
  const paths = await fetchAllIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const todoData = await fetchTodoById(params.id);
  return {
    props: {
      todoData,
    },
  };
}
