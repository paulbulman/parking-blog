import { BLOG_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <section className="flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-center text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        {BLOG_NAME}
      </h1>
      <h4 className="text-center text-lg mt-5">
        Or at least some hopefully-interesting things from the journey
      </h4>
    </section>
  );
};

export default Intro;
