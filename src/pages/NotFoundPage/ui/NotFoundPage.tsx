import cn from "classnames";
import cls from "./NotFoundPage.module.scss";
import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation("not-found");
    return <div className={cn(cls.NotFoundPage, {}, [className])}>{t("Страница не найдена", { ns: "not-found" })}</div>;
};
