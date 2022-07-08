/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"; 

export const PageFeature = ({children}: any) => (
    <div 
        css={css`
            max-width: 800px;
            margin: 0 auto;
            border: 1px solid #ddd;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            padding: 15px;
            margin-top: 30px;      
        `}
    >
        {children}
    </div>
);