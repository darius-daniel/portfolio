export const snippet1 = {
  code: `const copyToClipboard = () => {
navigator.clipboard
  .writeText(text)
  .then(() => {
    setComponent(tick);
    setTimeout(() => {
      setComponent(copy);
    }, 2000);
  })
  .catch((error: Error) => console.error(error.message));
};`,
  comment: "",
};

export const snippet2 = {
  code: `export async function getLinks(userId: string, currentPage: number) {
  const maxLinksPerPage = 10;
  return await prisma.link.findMany({
    where: { creator_id: userId },
    skip: (currentPage - 1) * maxLinksPerPage,
    take: maxLinksPerPage,
    orderBy: { created_at: 'desc' },
  });
}`,
  comment: "",
};
