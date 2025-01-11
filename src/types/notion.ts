export interface NotionPost {
  id: string;
  properties: {
    Title: {
      title: Array<{
        plain_text: string;
      }>;
    };
    Slug: {
      rich_text: Array<{
        plain_text: string;
      }>;
    };
    Content: {
      rich_text: Array<{
        plain_text: string;
      }>;
    };
    Date: {
      date: {
        start: string;
      };
    };
    Author: {
      rich_text: Array<{
        plain_text: string;
      }>;
    };
    Tags: {
      multi_select: Array<{
        name: string;
      }>;
    };
  };
}
