type LogoProps = {
  href?: string
}

export default function Logo({ href = '#hero' }: LogoProps) {
  return (
    <a href={href} className="logo">
      UDS<span className="logo__accent">89</span>
    </a>
  )
}
