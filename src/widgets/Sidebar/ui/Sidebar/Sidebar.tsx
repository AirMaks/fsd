import { cn } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import TasksIcon from "shared/assets/icons/tasks.svg";
import NotificationsIcon from "shared/assets/icons/notification.svg";
import WheelIcon from "shared/assets/icons/wheel.svg";
import TruckIcon from "shared/assets/icons/truck.svg";
import RouteIcon from "shared/assets/icons/route.svg";
import TrailerIcon from "shared/assets/icons/trailer.svg";
import CalendarIcon from "shared/assets/icons/calendar.svg";
import ShiftIcon from "shared/assets/icons/shift.svg";
import WorkScheduleIcon from "shared/assets/icons/work-schedule.svg";
import UserIcon from "shared/assets/icons/user.svg";
import TGIcon from "shared/assets/icons/tg.svg";
import ServiceWorkIcon from "shared/assets/icons/service-work.svg";
import DriverBidIcon from "shared/assets/icons/driver-bid.svg";
import MapObjectIcon from "shared/assets/icons/map-object.svg";
import RoleIcon from "shared/assets/icons/role.svg";
import ReportIcon from "shared/assets/icons/report.svg";
import cls from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";
import Logo from "shared/assets/logo-long.svg";

interface SidebarProps {
    className?: string;
    collapsed?: boolean;
}

export const Sidebar = ({ className, collapsed }: SidebarProps) => {
    const { t } = useTranslation();

    return (
        <div data-testid="sidebar" className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <NavLink to={"/"} className={cn(cls.Logo, {}, [className])}>
                <Logo />
            </NavLink>
            <div className={cls.items_container}>
                <div className={cls.items}>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.notifications} className={cls.item}>
                        <NotificationsIcon className={cls.icon} />
                        <span className={cls.link}>{t("??????????????????????")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.tasks} className={cls.item}>
                        <TasksIcon className={cls.icon} />
                        <span className={cls.link}>{t("????????????")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.drivers} className={cls.item}>
                        <WheelIcon className={cls.icon} />
                        <span className={cls.link}>{t("????????????????")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.trucks} className={cls.item}>
                        <TruckIcon className={cls.icon} />
                        <span className={cls.link}>{t("??????????????????")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.trailers} className={cls.item}>
                        <TrailerIcon className={cls.icon} />
                        <span className={cls.link}>{t("??????????????")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath["driver-shifts"]} className={cls.item}>
                        <RouteIcon className={cls.icon} />
                        <span className={cls.link}>{t("???????????? ?? ????????")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.letouts} className={cls.item}>
                        <CalendarIcon className={cls.icon} />
                        <span className={cls.link}>{t("?????????????????? ????")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.shifts} className={cls.item}>
                        <ShiftIcon className={cls.icon} />
                        <span className={cls.link}>{t("??????????")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath["work-schedules"]} className={cls.item}>
                        <WorkScheduleIcon className={cls.icon} />
                        <span className={cls.link}>{t("???????????? ????????????")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.users} className={cls.item}>
                        <UserIcon className={cls.icon} />
                        <span className={cls.link}>{t("????????????????????????")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath["transport-groups"]} className={cls.item}>
                        <TGIcon className={cls.icon} />
                        <span className={cls.link}>{t("??????????????")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath["service-works"]} className={cls.item}>
                        <ServiceWorkIcon className={cls.icon} />
                        <span className={cls.link}>{t("?????????????????? ????????????")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath["driver-bids"]} className={cls.item}>
                        <DriverBidIcon className={cls.icon} />
                        <span className={cls.link}>{t("???????????? ???? ??????????????????")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath["map-objects"]} className={cls.item}>
                        <MapObjectIcon className={cls.icon} />
                        <span className={cls.link}>{t("?????????????? ??????????")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.roles} className={cls.item}>
                        <RoleIcon className={cls.icon} />
                        <span className={cls.link}>{t("???????????????????? ????????????")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.reports} className={cls.item}>
                        <ReportIcon className={cls.icon} />
                        <span className={cls.link}>{t("????????????")}</span>
                    </AppLink>
                </div>
            </div>
        </div>
    );
};
