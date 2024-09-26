import React, {useState} from 'react';

import {ApprovalCard} from '../Components/ApprovalCard';

import {CommentRow} from '../Components/CommentRow';


import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Button,
  Card,
  Image,
} from 'semantic-ui-react';

export const InboxMessages = () => {
  return (
  <>
  <ApprovalCard>
    <CommentRow author='John Sanders' time={new Date().toLocaleDateString()} comment='Yes comment' avatar='/images/avatar/large/steve.jpg'/>
  </ApprovalCard>
  
  </>)
}