// import React, { forwardRef } from 'react';
// import { cn } from '@/lib/utils';

// Input Component as a function
// const Input = (props) => {
//   const { className, type, ...rest } = props;
//   const inputClassName = cn(
//     'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-black/20 text-white border-gray-700 placeholder:text-gray-500',
//     className
//   );

//   return <input type={type} className={inputClassName} {...rest} />;
// };

// export { Input };
// import PropTypes from 'prop-types';

// export const Input = ({ className = '', ...props }) => (
//     <input
//       className={`px-4 py-2 rounded bg-white text-black ${className}`}
//       {...props}
//     />
//   );

// Input.propTypes = {
//   className: PropTypes.string,
//   props: PropTypes.object,
// };