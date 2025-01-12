import React from 'react';
import { cn } from '../../utilities/cn';
const Label = ({ htmlFor, children,className }) => {
    return (
        <label htmlFor={htmlFor} className={cn("block text-sm text-left font-medium text-gray-700", className)}>
            {children}
        </label>
    );
};

export default Label;