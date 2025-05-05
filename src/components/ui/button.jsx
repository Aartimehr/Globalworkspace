// import { forwardRef } from 'react';
// import { cn } from '@/lib/utils';

// Button Component as a function
// const Button = (props) => {
//     const { className, variant, ...rest } = props;
//     const buttonClassName = cn(
//         'px-6 py-2 rounded-md font-semibold transition-colors duration-300',
//         variant === 'outline' &&
//             'bg-black/20 text-white border border-gray-700 hover:bg-gray-800/50',
//         variant !== 'outline' &&
//             'bg-yellow-500 hover:bg-yellow-600 text-black',
//         className
//     );
//     return <button className={buttonClassName} {...rest} />;
// };

// // export { Button };
// import PropTypes from 'prop-types';

// export const Button = ({ className = '', children, ...props }) => (
//     <button
//       className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );

// Button.propTypes = {
//     className: PropTypes.string,
//     children: PropTypes.node.isRequired,
// };
