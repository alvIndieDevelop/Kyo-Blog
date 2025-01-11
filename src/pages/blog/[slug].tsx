import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import NotionService from "@/lib/notion";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

export default function BlogPost({
  markdown,
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 dark:text-white">
            Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta
          name={"description"}
          title={"description"}
          content={post.description}
        />
        <meta name={"og:title"} title={"og:title"} content={post.title} />
        <meta
          name={"og:description"}
          title={"og:description"}
          content={post.description}
        />
        <meta name={"og:image"} title={"og:image"} content={post.cover} />
      </Head>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <Image
          src={post.cover}
          alt={post.title}
          width={900}
          height={500}
          className="rounded-lg mb-8 w-full object-cover"
        />

        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-300 gap-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <time>{post.date}</time>
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center flex-wrap gap-2">
                <Tag className="w-4 h-4" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown>{markdown.parent}</ReactMarkdown>
        </div>
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const ns = new NotionService();
  const posts = await ns.getPublishedBlogPosts();
  const paths = posts.map((post) => {
    return `/blog/${post.slug}`;
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const ns = new NotionService();
  const post = await ns.getSingleBlogPost(params?.slug as string);

  if (!post) {
    throw "";
  }

  return {
    props: {
      markdown: post.markdown,
      post: post.post,
    },
  };
};
