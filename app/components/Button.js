import React from 'react';
import { NavLink } from './NavLink';

const Button = ({ children, href, className }) => (
    <NavLink href={href} className={`bg-white text-black rounded-full text-xl font-medium py-3 px-8 inline-block border border-black ${className}`}>
        {children}
    </NavLink>
);

export default Button;
