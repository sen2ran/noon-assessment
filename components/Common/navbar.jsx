import Heart from "../svg/heart";
import Home from "../svg/home";

export default function Navbar() {
  return (
    <nav className="bg-white shadow  md:px-48 border-b border-gray-400 fixed inset-x-0 top-0 z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-end pr-7 md:justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className=" flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F83d47502-0a26-42f8-a540-d7e3e69c78fe%2FHv-ZAEZY_400x400.jpg?table=block&id=fa8426b6-79af-4889-94aa-cb9caf0e32fd&spaceId=66993e31-28cc-46b5-9272-54d22ace357d&width=40&userId=&cache=v2"
                alt="Workflow logo"
              />

              <img
                className="hidden lg:block h-8 w-auto"
                src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F83d47502-0a26-42f8-a540-d7e3e69c78fe%2FHv-ZAEZY_400x400.jpg?table=block&id=fa8426b6-79af-4889-94aa-cb9caf0e32fd&spaceId=66993e31-28cc-46b5-9272-54d22ace357d&width=40&userId=&cache=v2"
                alt="Workflow logo"
              />
               &nbsp; Gram
            </div>
          </div>

          <div className="hidden sm:hidden lg:ml-4 lg:flex items-center">
            <button
              className="flex-shrink-0 p-1 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
              aria-label="Home"
            >
              <Home />
            </button>
            <button
              className="flex-shrink-0 p-1 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
              aria-label="Notifications"
            >
              <Heart />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
