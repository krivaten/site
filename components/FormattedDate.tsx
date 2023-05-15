const FormattedDate: React.FC<{ post: Pick<IPost, "updated" | "created" | "date"> }> = ({ post }) => {
  if (!post || (!post.updated && !post.created && !post.date)) return null;
  let date = post.updated || post.created || post.date;
  const prefix = post.updated ? "Updated" : post.created ? "Created" : "Date";
  if (typeof date === "string") date = new Date(date);
  if (isNaN(date.getTime())) return;
  return (
    <>
      {prefix}: <time dateTime={date.toISOString()}>{date.toLocaleDateString()}</time>
    </>
  );
};

export default FormattedDate;
