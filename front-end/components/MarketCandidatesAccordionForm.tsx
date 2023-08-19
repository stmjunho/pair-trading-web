import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Property1TableNormalRow from "./Property1TableNormalRow";
import FormContainer5 from "./FormContainer5";
import StateDefaultShapeSquare from "./StateDefaultShapeSquare";
import SizesmHierarchySecondaryG from "./SizesmHierarchySecondaryG";
import styles from "./MarketCandidatesAccordionForm.module.css";

type MarketCandidatesAccordionFormType = {
  tableCell?: string;
  tableCell1?: string;
  lineRoundedChevronDown?: string;
  vector?: string;
  vector1?: string;
  vector2?: string;
  vector3?: string;
  vector4?: string;
  vector5?: string;
  vector6?: string;
  vector7?: string;
  vector8?: string;
  vector9?: string;
  vector10?: string;
  vector11?: string;
  vector12?: string;
  vector13?: string;
  vector14?: string;
  vector15?: string;
  vector16?: string;
  vector17?: string;
  vector18?: string;
  vector19?: string;
  vector20?: string;
  vector21?: string;
  vector22?: string;
  vector23?: string;
  vector24?: string;
  vector25?: string;
  vector26?: string;
  vector27?: string;
  vector28?: string;
  vector29?: string;
  vector30?: string;
  vector31?: string;
  group?: string;
  lineRoundedChevronRight?: string;
  lineRoundedChevronRight1?: string;
  lineRoundedChevronRight2?: string;
  lineRoundedChevronRight3?: string;
  arrowLeft?: string;
  arrowRight?: string;

  /** Style props */
  marketCandidateTop?: CSSProperties["top"];
};

const MarketCandidatesAccordionForm: NextPage<
  MarketCandidatesAccordionFormType
