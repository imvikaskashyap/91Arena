import Image from 'next/image';
import CarouselScroll from '../carousel-scroll';

const Blog = () => {
  return (
    <div className=' borderCss w-full lg:w-[60%] '>
      {/* Card Blog */}
      <div className=" max-w-[85rem] ml-2 px-4 py-4 sm:px-6 lg:px-4">
        {/* Grid */}
          {/* Card */}
          <a className="group relative block rounded-xl lg:min-w-0" href="#">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[191px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
              <Image
                className="size-full absolute top-0 start-0 object-cover"
                src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
                alt="Image Description"
                layout="fill"
              />
            </div>

            <div className="absolute top-0 inset-x-0 z-10">
              <div className="p-4 flex flex-col h-full sm:p-6">
                {/* Avatar */}
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      className="size-[46px] border-2 border-white rounded-full"
                      src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Image Description"
                      width={46}
                      height={46}
                    />
                  </div>
                  <div className="ms-2.5 sm:ms-4">
                    <h4 className="font-semibold text-white">Gloria</h4>
                    <p className="text-xs text-white/80">Jan 09, 2021</p>
                  </div>
                </div>
                {/* End Avatar */}
              </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <h3 className="lg:text-lg sm:text-sm font-semibold text-white group-hover:text-white/80">
                  Facebook is creating a news section in Watch to feature breaking news
                </h3>
                <p className="mt-2 text-white/80">
                  Facebook launched the Watch platform in August
                </p>
              </div>
            </div>
          </a>
          {/* End Card */}

       <CarouselScroll />
        </div>
        {/* End Grid */}
      </div>
  );
};

export default Blog;
