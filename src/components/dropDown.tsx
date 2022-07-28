import React from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';
import { isElementActiveGeneral } from './helpers';

export function DropDownBuilder(arr): React.ReactElement {
  const result = arr.map((place, key) => (
    <div key={key!} className={place.className}>
      <div
        className={place.className}
        onClick={() => {
          isElementActiveGeneral(`${place.className}-detail`);
          isElementActiveGeneral(`arrow-indicator${key}`);
        }}
        onKeyPress={() => isElementActiveGeneral(`${place.className}-detail`)}
        role='button'
        tabIndex={key}
      >
        <h3>{place.placeName}</h3>
        <h6>{place.time}</h6>
        <div className={`arrow-indicator${key}`}>
          <IoChevronDownSharp />
        </div>
        <div className={`${place.className}-detail`}>
          <ul>
            <li>
              {place.grades}
            </li>
            <li>
              {place?.additional}
            </li>
          </ul>
        </div>
      </div>
    </div>
  ));

  return result;
}
