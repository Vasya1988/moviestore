'use client'
import { usePathname } from 'next/navigation';
import { NavLinks } from '@/app/utils/NavHelper';



interface PropsCurrentPath {
    (): {name: string, href: string, classActive: boolean}[]
}
export const CurrentPath: PropsCurrentPath = () => {
    const currentPage = usePathname()
    return NavLinks.map((link) => {

        const activeLink = currentPage.split('/')
        const isActive = link.label.toLocaleLowerCase() === activeLink[activeLink.length - 1]

        return {
            name: link.label,
            href: link.href,
            classActive: isActive
        }
    })

}