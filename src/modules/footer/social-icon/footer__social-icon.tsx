import FooterSocialIconItem from "./item/footer__social-icon__item";

export default function FooterSocialIcon() {
  return (
    <div className="footer__social-icon">
      <FooterSocialIconItem src="./assets/ig.png" alt="instagram" href="#" />
      <FooterSocialIconItem src="./assets/google.png" alt="google" href="#" />
      <FooterSocialIconItem src="./assets/ball.png" alt="ball" href="#" />
    </div>
  );
}
