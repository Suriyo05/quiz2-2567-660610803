// You can define interfaces for all React components here.
// Do not forget to export properly.
interface CommentProps{
    userImagePath: string;
    username: string;
    commentTitle: string;
    likes: number;
    replies: ReplyProps[];

}
interface ReplyProps {
    ImagePath: string;
    username: string;
    replyTitle: string;
    likes: number;
}

export type { CommentProps,ReplyProps } ;
