import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="section">
        <h2>products</h2>
      </section>
      <Outlet />
    </>
  );
};
export default Home;
