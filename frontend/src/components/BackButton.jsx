import { Link } from "react-router-dom";
const BackButton = ({ destination = "/" }) => {
  return (
    <>
      <div className="m-4">
        <Link to={destination}>
          <button
            type="button"
            class="w-full flex items-center justify-center  px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-green-700 dark:bg-green-600 hover:bg-gray-100 dark:text-gray-200 dark:border-green-700"
          >
            <svg
              class="w-5 h-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            <span>Go back</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default BackButton;
