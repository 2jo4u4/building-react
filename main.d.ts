declare module '*.module.scss' {
  const content: Record<string, string>
  export default content
}

declare module '*.module.css' {
  const content: Record<string, string>
  export default content
}

declare module '*.scss'

declare module '*.css'

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}
