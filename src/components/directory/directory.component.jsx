import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import DIRECTORY_DATA from '../../data/directory.data.jsx';
import './directory.style.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: DIRECTORY_DATA
    };
  }
  render() {
    return (
      <div className="directory">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
