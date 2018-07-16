import React  from 'react';
import '../App.css';

export default function Button (props) {
  const {onClick, content} = props
  return (
    <span className="button" onClick={onClick}>{content}</span>
  );
}

