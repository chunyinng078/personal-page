import React from "react";

export function HeaderList({ item }) {
  console.log(item.url);

  return (
    <li>
      <a href={item.url} aria-current="page">
        {item.title}
      </a>
    </li>
  );
}
