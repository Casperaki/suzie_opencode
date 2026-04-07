# content/blog/

MDX blog posts. Each `.mdx` file becomes a blog post with a URL based on its filename.

## Adding a new post

Create a new `.mdx` file in this directory. The filename (without extension) becomes the URL slug.

Example: `my-new-post.mdx` is available at `/blog/my-new-post`.

## Frontmatter format

Every post must start with YAML frontmatter:

```yaml
---
title: "Post Title"
description: "A short summary for cards and SEO."
date: "2024-01-15"
author: "Author Name"
tags: ["tag1", "tag2"]
---
```

All fields are required. The `date` field controls sort order (newest first). Tags are optional but should be an array.

## Body content

Write standard Markdown below the frontmatter. MDX lets you embed React components if needed -- custom MDX components are defined in `components/blog/mdx-components.tsx`.
