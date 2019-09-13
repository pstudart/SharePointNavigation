import * as React from 'react';
import styles from './Navigation.module.scss';
import { INavigationProps } from './INavigationProps';
import { escape } from '@microsoft/sp-lodash-subset';
import NavBox from './NavBox';


export default class Navigation extends React.Component<INavigationProps, {}> {
  public render(): React.ReactElement<INavigationProps> {
    return (
      <div className={ styles.container }>
        <NavBox BoxTitle="ECR" Color="Green"></NavBox>
        <NavBox BoxTitle="SOP" Color="Black"></NavBox>
        <NavBox BoxTitle="Work Instruction" Color="Orange"></NavBox>
        <NavBox BoxTitle="SDS" Color="Red"></NavBox>
        <NavBox BoxTitle="Form" Color="Blue"></NavBox>
        
      </div>
    );
  }
}
