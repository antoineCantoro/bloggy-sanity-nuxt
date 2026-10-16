export const BLOG_ITEM_QUERY = groq`
  *[_type == "blogItemPage" && slug.current == $slug][0]
`;
