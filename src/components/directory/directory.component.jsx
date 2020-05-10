import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          name: 'hats',
          imageUrl: 'https://tinyurl.com/ycvl3mdq',
          link: 'hats'
        },
        {
          id: 2,
          name: 'clothes',
          imageUrl: 'https://tinyurl.com/yaolm9td',
          link: ''
        },
        {
          id: 3,
          name: 'shoes',
          imageUrl: 'https://tinyurl.com/ya7oosq9',
          link: ''
        },
        {
          id: 4,
          name: 'mens',
          size: 'large',
          imageUrl: 'https://tinyurl.com/y8cbwnjn',
          link: ''
        },
        {
          id: 5,
          name: 'womens',
          size: 'large',
          imageUrl: 'https://tinyurl.com/y8hw6sar',
          link: ''
        }
      ]
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
