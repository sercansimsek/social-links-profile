import avatar from "./images/assets/images/avatar-jessica.jpeg";

export const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen font-['Inter'] bg-[#141414]">
      <div className="flex flex-col items-center justify-center border-none rounded-lg p-6 bg-[#1f1f1f] w-[327px] sm:w-[384px]">
        <div className="h-24 w-24 mb-6">
          <img src={avatar} alt="avatar" className="rounded-full" />
        </div>

        <div className="flex flex-col text-center gap-2 mb-6">
          <span className="text-[#fff] font-bold text-2xl">
            Jessica Randall
          </span>
          <span className="text-[#c5f82a] font-medium text-sm">
            London, United Kingdom
          </span>
        </div>

        <div className="mb-5 text-[#fff]">
          <span className="text-sm font-medium">
            "Front-end developer and avid reader"
          </span>
        </div>

        <div className="flex flex-col gap-3 text-center text-[#fff] w-full font-bold text-md">
          <a href="https://github.com" target="_blank" className="link">
            GitHub
          </a>

          <a
            href="https://www.frontendmentor.io"
            target="_blank"
            className="link"
          >
            Frontend Mentor
          </a>

          <a href="https://linkedin.com" target="_blank" className="link">
            Linkedin
          </a>

          <a href="https://x.com" target="_blank" className="link">
            X
          </a>

          <a href="https://instagram.com" target="_blank" className="link">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};
