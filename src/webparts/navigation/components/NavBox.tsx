import * as React from 'react';
import styles from './Navigation.module.scss';
import { IBoxProps } from './INavBoxprops';

export default class NavBox extends React.Component<IBoxProps, {}> {
  public render(): React.ReactElement<IBoxProps> {
    return (
      <div className={ styles.container}>
      <div className={ styles.box } style={{background:this.props.Color}}>
          <div>{this.props.BoxTitle}</div>
      </div>
      </div>
      
    );
  }
}
