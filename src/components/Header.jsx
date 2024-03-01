import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cachedResults } from "../utils/searchSlice";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    // console.log("api call-" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(cachedResults({ [searchQuery]: json[1] }));
  };

  return (
    <div className="grid grid-flow-col m-2 p-2 shadow-lg ">
      <div className="flex col-span-1">
        <img
          onClick={handleToggle}
          className="h-10 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=256"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-14 mx-7 cursor-pointer"
            src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
            alt="youtube-logo"
          />
        </a>
      </div>
      <div className="col-span-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100 hover:bg-gray-300">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white py-2 px-5 w-[38.7rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li className="py-2 px-3  hover:bg-gray-100">🔍{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-10 "
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Header;
