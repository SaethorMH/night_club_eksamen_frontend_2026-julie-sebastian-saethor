import { Comment } from "./CommentsSection";

type Props = {
  comment: Comment;
};
const EventComment = ({ comment }: Props) => {
  return (
    <article>
      <h3>{comment.name}</h3>
    </article>
  );
};

export default EventComment;
