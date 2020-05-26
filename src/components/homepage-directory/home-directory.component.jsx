import React from 'react';
import HomeDirectoryItem from './homepage-directory-item/home-directory-item.component';
import './home-directory.style.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectory } from '../../redux/directory/directory.selector';

const HomeDirectory = ({ directory }) => (
  <div className="directory">
    {directory.map(({ id, ...otherProps }) => (
      <HomeDirectoryItem key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  directory: selectDirectory
});

export default connect(mapStateToProps)(HomeDirectory);
