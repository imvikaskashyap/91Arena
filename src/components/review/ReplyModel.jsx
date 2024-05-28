import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ReplyPage() {
  const [username, setUsername] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the reply
    // Add your logic here to handle the submission of the reply
  };

  return (
    <div className="flex justify-center borderCss">
      <div className="p-8 w-full ">
        <h2 className="text-2xl font-bold mb-4 ">Post a Reply</h2>
        <div className="flex items-center justify-end">
          Not Logged In ?
          <Link href="/v1/auth/login">
            <Button className="underline border-e" variant="link">
              Log In
            </Button>
          </Link>
          <Link href="/v1/auth/signup">
            <Button className="underline" variant="link">
              SignUp
            </Button>
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1 font-semibold">
              Your Name
            </label>
            <input
              id="username"
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="review" className="block mb-1 font-semibold">
              Your Review
            </label>
            <textarea
              id="review"
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          </div>
          <div className="flex items-end justify-end">
            <Button>Submit</Button>
          </div>
        </form>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Posting rules :</h3>
          <ul className=" text-sm tracking-wider font-semibold leading-6 list-disc list-inside">
            <li>English only</li>
            <li>Please be polite and use common sense</li>
            <li>No expressions of hatred or discrimination</li>
            <li>No politics or religious discussions</li>
            <li>No SPAM or commercial advertising</li>
            <li>No bashing or trolling</li>
            <li>Read before you post. Search before you post.</li>
            <li>Avoid posting personal contact info</li>
            <li>Follow the rules to avoid post deletion</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
