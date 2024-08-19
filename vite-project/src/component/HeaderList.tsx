import React from "react";
import { Router, Route, Link } from 'react-router-dom'
 
export function HeaderList({ item }) {
  console.log(item.url);



  return (
    <li>
      <Link to={item.url} > 
        {item.title}
      </Link>
    </li>
  );
}
