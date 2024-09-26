import React, {ReactElement, useState, ReactNode} from 'react';

import {CommentRow} from './CommentRow';

import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Button,
  Card,
  Image,
} from 'semantic-ui-react';

interface ApprovalCardProps{
  children: ReactNode
}

export const ApprovalCard = (props:ApprovalCardProps) => {

  

  const [status, setStatus]= useState<boolean|undefined>(undefined);
  if(status === undefined){
    return (
      <>
        <Card>
          <CardContent>
            {props.children}
          </CardContent>
          <CardContent extra>
            
            <div className='ui two buttons'>
              <Button basic color='green' onClick={() => {setStatus(true)}}>
                Approve
              </Button>
              <Button basic color='red' onClick={() => {setStatus(false)}}>
                Decline
              </Button>
            </div>
          
          </CardContent>
        </Card>
      </>
    )
  }
  if(status){
    return <>
        <Card>
          <CardContent>
          {props.children}
          </CardContent>
        </Card>
      </>
  }
    
  return <></>;
  
}