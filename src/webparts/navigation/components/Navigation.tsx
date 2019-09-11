import * as React from 'react';
import styles from './Navigation.module.scss';
import { INavigationProps } from './INavigationProps';
import { escape } from '@microsoft/sp-lodash-subset';
import NavBox from './NavBox';


export default class Navigation extends React.Component<INavigationProps, {}> {
  public render(): React.ReactElement<INavigationProps> {
    return (
      <div className={ styles.container }>
        <NavBox BoxTitle="ECR"></NavBox>
        <NavBox BoxTitle="SOP"></NavBox>
        <NavBox BoxTitle="Work Instruction"></NavBox>
        <NavBox BoxTitle="SDS"></NavBox>
        <NavBox BoxTitle="Form"></NavBox>
        
      </div>
    );
  }
}
