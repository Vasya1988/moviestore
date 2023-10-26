'use client'
import Styles from './Navigation.module.sass';
import { CurrentPath } from './HelperNavigation';
import React from 'react';
import Link from 'next/link';

const Navigation = () => {
    return (
        <nav
            className={Styles.Navigation}
        >
            {
                CurrentPath().map((link) => {
                    return (
                        <Link 
                            key={link.name} 
                            href={link.href}
                            className={Styles.Navigation}
                        >
                            {link.name}
                        </Link>
                    )
                })
            }
        </nav>
    )
}
export default Navigation;