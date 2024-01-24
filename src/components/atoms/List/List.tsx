import React, { FC } from 'react';
import DOMPurify from 'isomorphic-dompurify';

interface ItemValues {
  text: string;
  href?: string;
  target?: string;
  icon?: any;
}

interface ListProps {
  items: ItemValues[]
  icon?: any;
}

export const List: FC<ListProps> = ({ items, icon: Icon }) => {
  const renderItem = (item: ItemValues, key: number) => {
    const cleanItemText = DOMPurify.sanitize(item.text);

    if (item.href) {
      return (
        <li key={`bq-list-item-${key}`} className='bq-list-item'>
          <a href={item.href} target={item.target}>
            {Icon && <Icon />}
            <span dangerouslySetInnerHTML={{__html: cleanItemText }}></span>
          </a>
        </li>
      )
    }
  
    return (
      <li key={`bq-list-item-${key}`} className='bq-list-item'>
        {Icon && <Icon />}
        <span dangerouslySetInnerHTML={{__html: cleanItemText }}></span>
      </li>
    )
  }

  return  (
    <ul className='bq-list'>
      {items.map(renderItem)}
    </ul>
  )
}
