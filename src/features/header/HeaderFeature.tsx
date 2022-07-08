/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"; 
import { MenuNavigation } from "./components";

export const HeaderFeature = () => (
    <header 
        css={css`
            background-color: #e8cfc2;
            padding: 15px 20px;
        `}
    >
        <div
            css={css`
                max-width: 800px;
                margin: 0 auto;
            `}
        >
            <MenuNavigation />
        </div>
       
    </header>
);
