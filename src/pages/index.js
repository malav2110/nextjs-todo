import styles from "@/styles/Home.module.css";
import Link from "next/link";

const TodoApp = () => {
  return (
    <main className={`${styles.main}`}>
      <div className="container">
        <h1>Welcome to the Todo App</h1>
        <br />
        <Link href="/addTodo">
          <button>Go to Add Page</button>
        </Link>
        <Link href="/viewTodo">
          <button>Go to View Page</button>
        </Link>
      </div>
    </main>
  );
};

export default TodoApp;
