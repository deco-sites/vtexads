export function markdownToHtml(markdown: string): string {
  const linkRegex = /\[(.*?)\]\((.*?)\)/g;
  const boldRegex = /\*\*\*(.*?)\*\*\*/g;

  return markdown
    .replace(linkRegex, '<a href="$2" title="Link para $1">$1</a>')
    .replace(boldRegex, "<strong>$1</strong>");
}
