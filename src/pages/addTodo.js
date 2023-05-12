import { useState } from "react";
import { saveTodo } from "@/utils/todoUtils";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const addTodo = async (e) => {
    e.preventDefault();
    if (!title) return;

    await saveTodo({ id: Date.now(), title, description, dueDate })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    // Setting Default Values
    setTitle("");
    setDescription("");
    setDueDate(new Date().toISOString().split("T")[0]);
  };

  return (
    <main className={`${styles.main}`}>
      <div className="container">
        <h1>Add your TODO</h1>
        <br />
        <form onSubmit={addTodo}>
          <label htmlFor="title">Title</label>
          <br />
          <input
            id="title"
            type="text"
            value={title}
            maxLength={20}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add Title"
          />
          <br />
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            id="description"
            rows="4"
            cols="50"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add Description"
          />
          <br />
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          ></input>
          <br />
          <br />
          <br />
          <br />
          <button type="submit">Add Todo</button>
        </form>
        <br />
        <br />
        <Link href="/">
          <button>Go to Home Page</button>
        </Link>
      </div>
    </main>
  );
};

export default AddTodo;
