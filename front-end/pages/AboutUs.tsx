import type { NextPage } from "next";
import SizeLargeTypePrimary from "../components/SizeLargeTypePrimary";
import SizeSmall from "../components/SizeSmall";
import styles from "./AboutUs.module.css";
const AboutUs: NextPage = () => {
  return (
    <div className={styles.aboutus}>
      <div className={styles.container} />
      <img
        className={styles.logoStyleGuideTop}
        alt=""
        src="/logo-style-guide-top4.svg"
      />
      <div className={styles.sections}>
        <div className={styles.link}>
          <div className={styles.masterLink}>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedpassword8.svg"
            />
            <div className={styles.home}>Home</div>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedchevron-down7.svg"
            />
          </div>
        </div>
        <div className={styles.link}>
          <div className={styles.masterLink}>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedpassword8.svg"
            />
            <div className={styles.home}>About</div>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedchevron-down7.svg"
            />
          </div>
        </div>
        <div className={styles.link}>
          <div className={styles.masterLink}>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedpassword8.svg"
            />
            <div className={styles.home}>Blog</div>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedchevron-down7.svg"
            />
          </div>
        </div>
        <div className={styles.masterLink}>
          <div className={styles.home}>Resources</div>
          <img
            className={styles.lineRoundedchevronDown3}
            alt=""
            src="/line-roundedchevron-down8.svg"
          />
        </div>
        <div className={styles.link}>
          <div className={styles.masterLink}>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedpassword8.svg"
            />
            <div className={styles.home}>Pricing</div>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedchevron-down7.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.buttonsSet}>
        <div className={styles.navList}>
          <div className={styles.login}>
            <img
              className={styles.lineRoundedchevronDown3}
              alt=""
              src="/line-roundedpassword9.svg"
            />
            <div className={styles.home}>Login</div>
          </div>
          <SizeLargeTypePrimary
            lineRoundedSearch="/line-roundedsearch7.svg"
            buttonText="Get started"
            lineRoundedArrowRight="/line-roundedarrow-right4.svg"
            iconLeft={false}
            iconRight={false}
            sizeLargeTypePrimaryPosition="unset"
            sizeLargeTypePrimaryAlignItems="center"
            sizeLargeTypePrimaryBackgroundColor="#5d5a88"
            sizeLargeTypePrimaryBorderRadius="30px"
            sizeLargeTypePrimaryPadding="18px 24px"
            sizeLargeTypePrimaryJustifyContent="flex-end"
            buttonTextColor="#fff"
            buttonTextFontWeight="unset"
            buttonTextFontSize="16px"
            buttonTextTextAlign="right"
          />
        </div>
      </div>
      <div className={styles.contentSectionsV6}>
        <div className={styles.wrapper}>
          <div className={styles.container1} />
          <div className={styles.paragraph}>
            <p className={styles.stm}>
              {" "}
              STM은 투자자들이 시장 중립적인 투자 전략을 암호화폐 투자에도
              적용할 수 있도록, 강력하고 신뢰할 수 있는 페어 트레이딩 플랫폼을
              제공합니다.
            </p>
            <p className={styles.stm}>&nbsp;</p>
            <p className={styles.stm}>
              {" "}
              시장 중립 전략은, 상향 또는 하향하는 시장 조건에 관계없이 수익을
              창출하는 방법입니다. 이는 두 암호화폐 간의 가격 변동 상관관계를
              분석하고, 상대적으로 고평가 또는 저평가된 암호화폐를 식별하는 것을
              목표로 합니다. 이는 시장의 변동성을 최소화하고, 동시에 안정적인
              수익 창출을 가능하게 해주기 때문입니다.
            </p>
            <p className={styles.stm}>&nbsp;</p>
            <p className={styles.stm}>
              {" "}
              STM에서는 이러한 전략을 지원하고, 투자자들이 복잡한 암호화폐
              시장에서도 안정적인 결정을 할 수 있도록 돕습니다. 투자는 복잡한
              결정을 요구하는 과정입니다. 그러나 STM의 목표는 투자를 간단하게
              만드는 것입니다. 우리의 플랫폼을 통해 투자자들은 복잡한 데이터를
              명확하고 이해하기 쉬운 정보로 변환할 수 있습니다.
            </p>
          </div>
          <b className={styles.featureTitle}>Feature one</b>
          <div className={styles.imagePlaceholder}>
            <img
              className={styles.containerIcon}
              alt=""
              src="/container@2x.png"
            />
            <SizeSmall
              sizeSmallSizeSmall="/image-icon.svg"
              sizeSmallIconPosition="absolute"
              sizeSmallIconWidth="21.33%"
              sizeSmallIconHeight="28.2%"
              sizeSmallIconTop="35.9%"
              sizeSmallIconRight="39.33%"
              sizeSmallIconBottom="35.9%"
              sizeSmallIconLeft="39.33%"
              sizeSmallIconMaxWidth="100%"
              sizeSmallIconOverflow="hidden"
              sizeSmallIconMaxHeight="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
