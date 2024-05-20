export default function ImageCard({
  image: {
    urls: { thumb },
    alt_description,
  },
}) {
  return (
    <div>
      <img src={thumb} alt={alt_description} />
    </div>
  );
}
