import { useMemo, useState } from "react";
import { useGetUsersQuery } from "../features/api/apiSlice";
import { ThemeContext } from "../contexts/ThemeContext";
import { Counter } from "../features/counter/Counter";
import { AddUserForm } from "../components/AddUserForm/AddUserForm";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { UserCard } from "../components/UserCard/UserCard";

export function BoardPage() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("light");

  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const filteredUsers = useMemo(() => {
    console.log(`filtering users`);

    return (
      users?.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      ) ?? []
    );
  }, [users, query]);
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <button onClick={toggleTheme}>
          Toggle Theme: Current Theme: {theme}
        </button>
        {isLoading && <p>Loading users...</p>}
        {isError && <p>Error: {error?.toString()}</p>}
        <Counter />
        <hr />
        <AddUserForm />
        <SearchBar onQueryChange={setQuery} query={query} />
        {isSuccess &&
          filteredUsers.map((user) => <UserCard key={user.id} {...user} />)}
      </ThemeContext.Provider>
    </div>
  );
}
