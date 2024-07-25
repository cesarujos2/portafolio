import useTheme from "../hooks/useTheme";

function IconSocial({ src, alt, color, href }: { src: string, alt: string, color?: string, href?: string }) {
  const { theme } = useTheme();
  return (
    <a href={href ?? '/'} target="_blank">
      <div className="w-8 h-8 cursor-pointer p-2 rounded-md hover:scale-105 transition-all" style={{ background: `${color && theme == "light" ? color : '#3F3F46'}` }}>
        <img className="w-full h-full" src={src} alt={`icon-${alt}`} />
      </div>
    </a>
  )
}

export default IconSocial