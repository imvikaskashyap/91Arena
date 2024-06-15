'use client'
import Image from "next/image";
import React from "react";
import BlogPageRightSide from "./BlogPageRightSide/Index";
import "./index.css"

const BlogPage = () => {
  return (
    <div className="mt-4 mx-16">
   

      <section className="dark:bg-white dark:text-gray-800">
        <div className="container p-4 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center gap-1 dark:bg-[#fff] bg-[#fff] p-5 relative"
          >
            <div className="w-1/2 relative relative-container  image-gradient">
              <Image
                alt=" "
                src="	https://www.codingwebstudio.com/livepreview/Pro%20Blog%20Website/img/leptop%20post.jpg"
                width={400}
                height={256}
                className="object-cover w-full h-64 rounded sm:h-96"
              />
             <div className="text-container">
                <div className="text-lg font-bold">11 Of Best Laptops Evaluated Based On Budget</div>
                <div>by CODER</div>
                <div>October 02, 2023</div>
              </div>
            </div>
            
            <div className="flex flex-col w-1/2 gap-1">
              <div className="relative relative-container image-gradient">
                <Image
                  alt=" "
                  src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?size=626&ext=jpg&ga=GA1.1.1480204119.1716940800&semt=sph"
                  width={400}
                  height={192}
                  className="object-cover w-full h-48 rounded dark:bg-gray-500 "
                />
                <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white w-full">
                  <div className="text-lg font-bold">Apple Watch Series 5 Is The Best One Yet By Consumer</div>
                  <div>by AUTHOR</div>
                  <div>October 02, 2023</div>
                </div>
              </div>
              
              <div className="flex gap-1">
                <div className="relative w-1/2 relative-container">
                  <Image
                    alt=" "
                    src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?size=626&ext=jpg&ga=GA1.1.1480204119.1716940800&semt=sph"
                    width={200}
                    height={200}
                    className="object-cover w-full h-48 rounded dark:bg-gray-500 image-gradient"
                  />
                  <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white w-full">
                    <div className="text-lg font-bold">11 Of Best Laptops Evaluated Based On Budget</div>
                    <div>by CODER</div>
                    <div>October 18, 2023</div>
                  </div>
                </div>
                
                <div className="relative w-1/2 relative-container">
                  <Image
                    alt=" "
                    src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?size=626&ext=jpg&ga=GA1.1.1480204119.1716940800&semt=sph"
                    width={200}
                    height={200}
                    className="object-cover w-full h-48 rounded dark:bg-gray-500 image-gradient"
                  />
                  <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white w-full">
                    <div className="text-lg font-bold">18 Practices For Building Responsive Web Applications</div>
                    <div>by AUTHOR</div>
                    <div>October 02, 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <div className="flex flex-col lg:flex-row gap-10 w-full bg-[#fff]">
            <div className="w-full lg:w-4/6">
              <div className="grid justify-center grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
                >
                  <Image
                    alt=" "
                    role="presentation"
                    className="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?size=626&ext=jpg&ga=GA1.1.1480204119.1716940800&semt=sph"
                    width={400}
                    height={256}
                  />
                  <div className="py-3 px-1 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                      In usu laoreet repudiare legendos
                    </h3>
                    <span className="text-xs dark:text-gray-600">
                      January 21, 2021
                    </span>
                    <p>
                      Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                      neglegentur, ex has tantas percipit perfecto. At per
                      tempor albucius perfecto, ei probatus consulatu patrioque
                      mea, ei vocent delicata indoctum pri.
                    </p>
                  </div>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
                >
                  <Image
                    alt=" "
                    role="presentation"
                    className="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?size=626&ext=jpg&ga=GA1.1.1480204119.1716940800&semt=sph"
                    width={400}
                    height={256}
                  />
                  <div className="py-3 px-1 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                      In usu laoreet repudiare legendos
                    </h3>
                    <span className="text-xs dark:text-gray-600">
                      January 22, 2021
                    </span>
                    <p>
                      Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                      neglegentur, ex has tantas percipit perfecto. At per
                      tempor albucius perfecto, ei probatus consulatu patrioque
                      mea, ei vocent delicata indoctum pri.
                    </p>
                  </div>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
                >
                  <Image
                    alt=" "
                    role="presentation"
                    className="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?size=626&ext=jpg&ga=GA1.1.1480204119.1716940800&semt=sph"
                    width={400}
                    height={256}
                  />
                  <div className="py-3 px-1 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                      In usu laoreet repudiare legendos
                    </h3>
                    <span className="text-xs dark:text-gray-600">
                      January 23, 2021
                    </span>
                    <p>
                      Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                      neglegentur, ex has tantas percipit perfecto. At per
                      tempor albucius perfecto, ei probatus consulatu patrioque
                      mea, ei vocent delicata indoctum pri.
                    </p>
                  </div>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
                >
                  <Image
                    alt=" "
                    role="presentation"
                    className="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?size=626&ext=jpg&ga=GA1.1.1480204119.1716940800&semt=sph"
                    width={400}
                    height={256}
                  />
                  <div className="py-3 px-1 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                      In usu laoreet repudiare legendos
                    </h3>
                    <span className="text-xs dark:text-gray-600">
                      January 24, 2021
                    </span>
                    <p>
                      Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                      neglegentur, ex has tantas percipit perfecto. At per
                      tempor albucius perfecto, ei probatus consulatu patrioque
                      mea, ei vocent delicata indoctum pri.
                    </p>
                  </div>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
                >
                  <Image
                    alt=" "
                    role="presentation"
                    className="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?size=626&ext=jpg&ga=GA1.1.1480204119.1716940800&semt=sph"
                    width={400}
                    height={256}
                  />
                  <div className="py-3 px-1 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                      In usu laoreet repudiare legendos
                    </h3>
                    <span className="text-xs dark:text-gray-600">
                      January 25, 2021
                    </span>
                    <p>
                      Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                      neglegentur, ex has tantas percipit perfecto. At per
                      tempor albucius perfecto, ei probatus consulatu patrioque
                      mea, ei vocent delicata indoctum pri.
                    </p>
                  </div>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
                >
                  <Image
                    role="presentation"
                    className="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?size=626&ext=jpg&ga=GA1.1.1480204119.1716940800&semt=sph"
                    alt=""
                    width={400}
                    height={256}
                  />
                  <div className="py-3 px-1 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                      In usu laoreet repudiare legendos
                    </h3>
                    <span className="text-xs dark:text-gray-600">
                      January 26, 2021
                    </span>
                    <p>
                      Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                      neglegentur, ex has tantas percipit perfecto. At per
                      tempor albucius perfecto, ei probatus consulatu patrioque
                      mea, ei vocent delicata indoctum pri.
                    </p>
                  </div>
                </a>
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
                >
                  Load more posts...
                </button>
              </div>
            </div>
            <BlogPageRightSide />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
