import { cloneDeep, isEqual, isObject, isArray } from 'lodash';

export const copyToClipboard = (text = '') => {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

export const filterQueryInHeaderField = (headerField = [], query = {}) => {
  const mapValHeaderField = headerField?.map((el) => el.value);
  const itemInHeaderField = {};
  const itemNotInHeaderField = {};
  Object.keys(query).forEach((key) => {
    if (mapValHeaderField.includes(query[key])) {
      itemInHeaderField[key] = query[key];
    } else {
      itemNotInHeaderField[key] = query[key];
    }
  });

  return { itemInHeaderField, itemNotInHeaderField };
};

export const findValueInOptions = (valueField = '', options = [], nameFieldOfOptions = 'value') => {
  return (
    options?.find((el) =>
      isEqual(
        (valueField || '').toString().toLocaleLowerCase(),
        (el[nameFieldOfOptions] || '').toString().toLocaleLowerCase(),
      ),
    ) || {
      label: '',
      value: '',
    }
  );
};

export const convertToFormSelect = (list, fieldForLabel = undefined, fieldForValue = undefined, noneOption = false) => {
  if (!fieldForLabel || !fieldForValue) {
    return [
      ...list.reduce((arr, el) => {
        return [...arr, { label: el, value: el }];
      }, []),
    ];
  }
  if (typeof list === 'object' && list) {
    const listReturn = [
      ...list.reduce((arr, el) => {
        return [...arr, { ...el, label: el[fieldForLabel] || 'None', value: el[fieldForValue] || '' }];
      }, []),
    ];

    if (noneOption) {
      return [{ label: 'None', value: '' }, ...listReturn];
    }
    return listReturn;
  }
  return [{ label: 'None', value: '' }, ...list];
};

export const correctBodyToRequest = (params = {}, removeNull = false) => {
  const values = cloneDeep(params || {});
  // convert object -> value when from selection
  return Object.keys(values).reduce((obj, key) => {
    obj = {
      ...obj,
      [key]: (values[key] || '').trim(),
    };

    if (isObject(values[key]) && values[key].hasOwnProperty('value')) {
      obj = {
        ...obj,
        [key]: values?.[key]?.value,
      };
    }

    if (isArray(values[key])) {
      obj = {
        ...obj,
        [key]: values[key]?.map((el) => el['value']),
      };
    }

    if (removeNull && values[key] === null) {
      delete obj[key];
    }

    return obj;
  }, {});
};
