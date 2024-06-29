const Hero = () => {
  return (
    <div className="mx-auto max-w-screen-2xl ">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <div className="bg-white p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center">
            <h2
              className="text-4xl font-bold text-blue-600 leading-relaxed"
              style={{ fontFamily: "Playwrite AU QLD, sans-serif" }}
            >
              Welcome to Book Review Website
            </h2>

            <p
              className="hidden text-blue-400 sm:mt-4 sm:block leading-relaxed"
              style={{ fontFamily: "Playwrite AU QLD, sans-serif" }}
            >
              Dive into a world of literature with our comprehensive book
              reviews. Our platform allows you to explore new books, read
              detailed reviews, and share your own insights with a community of
              book enthusiasts. Whether you&apos;re looking for your next great
              read or want to see what others think of a book you&apos;ve
              enjoyed, our website offers a wealth of information to guide your
              literary journey.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 lg:grid-cols-2">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
            className="h-40 w-full object-cover sm:h-56 md:h-full"
          />

          <img
            alt=""
            src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="h-40 w-full object-cover sm:h-56 md:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
