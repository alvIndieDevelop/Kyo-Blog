const options = {
  APP: {
    SEO: {
      DEFAULT_TITLE: "Kyo-Sai Nieves Blog",
      DEFAULT_DESCRIPTION: "Blog personal de Kyo-Sai Nieves.",
      DEFAULT_URL: "https://kyo-sai-blog.netlify.app/",
    },
  },
  NOTION: {
    ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN,
    BLOG_DATABASE_ID: process.env.NOTION_BLOG_DATABASE_ID,
  },
  GOOGLE: {
    ANALYTICS: {
      TRACKING_ID: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
    },
  },
};

export default options;
