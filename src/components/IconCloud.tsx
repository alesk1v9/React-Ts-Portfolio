import { Cloud, renderSimpleIcon, SimpleIcon, ICloud } from "react-icon-cloud";
import { siTypescript, siJavascript, siNodedotjs, siFigma, siReact, siExpress, siMongodb, siMysql, siJest, siHtml5, siCss3, siGit, siJquery } from "simple-icons";

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

  const staticIcons: SimpleIcon[] = [
    siTypescript,
    siJavascript,
    siNodedotjs,
    siFigma,
    siReact,
    siExpress,
    siMongodb,
    siMysql,
    siJest,
    siHtml5,
    siCss3,
    siGit,
    siJquery
  ];

export const IconCloud = () => {
const color = "#000000";
  const cloudIcons = staticIcons.map((i) => renderCustomIcon(i, color))

  return <Cloud {...cloudProps}>
        {cloudIcons}
      </Cloud>
}

export default IconCloud;
