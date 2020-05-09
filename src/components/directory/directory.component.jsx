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
          imageUrl: 'https://tinyurl.com/ycvl3mdq'
        },
        {
          id: 2,
          name: 'clothes',
          imageUrl: 'https://tinyurl.com/yaolm9td'
        },
        {
          id: 3,
          name: 'shoes',
          imageUrl: 'https://tinyurl.com/ya7oosq9'
        },
        {
          id: 4,
          name: 'mens',
          size: 'large',
          imageUrl: 'https://tinyurl.com/y8cbwnjn'
        },
        {
          id: 5,
          name: 'womens',
          size: 'large',
          imageUrl: 'https://tinyurl.com/y8hw6sar'
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory">
        {this.state.sections.map(({ id, name, size, imageUrl }) => (
          <MenuItem key={id} name={name} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
