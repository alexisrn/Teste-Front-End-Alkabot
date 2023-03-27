import * as S from "./styles";
import { useState } from "react";
// import { BiSearch } from "react-icons/Bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { SideBar } from "../../components/sidebar";

export const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  const handleToggle = () => setSideBar(!sideBar);

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <>
      <nav>
        <S.Container>
          <span>Alkabot</span>
          <p>
            <RxHamburgerMenu onClick={handleToggle} />
            {sideBar && <SideBar active={setSideBar} />}
          </p>

          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/post">
              <li>Posts</li>
            </Link>
          </ul>

          <form onSubmit={handleSubmit}>
            <button onSubmit={handleSubmit}>
              {/* <BiSearch /> */}
              Search
            </button>
            <S.Input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </form>
        </S.Container>
      </nav>
    </>
  );
};
