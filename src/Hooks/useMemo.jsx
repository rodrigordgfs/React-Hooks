import { useEffect, useMemo, useState } from "react";
import p from "prop-types";

const User = ({ data: { name } }) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

User.propTypes = {
  data: p.shape({
    name: p.string,
  }),
};

export default function UseMemo() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const handleTypeSearch = (e) => setSearch(e.target.value);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }, 2000);
  }, []);

  return (
    <div className="usememo">
      <h2>useMemo</h2>
      <p>
        <input
          type="search"
          name="search"
          id="search"
          value={search}
          onChange={handleTypeSearch}
        />
      </p>
      {useMemo(() => {
        return (
          users.length > 0 &&
          users.map((user) => {
            return <User key={user.id} data={user} />;
          })
        );
      }, [users])}
      {users.length <= 0 && <p>Carregando...</p>}
    </div>
  );
}