> = ({
  tableCell,
  tableCell1,
  lineRoundedChevronDown,
  vector,
  vector1,
  vector2,
  vector3,
  vector4,
  vector5,
  vector6,
  vector7,
  vector8,
  vector9,
  vector10,
  vector11,
  vector12,
  vector13,
  vector14,
  vector15,
  vector16,
  vector17,
  vector18,
  vector19,
  vector20,
  vector21,
  vector22,
  vector23,
  vector24,
  vector25,
  vector26,
  vector27,
  vector28,
  vector29,
  vector30,
  vector31,
  group,
  lineRoundedChevronRight,
  lineRoundedChevronRight1,
  lineRoundedChevronRight2,
  lineRoundedChevronRight3,
  arrowLeft,
  arrowRight,
  marketCandidateTop,
}) => {
  const marketCandidatesAccordionStyle: CSSProperties = useMemo(() => {
    return {
      top: marketCandidateTop,
    };
  }, [marketCandidateTop]);

  return (
    <div
      className={styles.marketCandidatesAccordion}
      style={marketCandidatesAccordionStyle}
    >
      <div className={styles.marketCandidate}>
        <div className={styles.container} />
        <Property1TableNormalRow
          tableCell="Time"
          tableCell1="Z score"
          tableCell2="Symbol 1"
          tableCell3="Symbol 2"
          tableCell4="P value"
          tableCell5="Optimal z +/-"
          property1TableNormalRowPosition="absolute"
          property1TableNormalRowWidth="969.73px"
          property1TableNormalRowTop="50.73px"
          property1TableNormalRowLeft="15.33px"
          property1TableNormalRowHeight="49.76px"
        />
        <img
          className={styles.lineRoundedchevronDown}
          alt=""
          src={lineRoundedChevronDown}
        />
        <Property1TableNormalRow
          tableCell="2023/05/06 11:35"
          tableCell1="0.75"
          tableCell2="ETHUSDT"
          tableCell3="ATOMUSDT"
          tableCell4="0.05"
          tableCell5="1.0     /    -1.2"
          property1TableNormalRowPosition="absolute"
          property1TableNormalRowWidth="969.73px"
          property1TableNormalRowTop="101.33px"
          property1TableNormalRowLeft="14.7px"
          property1TableNormalRowHeight="49.76px"
        />
        <div className={styles.chart}>
          <div className={styles.group}>
            <img className={styles.vectorIcon} alt="" src={vector} />
            <div className={styles.group1}>
              <div className={styles.group2}>
                <img className={styles.vectorIcon1} alt="" src={vector1} />
                <div className={styles.div}>1</div>
              </div>
              <div className={styles.group3}>
                <img className={styles.vectorIcon2} alt="" src={vector2} />
                <div className={styles.div}>2</div>
              </div>
              <div className={styles.group4}>
                <img className={styles.vectorIcon2} alt="" src={vector3} />
                <div className={styles.div}>4</div>
              </div>
              <div className={styles.group5}>
                <img className={styles.vectorIcon2} alt="" src={vector4} />
                <div className={styles.div}>6</div>
              </div>
              <div className={styles.group6}>
                <img className={styles.vectorIcon2} alt="" src={vector5} />
                <div className={styles.div}>8</div>
              </div>
              <div className={styles.group7}>
                <img className={styles.vectorIcon6} alt="" src={vector6} />
                <div className={styles.div}>10</div>
              </div>
              <div className={styles.group8}>
                <img className={styles.vectorIcon7} alt="" src={vector7} />
                <div className={styles.div}>12</div>
              </div>
              <div className={styles.group9}>
                <img className={styles.vectorIcon6} alt="" src={vector8} />
                <div className={styles.div}>14</div>
              </div>
              <div className={styles.group10}>
                <img className={styles.vectorIcon6} alt="" src={vector9} />
                <div className={styles.div}>16</div>
              </div>
              <div className={styles.group11}>
                <img className={styles.vectorIcon7} alt="" src={vector10} />
                <div className={styles.div}>18</div>
              </div>
              <div className={styles.group12}>
                <img className={styles.vectorIcon11} alt="" src={vector11} />
                <div className={styles.div}>20</div>
              </div>
              <div className={styles.group13}>
                <img className={styles.vectorIcon11} alt="" src={vector12} />
                <div className={styles.div}>22</div>
              </div>
              <div className={styles.group14}>
                <img className={styles.vectorIcon11} alt="" src={vector13} />
                <div className={styles.div}>24</div>
              </div>
              <div className={styles.group15}>
                <img className={styles.vectorIcon11} alt="" src={vector14} />
                <div className={styles.div}>26</div>
              </div>
              <div className={styles.group16}>
                <img className={styles.vectorIcon11} alt="" src={vector15} />
                <div className={styles.div}>28</div>
              </div>
              <div className={styles.group17}>
                <img className={styles.vectorIcon16} alt="" src={vector16} />
                <div className={styles.div}>30</div>
              </div>
              <div className={styles.group18}>
                <img className={styles.vectorIcon11} alt="" src={vector17} />
                <div className={styles.div}>32</div>
              </div>
              <div className={styles.group19}>
                <img className={styles.vectorIcon16} alt="" src={vector18} />
                <div className={styles.div}>34</div>
              </div>
              <div className={styles.group20}>
                <img className={styles.vectorIcon16} alt="" src={vector19} />
                <div className={styles.div}>36</div>
              </div>
              <div className={styles.group21}>
                <img className={styles.vectorIcon16} alt="" src={vector20} />
                <div className={styles.div}>38</div>
              </div>
              <div className={styles.group22}>
                <img className={styles.vectorIcon16} alt="" src={vector21} />
                <div className={styles.div}>40</div>
              </div>
              <div className={styles.group23}>
                <img className={styles.vectorIcon11} alt="" src={vector22} />
                <div className={styles.div}>42</div>
              </div>
              <div className={styles.group24}>
                <img className={styles.vectorIcon16} alt="" src={vector23} />
                <div className={styles.div}>44</div>
              </div>
              <div className={styles.group25}>
                <img className={styles.vectorIcon16} alt="" src={vector24} />
                <div className={styles.div}>46</div>
              </div>
              <div className={styles.group26}>
                <img className={styles.vectorIcon25} alt="" src={vector25} />
                <div className={styles.div}>49</div>
              </div>
            </div>
          </div>
          <div className={styles.group27}>
            <img className={styles.vectorIcon26} alt="" src={vector26} />
            <div className={styles.group28}>
              <div className={styles.group29}>
                <img className={styles.vectorIcon27} alt="" src={vector27} />
                <div className={styles.div25}>0</div>
              </div>
              <div className={styles.group30}>
                <img className={styles.vectorIcon28} alt="" src={vector28} />
                <div className={styles.div26}>0.75</div>
              </div>
              <div className={styles.group31}>
                <img className={styles.vectorIcon29} alt="" src={vector29} />
                <div className={styles.div27}>1.5</div>
              </div>
              <div className={styles.group32}>
                <img className={styles.vectorIcon30} alt="" src={vector30} />
                <div className={styles.div28}>2.25</div>
              </div>
              <div className={styles.group33}>
                <img className={styles.vectorIcon31} alt="" src={vector31} />
                <div className={styles.div25}>3</div>
              </div>
            </div>
          </div>
          <img className={styles.groupIcon} alt="" src={group} />
        </div>
      </div>
      <div className={styles.marketCandidate1}>
        <div className={styles.container1} />
        <img
          className={styles.lineRoundedchevronRight}
          alt=""
          src={lineRoundedChevronRight}
        />
        <Property1TableNormalRow
          tableCell="Time"
          tableCell1="Z score"
          tableCell2="Symbol 1"
          tableCell3="Symbol 2"
          tableCell4="P value"
          tableCell5="Optimal z +/-"
          property1TableNormalRowPosition="absolute"
          property1TableNormalRowWidth="957.03px"
          property1TableNormalRowTop="12.93px"
          property1TableNormalRowLeft="16.51px"
          property1TableNormalRowHeight="49.76px"
        />
        <Property1TableNormalRow
          tableCell="2023/05/06 11:35"
          tableCell1="0.75"
          tableCell2="ETHUSDT"
          tableCell3="ATOMUSDT"
          tableCell4="0.05"
          tableCell5="1.0     /    -1.2"
          property1TableNormalRowPosition="absolute"
          property1TableNormalRowWidth="957.03px"
          property1TableNormalRowTop="63.53px"
          property1TableNormalRowLeft="15.89px"
          property1TableNormalRowHeight="49.76px"
        />
      </div>
      <div className={styles.marketCandidate2}>
        <div className={styles.container2} />
        <Property1TableNormalRow
          tableCell="Time"
          tableCell1="Z score"
          tableCell2="Symbol 1"
          tableCell3="Symbol 2"
          tableCell4="P value"
          tableCell5="Optimal z +/-"
          property1TableNormalRowPosition="absolute"
          property1TableNormalRowWidth="957.03px"
          property1TableNormalRowTop="12.23px"
          property1TableNormalRowLeft="20.51px"
          property1TableNormalRowHeight="49.76px"
        />
        <Property1TableNormalRow
          tableCell="2023/05/06 11:35"
          tableCell1="0.75"
          tableCell2="ETHUSDT"
          tableCell3="ATOMUSDT"
          tableCell4="0.05"
          tableCell5="1.0     /    -1.2"
          property1TableNormalRowPosition="absolute"
          property1TableNormalRowWidth="957.03px"
          property1TableNormalRowTop="62.82px"
          property1TableNormalRowLeft="19.89px"
          property1TableNormalRowHeight="49.76px"
        />
        <img
          className={styles.lineRoundedchevronRight1}
          alt=""
          src={lineRoundedChevronRight1}
        />
      </div>
      <div className={styles.marketCandidate3}>
        <div className={styles.container1} />
        <img
          className={styles.lineRoundedchevronRight2}
          alt=""
          src={lineRoundedChevronRight2}
        />
        <Property1TableNormalRow
          tableCell="Time"
          tableCell1="Z score"
          tableCell2="Symbol 1"
          tableCell3="Symbol 2"
          tableCell4="P value"
          tableCell5="Optimal z +/-"
          property1TableNormalRowPosition="absolute"
          property1TableNormalRowWidth="957.03px"
          property1TableNormalRowTop="13.19px"
          property1TableNormalRowLeft="15.05px"
          property1TableNormalRowHeight="49.76px"
        />
        <Property1TableNormalRow
          tableCell="2023/05/06 11:35"
          tableCell1="0.75"
          tableCell2="ETHUSDT"
          tableCell3="ATOMUSDT"
          tableCell4="0.05"
          tableCell5="1.0     /    -1.2"
          property1TableNormalRowPosition="absolute"
          property1TableNormalRowWidth="957.03px"
          property1TableNormalRowTop="63.79px"
          property1TableNormalRowLeft="14.44px"
          property1TableNormalRowHeight="49.76px"
        />
      </div>
      <div className={styles.marketCandidate4}>
        <div className={styles.container2} />
        <img
          className={styles.lineRoundedchevronRight3}
          alt=""
          src={lineRoundedChevronRight3}
        />
        <Property1TableNormalRow
          tableCell="Time"
          tableCell1="Z score"
          tableCell2="Symbol 1"
          tableCell3="Symbol 2"
          tableCell4="P value"
          tableCell5="Optimal z +/-"
          property1TableNormalRowPosition="absolute"
          property1TableNormalRowWidth="957.03px"
          property1TableNormalRowTop="12.67px"
          property1TableNormalRowLeft="10.73px"
          property1TableNormalRowHeight="49.76px"
        />
        <Property1TableNormalRow
          tableCell="2023/05/06 11:35"
          tableCell1="0.75"
          tableCell2="ETHUSDT"
          tableCell3="ATOMUSDT"
          tableCell4="0.05"
          tableCell5="1.0     /    -1.2"
          property1TableNormalRowPosition="absolute"
          property1TableNormalRowWidth="957.03px"
          property1TableNormalRowTop="63.27px"
          property1TableNormalRowLeft="10.12px"
          property1TableNormalRowHeight="49.76px"
        />
      </div>
      <div className={styles.marketCandidatesAccordionChild} />
      <div className={styles.pagination}>
        <FormContainer5 dimensionCode="/arrowleft.svg" />
        <div className={styles.paginationNumbers}>
          <StateDefaultShapeSquare
            number="1"
            stateDefaultShapeSquareFlexShrink="0"
            stateDefaultShapeSquareBackgroundColor="#e5f0ff"
            numberLineHeight="140%"
            numberColor="#006aff"
          />
          <StateDefaultShapeSquare
            number="2"
            stateDefaultShapeSquareFlexShrink="0"
            stateDefaultShapeSquareBackgroundColor="unset"
            numberLineHeight="140%"
            numberColor="#6e6e91"
          />
          <StateDefaultShapeSquare
            number="3"
            stateDefaultShapeSquareFlexShrink="0"
            stateDefaultShapeSquareBackgroundColor="unset"
            numberLineHeight="140%"
            numberColor="#6e6e91"
          />
          <StateDefaultShapeSquare
            number="..."
            stateDefaultShapeSquareFlexShrink="0"
            stateDefaultShapeSquareBackgroundColor="unset"
            numberLineHeight="140%"
            numberColor="#6e6e91"
          />
          <StateDefaultShapeSquare
            number="8"
            stateDefaultShapeSquareFlexShrink="0"
            stateDefaultShapeSquareBackgroundColor="unset"
            numberLineHeight="140%"
            numberColor="#6e6e91"
          />
          <StateDefaultShapeSquare
            number="9"
            stateDefaultShapeSquareFlexShrink="0"
            stateDefaultShapeSquareBackgroundColor="unset"
            numberLineHeight="140%"
            numberColor="#6e6e91"
          />
          <StateDefaultShapeSquare
            number="10"
            stateDefaultShapeSquareFlexShrink="0"
            stateDefaultShapeSquareBackgroundColor="unset"
            numberLineHeight="140%"
            numberColor="#6e6e91"
          />
        </div>
        <SizesmHierarchySecondaryG
          text="Next"
          circle="/arrowright.svg"
          sizesmHierarchySecondaryGPosition="unset"
          buttonBaseBorder="1px solid #c5c5d3"
          textLineHeight="140%"
          textColor="#16161d"
        />
      </div>
    </div>
  );
};

export default MarketCandidatesAccordionForm;
