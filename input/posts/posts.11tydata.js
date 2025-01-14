/*
console.log(data.page);
{
  date: 2021-11-01T12:00:00.000Z,
  inputPath: './input/posts/2021/2021-11-01-taking-notes.md',
  fileSlug: 'taking-notes',
  filePathStem: '/posts/2021/taking-notes',
  url: '/notes/',
  outputPath: '_dist/notes/index.html'
}
*/

module.exports = {
  eleventyComputed: {
    permalink: data => {
      return data.page.fileSlug + "/index.html";
    },
    layout: "post",
    modified: "Last Modified",
    date: data => {
      const { inputPath, fileSlug } = data.page;
      const inputPathParts = inputPath.split("/");
      const fileName = inputPathParts[inputPathParts.length - 1];
      const postDate = fileName.replace(`-${fileSlug}.md`, "");
      return postDate + " 12:00:00"
    }
  }
};

