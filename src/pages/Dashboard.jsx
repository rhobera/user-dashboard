import { useAuth } from '../context/AuthContext';
import useFetchUsers from '../hooks/useFetchUsers';
import UserCard from '../components/UserCard';

const Dashboard = () => {
  const { logout } = useAuth();
  const { users, loading, error } = useFetchUsers('https://jsonplaceholder.typicode.com/users');

  if (loading) return <div className="loader">Loading users...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>User Directory</h1>
        <button className="btn-secondary" onClick={logout}>Logout</button>
      </header>
      
      <div className="user-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;