import { useEffect, useMemo, useRef, useState } from "react";
import p from "prop-types";

const User = ({ data: { name }, onUserClick = null }) => {
  return (
    <div>
      <p onClick={() => onUserClick(name)}>{name}</p>
    </div>
  );
};

User.propTypes = {
  data: p.shape({
    name: p.string,
  }),
  onUserClick: p.func,
};

export default function UseRef() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const input = useRef(null);

  const handleTypeSearch = (e) => setSearch(e.target.value);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    input.current.focus();
  }, [search]);

  const handleUserClick = (value) => {
    setSearch(value);
  };

  return (
    <div className="useref">
      <h2>useRef</h2>
      <p>
        <input
          ref={input}
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
            return (
              <User key={user.id} data={user} onUserClick={handleUserClick} />
            );
          })
        );
      }, [users])}
      {users.length <= 0 && <p>Carregando...</p>}
    </div>
  );
}
