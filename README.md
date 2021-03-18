# CYPMH-DOCS

Basic gatsby site that renders markdown week-notes and adrs. 

All markdown files should be created in the /markdown-pages folder and should comprise of a frontmatter and main content. The front matter should be placed between the triple dashes "---" and include the following key value pairs:

- slug: the url that the page should be found at
- date: the date the post was published or is related to, and the order it will be displayed in
- title: the title of the post
- type: either adr or week-note, how the system splits the type types of documents

``` 
---
slug: "/week-notes/20210318"
date: "2021-03-18"
title: "title"
type: "week-note"
---
# content here

```
