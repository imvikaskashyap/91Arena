import Image from "next/image";

const TrendingNews = ({title}) => {
  return (
    <div className=" p-4 flex flex-col w-full bg-white mt-6">
      <div className="title-line mb-4">
        <span className="specTitle">{title}</span>
        <h2></h2>
      </div>
      <div className="px-2 py-4 flex justify-between cursor-pointer ">
        <div className="text-gray-700 font-bold text-sm w-3/4">
          Can coffee make you a better developer? Can coffee make you a better
          developer?
        </div>
        <div className="text-center w-2/6 h-20 sm:h-20 lg:h-20 relative">
          <Image
            className="rounded-lg p-1"
            src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
            alt="Image Description"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="px-2 py-4 flex justify-between cursor-pointer ">
        <div className="text-gray-700 font-bold text-sm w-3/4">
          Can coffee make you a better developer? Can coffee make you a better
          developer?
        </div>
        <div className="text-center w-2/6 h-20 sm:h-20 lg:h-20 relative">
          <Image
            className="rounded-lg p-1"
            src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
            alt="Image Description"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="px-2 py-4 flex justify-between cursor-pointer ">
        <div className="text-gray-700 font-bold text-sm w-3/4">
          Can coffee make you a better developer? Can coffee make you a better
          developer?
        </div>
        <div className="text-center w-2/6 h-20 sm:h-20 lg:h-20 relative">
          <Image
            className="rounded-lg p-1"
            src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
            alt="Image Description"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="px-2 py-4 flex justify-between cursor-pointer ">
        <div className="text-gray-700 font-bold text-sm w-3/4">
          Can coffee make you a better developer? Can coffee make you a better
          developer?
        </div>
        <div className="text-center w-2/6 h-20 sm:h-20 lg:h-20 relative">
          <Image
            className="rounded-lg p-1"
            src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
            alt="Image Description"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex justify-center">
                <button
                  type="button"
                  className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
                >
                  Load more...
                </button>
              </div>
    </div>
  );
};

export default TrendingNews;
