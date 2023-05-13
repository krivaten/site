import { useEffect, useRef } from "react";
import Typed from "typed.js";

/* eslint jsx-a11y/label-has-associated-control: off */
export default function Hero() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["marriage and fatherhood.", "exploring exciting ideas.", "building the local community."],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    };

    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="overflow-hidden -mb-32 mt-[-4.5rem] pb-32 pt-[4.5rem] lg:mt-[-4.75rem] lg:pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:py-20 lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative mb-10 lg:mb-0 md:text-center lg:text-left">
            <div role="heading" className="h-44 md:h-32 lg:h-44 xl:h-32">
              <h1 className="inline bg-gradient-to-r from-primary-200 via-primary-500 to-primary-200 bg-clip-text text-6xl tracking-tight text-transparent">
                With a focus on
                <br />
                <span className="md:whitespace-pre lg:whitespace-normal xl:whitespace-pre" ref={el} />
              </h1>
            </div>
            <p className="mt-4 text-3xl text-primary dark:text-primary-dark tracking-tight">
              A haven for resilient hearts and sharp minds.
            </p>
            <p className="mt-4 text-xl tracking-tight text-slate-400">
              I seek to encourage husbands and fathers, by sharing wisdom and personal experiences that light the way.
              Dive into thoughtful explorations on building faith, family, and home, alongside insightful writings on
              software engineering and everyday curiosity.
            </p>
          </div>
          <div className="relative">
            <img
              src="/assets/images/obsidian_dark_new.png"
              alt=""
              className="relative -top-14 w-3/4 rounded-lg hidden dark:block"
            />
            <img
              src="/assets/images/flowershow_dark.png"
              alt=""
              className=" absolute top-10 left-1/3 w-3/4 rounded-lg hidden dark:block"
            />
            <img
              src="/assets/images/obsidian_light_new.png"
              alt=""
              className="relative -top-14 w-3/4 rounded-lg dark:hidden"
            />
            <img
              src="/assets/images/flowershow_light.png"
              alt=""
              className=" absolute top-10 left-1/3 w-3/4 rounded-lg dark:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
