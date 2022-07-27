const Dashboard = ({ user }) => {
  return (
    <section className="section">
      {/* optional chaining */}
      <h4>Hello, {user?.name}</h4>
    </section>
  );
};
export default Dashboard;
