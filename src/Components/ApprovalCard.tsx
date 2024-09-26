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
    console.log(status);
    return (
      <>
        {(() => {
        if(status === undefined || status){
          return (
          <Card>
            <CardContent>
              {props.children}
            </CardContent>
              {(() => {
                if(status === undefined || !status){
                return (
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
                )}
              }
            )()}
          </Card>
          )}
        }
      )()}
      </>
    )
  }  
