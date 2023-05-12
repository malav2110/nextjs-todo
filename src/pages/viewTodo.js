import { fetchAllTodos } from "@/utils/todoUtils";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const ViewTodo = ({ todos }) => {
  return (
    <main className={`${styles.main}`}>
      <div className="container">
        <Link href="/">
          <button>Go to Home Page</button>
        </Link>
        <ul>
          {todos.length &&
            todos.map((todo) => (
              <li key={todo.id}>
                <span>{todo.title}</span>
                <Link href={`/todo/${todo.id}`}>
                  <button>View Todo</button>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
};

// fetch data at build time using
export async function getStaticProps() {
  const todos = await fetchAllTodos();
  return {
    props: { todos: todos.result },
  };
}

export default ViewTodo;
