// You can define interfaces for all React components here.
// Do not forget to export properly.
interface CommentProps{
    userImagePath: string;
    username: string;
    commentText: string;
    likeNum: number;
    replies: ReplyProps[];

}
interface ReplyProps {
    ImagePath: string;
    username: string;
    replyTitle: string;
    likes: number;
}

export type { CommentProps,ReplyProps } ;
