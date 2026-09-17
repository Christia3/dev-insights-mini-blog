import Header from "./components/Header";
import PostList from "./components/PostList";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <section
          style={{
            textAlign: "center",
            padding: "50px 20px 30px",
          }}
        >
          <h2>Welcome to Dev Insights</h2>

          <p>
            A place for developers to share quick tips, insights, and updates.
          </p>
        </section>

        <PostList />
      </main>
    </>
  );
}

export default App;