import React from "react";
import FormattedDate from "./FormattedDate";
import Image from "next/image";
import serializeBannerPath from "@/lib/serializeBannerPath";

const RecentPosts: React.FC<{ blogs: IPost[] }> = ({ blogs }) => {
  return (
    <div className="py-10 sm:px-2 lg:relative lg:px-0" id="how">
      <div className="prose dark:prose-invert mx-auto max-w-6xl p-4 lg:max-w-6xl lg:p-8 xl:p-12">
        <h2 className="text-center">Publish your digital garden with Flowershow</h2>
        <p>
          We are actively trialling Flowershow before wide release. If you'd like to help us test or be first on the
          list to use it please sign up using the form at the top of this page.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4 lg:gap-12">
          {/* 1. markdown folder */}
          {blogs.map((blog) => {
            const banner = serializeBannerPath(blog);
            return (
              <>
                <div className="relative">
                  <div className="flex items-center space-x-4 sm:space-x-8">
                    <div className="relative w-20 h-20 aspect-square">
                      {banner && <Image src={banner} alt="" width={400} height={400} className="object-fill" />}
                    </div>
                    <div>
                      <h3 className="m-0">{blog.title}</h3>
                      <p>
                        <FormattedDate post={blog} />
                      </p>
                    </div>
                  </div>
                </div>
                <img src="/assets/images/content_folder.png" alt="" className="lg:max-h-[20rem] m-0 lg:my-6" />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
