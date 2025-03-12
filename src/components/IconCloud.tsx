import { Cloud, renderSimpleIcon, SimpleIcon, ICloud } from "react-icon-cloud";
import typescript from "simple-icons/icons/typescript";
import javascript from "simple-icons/icons/javascript";
import nodedotjs from "simple-icons/icons/nodedotjs";
import figma from "simple-icons/icons/figma";
import react from "simple-icons/icons/react";
import express from "simple-icons/icons/express";
import mongoDB from "simple-icons/icons/mongoDB";
import mySql from "simple-icons/icons/mySql";
import jest from "simple-icons/icons/jest";
import html from "simple-icons/icons/html5";
import css from "simple-icons/icons/css3";
import git from "simple-icons/icons/git";
import jquery from "simple-icons/icons/jquery";

export const cloudProps: Omit<ICloud, 'children'> = {
    containerProps: {
      style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40
      }
    },
    options: {
      clickToFront: 500,
      depth: 1,
      imageScale: 2,
      initial: [0.1, -0.1],
      outlineColour: "#0000",
      reverse: true,
      tooltip: "native",
      tooltipDelay: 0,
      wheelZoom: false
    }
  }
  
  export const renderCustomIcon = (icon: SimpleIcon, bg: string) => {
    return renderSimpleIcon({
      icon,
      bgHex: bg,
      size: 42,
      aProps: {
        href: undefined,
        target: undefined,
        rel: undefined,
        onClick: (e: any) => e.preventDefault()
      }
    })
  }

  const staticIcons = [typescript, javascript, figma, nodedotjs, express,
     react, mySql, jest, html, css, git, jquery, mongoDB];

export const IconCloud = () => {
const color = "#000000"; // Define a default color
  const cloudIcons = staticIcons.map((i) => renderCustomIcon(i, color))

  return <Cloud {...cloudProps}>
        {cloudIcons}
      </Cloud>
}

export default IconCloud;
