import React, { useState } from "react";
import s from './Paginator.module.css';

export const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    //Высчитываем количество нужных нам страниц в Page count: делим общее количество всех пользователей с сервера (кол-во страниц определили сами = 5, нужно разделить общее колво пользователей на колво страниц)
  //let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pagesCount = Math.ceil(totalUsersCount / pageSize) // общее кол-во страниц;

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  //portionSize - количество отображамеых страниц между кнопок;
  let portionCount = Math.ceil(pagesCount / portionSize); //общее количество порций страниц которые будут переключаться кнопками <- ->; 

  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;  //Левая граница порции 
  let rightPortionPageNumber = portionNumber * portionSize; //Правая граница порции
  
  return (
    <div className="">
      { portionNumber > 1 && <button onClick={()=>{setPortionNumber(portionNumber - 1)}}>Prev</button> }
      {
        pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map( p => {
            
            return <span className={p === currentPage ? `${s.page} ${s.selectedPage}` : `${s.page}`}
                         key={p}
                         onClick={(e) =>{onPageChanged(p)}}
            >{p}</span>
          })
      }
      {portionCount > portionNumber && <button onClick={()=>{setPortionNumber(portionNumber + 1)}}>Next</button>}
      
    </div>
  );
};
