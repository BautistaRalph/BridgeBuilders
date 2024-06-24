import Tooltip from "./Tooltip";

const Appbar = () => {
  return (
    <>
      <div className="flex align-center w-full h-28 bg-bb-white p-4 sticky top-0 z-10">
        <div className="h-full w-28 md:w-48">
          <a href="/">
            <img
              src="/src/assets/logo2.png"
              className="object-fill cursor-pointer"
            />
          </a>
        </div>

        <div className="flex-grow"></div>

        <div className="flex items-center">
          <Tooltip tooltipText={"Overview"} className="mr-6 ml-6">
            <a href="/overview">
              <span className="material-symbols-outlined text-3xl md:text-5xl text-center text-bb-purple hover:text-bb-violet cursor-pointer">
                groups
              </span>
            </a>
          </Tooltip>

          <Tooltip tooltipText={"Archive"} className=" mr-6 ml-6 ">
            <a href="/archive">
              <span className="material-symbols-outlined text-3xl md:text-5xl text-center text-bb-purple hover:text-bb-violet cursor-pointer">
                folder_open
              </span>
            </a>
          </Tooltip>

          <Tooltip tooltipText={"Create"} className=" mr-6 ml-6 ">
            <a href="/create">
              <span className="material-symbols-outlined text-3xl md:text-5xl text-center text-bb-purple hover:text-bb-violet cursor-pointer">
                add_circle
              </span>
            </a>
          </Tooltip>

          <Tooltip tooltipText={"Sign Out"} className=" mr-6 ml-6 ">
            <a href="/logout">
              <span className="material-symbols-outlined text-3xl md:text-5xl text-center text-bb-purple hover:text-bb-violet cursor-pointer">
                logout
              </span>
            </a>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Appbar;
