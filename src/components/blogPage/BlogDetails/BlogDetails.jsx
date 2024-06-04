"use client";
import Image from "next/image";
import React, { useState } from "react";
import BlogPageRightSide from "../BlogPageRightSide/Index";
import ReactResponsiveCarousel from "@/custom-components/ReactResponsiveCarousel";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquareQuote } from "lucide-react";
import KeySpecsTable from "./KeySpecTable";
import TwoCarousel from "@/components/twoCarousel";

const BlogDetails = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Michael Gough",
      avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
      date: "Feb. 8, 2022",
      content: "Very straight-to-point article...",
      replies: [],
    },
    {
      id: 2,
      author: "Jese Leos",
      avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      date: "Feb. 12, 2022",
      content: "Much appreciated! Glad you liked it ☺️",
      replies: [],
    },
    // Add more comments as needed
  ]);

  const [newComment, setNewComment] = useState("");
  const [replyContent, setReplyContent] = useState({});
  const [showDropdown, setShowDropdown] = useState({});
  const [activeReplyForm, setActiveReplyForm] = useState(null);

  const handlePostComment = () => {
    if (newComment.trim()) {
      const newCommentData = {
        id: comments.length + 1,
        author: "You",
        avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        content: newComment,
        replies: [],
      };
      setComments([newCommentData, ...comments]);
      setNewComment("");
    }
  };

  const handleReply = (commentId) => {
    if (replyContent[commentId]?.trim()) {
      const updatedComments = comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: comment.replies.length + 1,
                author: "You",
                avatar:
                  "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
                date: new Date().toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }),
                content: replyContent[commentId],
              },
            ],
          };
        }
        return comment;
      });
      setComments(updatedComments);
      setReplyContent({ ...replyContent, [commentId]: "" });
      setActiveReplyForm(null);
    }
  };

  const toggleDropdown = (commentId) => {
    setShowDropdown({ ...showDropdown, [commentId]: !showDropdown[commentId] });
  };

  const toggleReplyForm = (commentId) => {
    setActiveReplyForm(activeReplyForm === commentId ? null : commentId);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 w-full mt-20 px-0 lg:px-8">
      <div className="w-full lg:w-[64%]">
        <main className="px-0 lg:px-8 bg-white dark:bg-gray-900 antialiased">
          <div className="flex justify-between px-4 text-lg my-3 leading-7 space-y-0.5">
            <article className="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center not-italic"></address>
                <h1 className="mb-4 text-xl font-bold leading-10 tracking-wide text-black lg:mb-6 lg:text-3xl dark:text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  ipsum voluptatum molestiae voluptates sit.
                </h1>
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <Image
                    className="mr-4 w-12 h-12 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                    width={50}
                    height={50}
                    alt="Jese Leos"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-sm font-bold text-gray-900 dark:text-white"
                    >
                      Jese Leos
                    </a>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Graphic Designer, educator & CEO Flowbite
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        Feb. 8, 2022
                      </time>
                    </p>
                  </div>
                </div>
              </header>
              <h4 className="text-lg text-red-700 font-bold mb-2">
                HIGHLIGHTS
              </h4>
              <ul className="text-lg gap-1 my-3 list-disc ml-3 leading-10 space-y-0.5">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, adipisicing elit. Veritatis, ullam!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, adipisicing elit. Veritatis, ullam!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, ullam!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, ullam!
                </li>
              </ul>
              <figure>
                <Image
                  src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                  alt="Image"
                  className="w-full"
                  width={500}
                  height={300}
                />
              </figure>
              <p className="mt-3">
                It also includes a JavaScript file that enables interactive
                components, such as modals, dropdowns, and datepickers which you
                can optionally include into your project via CDN or NPM. can
                optionally include into your project via CDN or NPM.
              </p>
              <h4 className="text-2xl font-bold my-2">Sale Details</h4>
              <li className="text-lg my-1 list-disc leading-7 space-y-0.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, adipisicing elit. Veritatis, ullam!
              </li>
              <div className="flex justify-center p-8">
                <table className="table-auto border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                        Model
                      </th>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                        VIVO S19 (CNY)
                      </th>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                        VIVO S19 PRO (CNY)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        8+256GB
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        2,500
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        3,300
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        12+256GB
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        2,600
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        3,500
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        16+256GB
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        3,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        3,800
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        16+512GB
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        3,300
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        4,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <li className="text-lg my-1 list-disc leading-7 space-y-0.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, adipisicing elit. Veritatis, ullam!
              </li>
              <li className="text-lg my-1 list-disc leading-7 space-y-0.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, adipisicing elit. Veritatis, ullam!
              </li>
              <li className="text-lg my-1 list-disc leading-7 space-y-0.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, adipisicing elit. Veritatis, ullam!
              </li>
              <ReactResponsiveCarousel />
              <h4 className="text-2xl font-bold my-2">
                Vivo S19, S19 Pro specifications
              </h4>

              <p>
                You can check out the to explore the elements by including the
                CDN files into your project. But if you want to build a project
                with Flowbite I recommend you to follow the build tools steps so
                that you can purge and minify the generated CSS.
              </p>
              <p>
                You will also receive a lot of useful application UI, marketing
                UI, and e-commerce pages that can help you get started with your
                projects even faster. You can check out this{" "}
                <a href="https://flowbite.com/docs/components/tables/">
                  comparison table
                </a>
                to better understand the differences between the open-source and
                pro version of Flowbite.
              </p>

              <ReactResponsiveCarousel />

              <h2>When does design come in handy?</h2>
              <p>
                While it might seem like extra work at a first glance, here are
                some key moments in which prototyping will come in handy:
              </p>
              <ol>
                <li>
                  <strong>Usability testing</strong>. Does your user know how to
                  exit out of screens? Can they follow your intended user
                  journey and buy something from the site you’ve designed? By
                  running a usability test, you’ll be able to see how users will
                  interact with your design once it’s live;
                </li>
                <li>
                  <strong>Involving stakeholders</strong>. Need to check if your
                  GDPR consent boxes are displaying properly? Pass your
                  prototype to your data protection team and they can test it
                  for real;
                </li>

                <h4 className="text-2xl font-bold my-2">
                  Vivo S19, S19 Pro: what are the upgrades over the S18 series?
                </h4>
                <ul className="text-lg gap-1 my-3 list-disc ml-3 leading-10 space-y-0.5">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, adipisicing <strong>elit</strong>. Veritatis,
                    ullam!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, adipisicing elit. Veritatis, ullam!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet <strong>consectetur</strong>{" "}
                    adipisicing elit. Veritatis, ullam!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, <strong>ullam</strong>!
                  </li>
                </ul>
                <div>
                  <h4 className="text-2xl font-bold my-4">Key Specs</h4>
                  <KeySpecsTable />
                </div>
                <TwoCarousel title="Best Competitors" />
              </ol>

              <aside
                aria-label="Related articles"
                className="py-8 bg-gray-50 dark:bg-gray-800"
              >
                <div className="px-4 mx-auto max-w-screen-xl">
                  <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
                    Related articles
                  </h2>
                  <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    <article className="max-w-xs">
                      <a href="#">
                        <Image
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                          className="mb-5 rounded-lg w-full"
                          alt="Image 1"
                          width={100}
                          height={100}
                        />
                      </a>
                      <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                        <a href="#">Our first office</a>
                      </h2>
                      <p className="mb-4 text-gray-500 dark:text-gray-400">
                        Over the past year, Volosoft has undergone many changes!
                        After months of preparation.
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                      >
                        Read in 2 minutes
                      </a>
                    </article>
                    <article className="max-w-xs">
                      <a href="#">
                        <Image
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
                          className="mb-5 rounded-lg w-full"
                          alt="Image 2"
                          width={100}
                          height={100}
                        />
                      </a>
                      <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                        <a href="#">Enterprise design tips</a>
                      </h2>
                      <p className="mb-4  text-gray-500 dark:text-gray-400">
                        Over the past year, Volosoft has undergone many changes!
                        After months of preparation.
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                      >
                        Read in 12 minutes
                      </a>
                    </article>
                    <article className="max-w-xs">
                      <a href="#">
                        <Image
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
                          className="mb-5 rounded-lg w-full"
                          alt="Image 3"
                          width={100}
                          height={100}
                        />
                      </a>
                      <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                        <a href="#">We partnered with Google</a>
                      </h2>
                      <p className="mb-4  text-gray-500 dark:text-gray-400">
                        Over the past year, Volosoft has undergone many changes!
                        After months of preparation.
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                      >
                        Read in 8 minutes
                      </a>
                    </article>
                    <article className="max-w-xs">
                      <a href="#">
                        <Image
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
                          className="mb-5 rounded-lg w-full"
                          alt="Image 4"
                          width={100}
                          height={100}
                        />
                      </a>
                      <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                        <a href="#">Our first project with React</a>
                      </h2>
                      <p className="mb-4  text-gray-500 dark:text-gray-400">
                        Over the past year, Volosoft has undergone many changes!
                        After months of preparation.
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                      >
                        Read in 4 minutes
                      </a>
                    </article>
                  </div>
                </div>
              </aside>

              <section className="not-format mt-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                    Discussion ({comments.length})
                  </h2>
                </div>
                <form className="mb-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <label htmlFor="comment" className="sr-only">
                      Your comment
                    </label>
                    <textarea
                      id="comment"
                      rows="6"
                      className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                      placeholder="Write a comment..."
                      required
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    ></textarea>
                  </div>
                  <Button  onClick={handlePostComment}>Post Reply</Button>
                </form>
                {comments.map((comment) => (
                  <article
                    key={comment.id}
                    className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900"
                  >
                    <footer className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                          <Image
                            className="mr-2 w-6 h-6 rounded-full"
                            src={comment.avatar}
                            alt={comment.author}
                            width={24}
                            height={24}
                          />
                          {comment.author}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <time
                            pubdate
                            datetime="2022-02-08"
                            title={comment.date}
                          >
                            {comment.date}
                          </time>
                        </p>
                      </div>
                      <button
                        onClick={() => toggleDropdown(comment.id)}
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        type="button"
                      >
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                        >
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                        <span className="sr-only ">Comment settings</span>
                      </button>
                      {showDropdown[comment.id] && (
                        <div className="z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                          <ul
                            className="py-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownMenuIconHorizontalButton"
                          >
                            <li>
                              <a
                                href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Edit
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Remove
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Report
                              </a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </footer>
                    <p>{comment.content}</p>
                    <div className="flex items-center mt-4 space-x-4">
                      <button
                        type="button"
                        onClick={() => toggleReplyForm(comment.id)}
                        className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
                      >
                         <MessageSquareQuote className="h-4" />
                        Reply
                      </button>
                    </div>
                    {activeReplyForm === comment.id && (
                      <form
                        className="ml-6 mt-4"
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleReply(comment.id);
                        }}
                      >
                        <textarea
                          rows="2"
                          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                          placeholder="Write a reply..."
                          required
                          value={replyContent[comment.id] || ""}
                          onChange={(e) =>
                            setReplyContent({
                              ...replyContent,
                              [comment.id]: e.target.value,
                            })
                          }
                        ></textarea>
                    <Button  onClick={handlePostComment}>Post Reply</Button>
                          
                       
                      </form>
                    )}
                    <div className="ml-6 mt-4">
                      {comment.replies.map((reply) => (
                        <article
                          key={reply.id}
                          className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900"
                        >
                          <footer className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                              <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                                <Image
                                  className="mr-2 w-6 h-6 rounded-full"
                                  src={reply.avatar}
                                  alt={reply.author}
                                  width={24}
                                  height={24}
                                />
                                {reply.author}
                              </p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                <time
                                  pubdate
                                  datetime="2022-02-08"
                                  title={reply.date}
                                >
                                  {reply.date}
                                </time>
                              </p>
                            </div>
                          </footer>
                          <p>{reply.content}</p>
                        </article>
                      ))}
                    </div>
                  </article>
                ))}
              </section>
            </article>
          </div>
        </main>

        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md sm:text-center">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Sign up for our newsletter
              </h2>
              <p className="mx-auto mb-8 max-w-2xl  text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
                Stay up to date with the roadmap progress, announcements and
                exclusive discounts feel free to sign up with your email.
              </p>
              <form action="#">
                <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                    <label
                      for="email"
                      className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Email address
                    </label>
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <Mail className="text-gray-400 h-4" />
                    </div>
                    <input
                      className="block p-3 pl-9 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      required=""
                    />
                  </div>
                  <div>
                    <Button className="rounded-none py-6">Subscribe</Button>
                  </div>
                </div>
                <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                  We care about the protection of your data.{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    Read our Privacy Policy
                  </a>
                  .
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <BlogPageRightSide />
    </div>
  );
};

export default BlogDetails;
