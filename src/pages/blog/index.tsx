import { useState } from "react";
import { Search } from "lucide-react";
import { BlogPost } from "@/types/notion.schema";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import TagFilter from "@/components/TagFilter";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import NotionService from "@/lib/notion";

const POSTS_PER_PAGE = 6;

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // obtener las categorias unicas de los posts.
  const uniqueCategories = [
    ...Array.from(
      new Set(
        posts.flatMap((post: BlogPost) => post.tags.map((tag) => tag.name))
      )
    ),
  ];

  console.log(uniqueCategories);

  const handleTagSelect = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((selectedTag) => selectedTag !== tag)
        : [...prev, tag]
    );
    setCurrentPage(1); // Reset to first page when selecting a tag
  };

  const filteredPosts = posts.filter((post: BlogPost) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) =>
        post.tags.some((postTag) => postTag.name === tag)
      );

    return matchesSearch && matchesTags;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <>
      <Head>
        <title>Blog!</title>
        <meta
          name={"description"}
          title={"description"}
          content={"Lista de mis articulos"}
        />
        <meta name={"og:title"} title={"og:title"} content={"Blog!"} />
        <meta
          name={"og:description"}
          title={"og:description"}
          content={"Lista de mis articulos"}
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-4xl font-bold mb-4 md:mb-0 dark:text-white">
            Articles & Work
          </h1>

          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full px-4 py-2 pl-10 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Tag Filter */}
        <div className="mb-8">
          <TagFilter
            tags={uniqueCategories as string[]}
            selectedTags={selectedTags}
            onTagSelect={handleTagSelect}
          />
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedPosts.map((post: BlogPost) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Show pagination only if there are multiple pages */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

        {/* No results message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No articles found matching your search.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const notionServices = new NotionService();
  let posts: BlogPost[];

  try {
    posts = await notionServices.getPublishedBlogPosts();
  } catch (error) {
    console.error(error);
    posts = [];
  }

  console.log(posts);

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};
