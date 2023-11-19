export default function endpoint(pageNumber) {
  return `/photos?_page=${pageNumber}`;
}
