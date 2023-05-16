import FormattedDate from "@/components/FormattedDate";
import {
  // SimpleLayout,
  // DocsLayout,
  UnstyledLayout,
  // BlogLayout,
} from "@flowershow/core";
import serializeBannerPath from "../lib/serializeBannerPath";
import { Container } from "@/components/Container";
import { CldImage } from "next-cloudinary";

interface Props extends IPost {}

export const SimpleLayout: React.FC<any> = ({ children, ...frontMatter }) => {
  const { title, description } = frontMatter;
  return (
    <Container className="my-16 sm:mt-32">
      <header className="max-w-4xl">
        <div className="text-left">
          <h1 className="text-4xl font-bold tracking-tight  text-trueGray-800 sm:text-5xl md:text-5xl">
            <span className="block xl:inline">{title}</span>
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">{description}</p>
        </div>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  );
};

export const BlogLayout: React.FC<Props> = ({ children, ...frontMatter }) => {
  const { title, date } = frontMatter;
  const banner = serializeBannerPath(frontMatter);

  return (
    <article className="blog prose prose-a:text-primary dark:prose-a:text-primary-dark dark:prose-invert mx-auto p-6">
      <header>
        <div className="mb-4 ">
          {title && <h1 className="">{title}</h1>}
          {date && (
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              <FormattedDate post={frontMatter} />
            </p>
          )}
          {banner && <CldImage src={banner} alt="" className="rounded-md" width="1200" height="675" format="auto" />}
        </div>
      </header>
      <section>{children}</section>
    </article>
  );
};

export const DocsLayout: React.FC<IPost> = ({ children, ...frontMatter }) => {
  const { title, created } = frontMatter;
  return (
    <article className="docs prose prose-a:text-primary dark:prose-a:text-primary-dark dark:prose-invert mx-auto p-6">
      <header className="mb-b">
        {title && <h1>{title}</h1>}
        {created && (
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            <FormattedDate post={frontMatter} />
          </p>
        )}
      </header>
      <section>{children}</section>
    </article>
  );
};

export default {
  simple: SimpleLayout,
  docs: DocsLayout,
  unstyled: UnstyledLayout,
  blog: BlogLayout,
};
