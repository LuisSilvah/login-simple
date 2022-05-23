import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from "react-transition-group";

import { BiCog, BiCubeAlt, BiArrowToRight } from "react-icons/bi";
import { TiWeatherPartlySunny } from "react-icons/ti"
import { AiOutlineArrowLeft, AiOutlineTeam } from "react-icons/ai"
import { MdOutlineDashboardCustomize, MdOutlineDarkMode } from 'react-icons/md'
// import { RiDashboardLine } from 'react-icons/ri'
// import { BsMap, BsViewList, BsCalendarDate } from 'react-icons/bs'
// import { IoSchoolOutline } from 'react-icons/io5'
import { FaLayerGroup } from 'react-icons/fa'
import { flowService } from '../../../../helpers/flow';
import { ROUTES } from '../../../../constants';

export default function DropdownMenu({ auth, user, handleChangeTheme }) {
    const [activeMenu, setActiveMenu] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);


    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, []);


    const handleLogout = () => {
        localStorage.removeItem("@isAutenticate");
        flowService.goTo(ROUTES.HOME); // redireciono para a pagina de login
    };

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a
                href={props.rota}
                className="menu-item"
                onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
            >
                <span className="icon-button" onClick={props.function}>{props.leftIcon}</span>
                <span className="menu-text" onClick={props.function}>{props.children}</span>
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
            <CSSTransition title="main"
                in={activeMenu === "main"}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem
                        leftIcon={<BiCog />}
                        rightIcon={<BiArrowToRight />}
                        goToMenu="settings"
                    >
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<MdOutlineDashboardCustomize />}
                        rightIcon={<BiArrowToRight />}
                        goToMenu="page"
                    >
                        Page
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<MdOutlineDashboardCustomize />}
                        rightIcon={<BiArrowToRight />}
                        goToMenu="admin"
                    >
                        Admin
                    </DropdownItem>
                    {auth && (
                        <DropdownItem
                            leftIcon={<AiOutlineArrowLeft />}
                            function={handleLogout}
                        >
                            Logout
                        </DropdownItem>
                    )}
                </div>
            </CSSTransition>

            <CSSTransition title="settings"
                in={activeMenu === "settings"}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<AiOutlineArrowLeft />}>
                        <h2>Config</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon={<MdOutlineDarkMode />} function={handleChangeTheme}>Darkmode</DropdownItem>
                    <DropdownItem rota="/weather" leftIcon={<TiWeatherPartlySunny />}>Weather</DropdownItem>

                    {auth && (
                        <DropdownItem
                            leftIcon={<AiOutlineArrowLeft />}
                            function={handleLogout}
                        >
                            Logout
                        </DropdownItem>
                    )}
                </div>
            </CSSTransition>

            <CSSTransition title="page"
                in={activeMenu === "page"}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<AiOutlineArrowLeft />}>
                        <h2>Pages</h2>
                    </DropdownItem>
                    <DropdownItem rota={ROUTES.HOME} leftIcon={<BiCubeAlt />}>
                        Home
                    </DropdownItem>
                    <DropdownItem rota={ROUTES.GROUPS} leftIcon={<FaLayerGroup />}>Groups</DropdownItem>
                    <DropdownItem rota={ROUTES.TEAM} leftIcon={<AiOutlineTeam />}>Team</DropdownItem> 
                    <DropdownItem rota={ROUTES.DASHBOARD} leftIcon={<MdOutlineDashboardCustomize />}>Dashboard</DropdownItem>
                    </div>
            </CSSTransition>
            <CSSTransition title="admin"
                in={activeMenu === "admin"}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<AiOutlineArrowLeft />}>
                        <h2>Admin</h2>
                    </DropdownItem>
                    <DropdownItem rota={ROUTES.TEAM} leftIcon={<AiOutlineTeam />}>Team</DropdownItem> 
                    <DropdownItem rota={ROUTES.DASHBOARD} leftIcon={<MdOutlineDashboardCustomize />}>Dashboard</DropdownItem>
                    </div>
            </CSSTransition>

        </div>
    );
}