import React from "react";
import s from './Paginator.module.css';


export const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    //Высчитываем количество нужных нам страниц в Page count: делим общее количество всех пользователей с сервера (кол-во страниц определили сами = 5, нужно разделить общее колво пользователей на колво страниц)
  //let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pagesCount = Math.ceil(totalUsersCount / pageSize)

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className="">
      {pages.map((page) => (
        <span
          className={currentPage === page ? s.selectedPage : ""}
          onClick={(e) => {
            onPageChanged(page);
          }}
          key={page}
        >
          {page}
        </span>
      ))}
    </div>
  );
};
