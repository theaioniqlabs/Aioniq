import React from 'react';
export const UI = {
  Button: (props:any) => <button {...props} className={`px-4 py-2 rounded-md ${props.className || ''}`} />
};
export default UI;

