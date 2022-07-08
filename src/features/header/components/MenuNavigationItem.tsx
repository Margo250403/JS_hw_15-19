/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"; 
import { Link } from "react-router-dom";

interface Props {
    item: {id:number; name:string; url: string}
}
export const MenuNavigationItem = ( { item : { id, name, url } } : Props) => (
    <li 
        css={css`
            :last-child a{
                padding-right: 0;
            }
        `}
                key={id}> 
        <Link
            css={css`
                color:#413a38;
                font-weight: bold;
                font-size: 18px;
                padding: 7px 30px; 
                :hover{
                    text-decoration: underline;
                }
            `}
                to={url}> 
                {name}
        </Link>
    </li>          
);