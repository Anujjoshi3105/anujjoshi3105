import { Link } from "@/i18n/routing";
import { socialLinks } from "@/lib/data/data";
import { SocialIcon } from "@/components/Social";
import { useTranslations } from "next-intl";
const Footer = () => {
  const t = useTranslations("global");
  return (
    <footer className="text-center mt-6 py-8 space-y-4 flex flex-col items-center justify-center bg-muted">
      <p className="flex space-x-4 sm:text-lg md:text-xl">
        {socialLinks.map((link, index) => (
          <SocialIcon key={index} href={link.href} title={link.title}>
            {link.icon}
          </SocialIcon>
        ))}
      </p>
      <p className="text-xs sm:text-sm">
        {t("footer")}&nbsp;
        <Link className="link hover:text-theme hover:font-semibold" href="/">
          {t("name")}
        </Link>
        &nbsp;&copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
