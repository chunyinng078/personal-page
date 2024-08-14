// export const HeaderList = ({item}) => {
//   return (
//     <li>
//       <a
//         href={item.url}
//         className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
//         aria-current="page"
//       >
//         {item.title}
//       </a>
//     </li>
//   );
// };
import React from "react";

export function HeaderList({item}) {

console.log("12333");

  return (
    <li>
      <a
        href={item.url}
        className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
        aria-current="page"
      >
        {item.title}
      </a>
    </li>
  );
}

