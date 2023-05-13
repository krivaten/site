import {
  SimpleLayout,
  // DocsLayout,
  UnstyledLayout,
  // BlogLayout,
} from "@flowershow/core";

interface Props {
  title: string;
  banner?: string;
  date: string;
  description?: string;
  children: React.ReactNode;
  updated?: string;
}

export const BlogLayout: React.FC<Props> = ({ children, ...frontMatter }) => {
  const { title, date } = frontMatter;

  let bannerUrl = frontMatter.banner;
  if (bannerUrl.match(/\.(jpeg|jpg|gif|png|svg)$/)) {
    bannerUrl = bannerUrl.replace(/^.*[\\\/]/, "");
    bannerUrl = `/blog/assets/${bannerUrl}`;
  }

  return (
    <article className="blog prose prose-a:text-primary dark:prose-a:text-primary-dark dark:prose-invert mx-auto p-6">
      <header>
        <div className="mb-4 flex-col items-center">
          {title && <h1 className="flex justify-center">{title}</h1>}
          {date && (
            <p className="text-sm text-zinc-400 dark:text-zinc-500 flex justify-center">
              <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
            </p>
          )}
          <img src={bannerUrl} className="" />
        </div>
      </header>
      <section>{children}</section>
    </article>
  );
};

export const DocsLayout: React.FC<any> = ({ children, ...frontMatter }) => {
  const { title, created } = frontMatter;
  return (
    <article className="docs prose prose-a:text-primary dark:prose-a:text-primary-dark dark:prose-invert mx-auto p-6">
      <header>
        <div className="mb-6">
          {created && (
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              <time dateTime={created}>{new Date(created).toLocaleDateString()}</time>
            </p>
          )}
          {title && <h1>{title}</h1>}
        </div>
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
