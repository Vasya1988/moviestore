'use client'
import Styles from './Navigation.module.sass';
import { CurrentPath, NavArray } from './HelperNavigation';
import React from 'react';
import Link from 'next/link';
import { NavLinks } from '@/app/utils/NavHelper';

const Navigation = () => {
    return (
        <nav
            className={Styles.Navigation}
        >
            {
                CurrentPath().map((link, index) => {
                    // console.log(link.href, NavLinks[index].href, link.active)
                    return (
                        <Link 
                            key={link.name} 
                            href={link.href}
                            className={`${Styles.Navigation} ${link.active && link.href === NavLinks[index].href ? 'NavActive' : ''}`}
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