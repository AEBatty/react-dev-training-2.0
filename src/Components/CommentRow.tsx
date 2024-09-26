import React, {useEffect, useState} from 'react';
import {
    CommentText,
    CommentMetadata,
    CommentGroup,
    CommentContent,
    CommentAvatar,
    CommentAuthor,
    FormTextArea,
    Comment,
    Form,
    Header,
  } from 'semantic-ui-react'

  interface CommentRowProps{
    author: string;
    time: string;
    comment: string;
    avatar: string;

  }

  export const CommentRow = (props:CommentRowProps) => {
    return (
    <Comment>
      <CommentAvatar src={props.avatar} />
      <CommentContent>
        <CommentAuthor as='a'>{props.author}</CommentAuthor>
        <CommentMetadata>
          <div>{props.time}</div>
        </CommentMetadata>
        <CommentText>{props.comment}</CommentText>
      </CommentContent>
    </Comment>);
  }

  
