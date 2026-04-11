export default function FooterSocialIconItem({ src, alt, href }: { src: string; alt: string; href: string }) {

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} />
    </a>
  );


}