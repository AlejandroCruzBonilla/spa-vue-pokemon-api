import type { IRouterLink } from '@/shared/interfaces'

export interface INavBar {
  showLogo?: boolean
  title: string
  items: IRouterLink[]
}
