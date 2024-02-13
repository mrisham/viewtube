const Header = () => {
  return (
    <div className="grid grid-flow-col m-2 p-2 shadow-lg ">
      <div className="flex col-span-1">
        <img
          className="h-10"
          src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=256"
          alt="menu"
        />
        <img
          className="h-14 mx-7"
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100 hover:bg-gray-300">
          🔍
        </button>
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
