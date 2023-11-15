'use client'
import { usePathname } from 'next/navigation';
import { NavLinks } from '@/app/utils/NavHelper';

export const NavArray = ['Home', 'Movie', 'TV Shows']

interface PropsCurrentPath {
    (): {name: string, href: string, classActive: boolean, active: boolean}[]
}
export const CurrentPath: PropsCurrentPath = () => {
    const currentPage = usePathname()
    return NavLinks.map((link) => {

        let activeLink = currentPage.split('/');

        activeLink[activeLink.length - 1] === '' 
            ? activeLink[activeLink.length - 1] = 'home' 
            : activeLink[activeLink.length - 1]

        console.log(link.label.toLocaleLowerCase(), activeLink[activeLink.length - 1])
        
        const isActive = link.label.toLocaleLowerCase().replaceAll(' ', '') === activeLink[activeLink.length - 1];
        
        return {
            name: link.label,
            href: link.href,
            classActive: isActive,
            active: isActive
        }
    })

}