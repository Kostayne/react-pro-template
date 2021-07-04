import React from "react";
import * as RM from "react-modifier";
import "./__oname__.scss";

export interface __cname__Theme extends RM.IModifiableTheme {
    
}

export interface __cname__Props extends RM.IModifiableProps<__cname__Theme> {

}

export const __cname__ = (props: __cname__Props) => {
    return RM.modElement((
        <div className="__pname__">
            
        </div>
    ), RM.getHeadModByProps(props));
}

export const def__cname__Theme: __cname__Theme = {
    head: RM.createMod('')
}