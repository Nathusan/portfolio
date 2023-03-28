import React from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';
import { ListInformation } from '../pages/Home';
import { isElementActiveGeneral } from './helpers';

export function DropDownBuilder(arr: ListInformation[], index?: number): React.ReactElement[] {
  const indexSafety = index || 0;

  const result = arr.map((place, key) => (
    <div key={key! + indexSafety} className={place.className}>
      <div
        className={place.className}
        onClick={() => {
          isElementActiveGeneral(`${place.className}-detail`);
          isElementActiveGeneral(`arrow-indicator${key + indexSafety}`);
        }}
        onKeyPress={() => isElementActiveGeneral(`${place.className}-detail`)}
        role='button'
        tabIndex={key}
      >
        <h3>{place.placeName}</h3>
        <h6>{place.time}</h6>
        <div className={`arrow-indicator${key + indexSafety}`}>
          <IoChevronDownSharp />
        </div>
        <div className={`${place.className}-detail`}>
          <div>
            {place.grades && <div>{place.grades}</div>}
            {place.additional && <div>{place?.additional}</div>}
          </div>
        </div>
      </div>
    </div>
  ));

  return result;
}
