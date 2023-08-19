import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import DarkModeContainer from "./DarkModeContainer";
import FormContainer1 from "./FormContainer1";
import styles from "./SidemenuLarge.module.css";

type SidemenuLargeType = {
  logo?: string;
  squaresFour?: string;
  chartBar?: string;
  performance1?: string;
  cursorClick?: string;
  hotjar?: string;
  sUPPORT?: string;
  ticket?: string;
  tickets?: string;
  user1?: string;
  agents?: string;
  users?: string;
  customers?: string;
  cube?: string;
  shoppingCartSimple?: string;
  file?: string;
  moon?: string;
  button?: string;
  gear?: string;
  showLogoIcon?: boolean;

  /** Style props */
  sidemenuLargePosition?: CSSProperties["position"];
  sidemenuLargeWidth?: CSSProperties["width"];
  sidemenuLargeHeight?: CSSProperties["height"];
  sidemenuLargeTop?: CSSProperties["top"];
  sidemenuLargeLeft?: CSSProperties["left"];
};

const SidemenuLarge: NextPage<SidemenuLargeType> = ({
  logo,
  squaresFour,
  chartBar,
  performance1,
  cursorClick,
  hotjar,
  sUPPORT,
  ticket,
  tickets,
  user1,
  agents,
  users,
  customers,
  cube,
  shoppingCartSimple,
  file,
  moon,
  button,
  gear,
  showLogoIcon,
  sidemenuLargePosition,
  sidemenuLargeWidth,
  sidemenuLargeHeight,
  sidemenuLargeTop,
  sidemenuLargeLeft,
}) => {
  const sidemenuLargeStyle: CSSProperties = useMemo(() => {
    return {
      position: sidemenuLargePosition,
      width: sidemenuLargeWidth,
      height: sidemenuLargeHeight,
      top: sidemenuLargeTop,
      left: sidemenuLargeLeft,
    };
  }, [
    sidemenuLargePosition,
    sidemenuLargeWidth,
    sidemenuLargeHeight,
    sidemenuLargeTop,
    sidemenuLargeLeft,
  ]);

  return (
    <div className={styles.sidemenuLarge} style={sidemenuLargeStyle}>
      <DarkModeContainer
        dimensionCode="/logo.svg"
        dimensionCodeText="/squaresfour1.svg"
        dimensionText="/chartbar1.svg"
        performanceData="Performance"
        dimensionCodeImageUrl="/cursorclick1.svg"
        componentImageUrl="Hotjar"
        searchTerm="SUPPORT"
        dimensionCodeImageUrl2="/ticket1.svg"
        ticketName="Tickets"
        dimensionCodeText2="/user1.svg"
        agentListVolumeSelection="Agents"
        dimensionCodeText3="/users1.svg"
        customerList="Customers"
        dimensionCodeText4="/cube1.svg"
        dimensionCodeImageUrl3="/shoppingcartsimple1.svg"
        dimensionCodeText5="/file1.svg"
        dimensionCodeText6="/moon1.svg"
        dimensionCodeImageText="/button.svg"
        showLogoIcon
      />
      <FormContainer1 dimensionCode="/gear1.svg" />
    </div>
  );
};

export default SidemenuLarge;
