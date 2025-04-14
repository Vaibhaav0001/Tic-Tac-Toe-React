import Examples from "./Examples.jsx";
export default function Tabs({children,k,C="menu"}){
   
    return(
        <>
        <C>
            {k}
        </C>
        {children}
        </>

    );
}