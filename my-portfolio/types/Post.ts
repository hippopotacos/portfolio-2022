export interface Post {
  title?: string
  overview?: string
  keyVisual?: {
    url?: string
    width?: number
    height?: number
  }
  url?: string
  term?: string
  role?: string
  tools?: string
  body?: string
}