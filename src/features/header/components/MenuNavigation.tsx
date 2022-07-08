/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"; 
import dataMenu from "./menu.json"
import { MenuNavigationItem } from "./MenuNavigationItem";

export const MenuNavigation = () => (
    <ul 
        css={css`
            display: flex;
            gap:35px;
            margin: 0;
        `}
    >
        {dataMenu.map((item) => (
            <MenuNavigationItem key={item.id} item={item}/>
        ))}
    </ul>
);