import type { NextPage } from "next";
import FormContainer4 from "../components/FormContainer4";
import BottomFooter from "../components/BottomFooter";
import Header from "../components/Header";
import FormContainer2 from "../components/FormContainer2";
import Container1 from "../components/Container1";
import StatisticalArbitrageContainer from "../components/StatisticalArbitrageContainer";
import Container2 from "../components/Container2";
import styles from "./index.module.css";
const MainPage: NextPage = () => {
  return (
    <div className={styles.mainPage}>
      <FormContainer4 />
      <BottomFooter />
      <Header />
      <div className={styles.frame}>
        <FormContainer2 />
        <Container1 />
      </div>
      <div className={styles.frame1}>
        <StatisticalArbitrageContainer />
        <Container2 />
      </div>
    </div>
  );
};

export default MainPage;
