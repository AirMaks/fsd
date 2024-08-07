import cn from "classnames";
import { useTranslation } from "react-i18next";
import cls from "./Footer.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";
import { memo } from "react";

interface FooterProps {
    className?: string;
}

export const Footer = memo(({ className }: FooterProps) => {
    const { t } = useTranslation();

    return (
        <div className={cn(cls.Footer, {}, [className])}>
            <div className={cn(cls.switchers, {}, [])}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
            <div>
                {`© ${t("Цифровизация транспорта")}, 2023`}
                <a href="/" className={cls.license} target="_blank">
                    {t("Лицензионный договор")}
                </a>
            </div>
        </div>
    );
});
