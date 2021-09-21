import React from 'react'
import { IContacts } from '../../models/IContacts'
import style from './style.module.scss'

interface SearchProps {
   value: string
   setter: (value: string) => void
}

const Search: React.FC<SearchProps> = ({ value, setter }) => {
   return (
      <div className={style.search}>
         <input type="text" value={value} onChange={e => setter(e.target.value)} placeholder="Поиск по имени..." />
         {value && (
            <div className={style.search__result}>
               <p>Резальтат поиска по: {value}</p>
            </div>
         )}
      </div>
   )
}

export default Search