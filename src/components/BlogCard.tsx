import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/notion.schema";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden transition-transform hover:translate-y-[-2px]">
      <div className="relative h-48">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag) => (
            <span
              key={tag.id}
              className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200"
            >
              {tag.name}
            </span>
          ))}
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span>{post.date}</span>
        </div>
        <h2 className="text-xl font-semibold mb-2 dark:text-white">
          {post.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {post.description}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}
