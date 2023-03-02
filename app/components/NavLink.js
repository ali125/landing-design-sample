import React from 'react';
import Link  from 'next/link'

export const NavLink = ({ children, href, ...props }) => (
    <Link href={href}>
        <a {...props}>
            {children}
        </a>
    </Link>
)