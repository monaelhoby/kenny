import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import "./styles.css";
import Button from "@material-ui/core/Button";
import Form from "../Form/Form";
const SectionA = () => {
  const [choose1, setChoose1] = React.useState({});
  const [choose2, setChoose2] = React.useState({});
  const [choose3, setChoose3] = React.useState({});
  const [choose4, setChoose4] = React.useState({});
  const [choose5, setChoose5] = React.useState({});
  const [choose6, setChoose6] = React.useState({});
  const [choose7, setChoose7] = React.useState({});
  const [choose8, setChoose8] = React.useState({});
  const [choose9, setChoose9] = React.useState({});
  const [choose10, setChoose10] = React.useState({});
  const [choose11, setChoose11] = React.useState({});
  const [choose12, setChoose12] = React.useState({});
  const [choose13, setChoose13] = React.useState({});
  const [choose14, setChoose14] = React.useState({});
  const [choose15, setChoose15] = React.useState({});
  const [choose16, setChoose16] = React.useState({});
  const [choose17, setChoose17] = React.useState({});
  const [choose18, setChoose18] = React.useState({});
  const [choose19, setChoose19] = React.useState({});
  const [choose20, setChoose20] = React.useState({});
  const [choose21, setChoose21] = React.useState({});
  const [choose22, setChoose22] = React.useState({});
  const [choose23, setChoose23] = React.useState({});
  const [choose24, setChoose24] = React.useState({});
  const [choose25, setChoose25] = React.useState({});
  const [choose26, setChoose26] = React.useState({});
  const [choose27, setChoose27] = React.useState({});
  const [choose28, setChoose28] = React.useState({});
  const [choose29, setChoose29] = React.useState({});
  const [choose30, setChoose30] = React.useState({});
  const [choose31, setChoose31] = React.useState({});
  const [choose32, setChoose32] = React.useState({});
  const [choose33, setChoose33] = React.useState({});
  const [choose34, setChoose34] = React.useState({});
  const [choose35, setChoose35] = React.useState({});
  const [choose36, setChoose36] = React.useState({});
  const [choose37, setChoose37] = React.useState({});
  const [choose38, setChoose38] = React.useState({});
  const [choose39, setChoose39] = React.useState({});
  const [choose40, setChoose40] = React.useState({});
  const [choose41, setChoose41] = React.useState({});
  const [choose42, setChoose42] = React.useState({});
  const [choose43, setChoose43] = React.useState({});
  const [choose44, setChoose44] = React.useState({});
  const [choose45, setChoose45] = React.useState({});
  const [choose46, setChoose46] = React.useState({});
  const [accuiredPackage, setAccuiredPackage] = React.useState(null);

  if (choose20.A11) {
    if (
      choose1.A1 === "yes" ||
      choose2.A2 === "yes" ||
      choose3.A12 === "yes" ||
      choose4.A12 === "yes" ||
      choose6.A1 === "yes" ||
      choose7.A2 === "yes" ||
      choose8.A3 === "yes" ||
      choose9.A4 === "yes" ||
      choose10.A6 === "yes" ||
      choose11.A7 === "yes" ||
      choose12.A5a === "yes" ||
      choose12.A5b === "yes" ||
      choose12.A5c === "yes" ||
      choose13.A8a === "yes" ||
      choose14.A8b === "yes" ||
      choose15.A8c === "yes" ||
      choose16.A8d === "yes" ||
      choose18.A10 === "yes" ||
      choose19.A9 === "yes" ||
      choose20.A11 === "yes"
    ) {
      var disableRadio = "Bronze";
      console.log(disableRadio);
    }
  }
  if (choose34.B2) {
    if (
      choose22.B1a === "yes" ||
      choose23.B1b === "yes" ||
      choose24.B1c === "yes" ||
      choose25.B1d === "yes" ||
      choose27.B1e === "yes" ||
      choose33.B2 === "yes" ||
      choose34.B2 === "yes"
    ) {
      var disableRadio = "Silver";
      console.log(disableRadio);
    }
  }
  if (choose42.C4b) {
    if (
      choose3.C11 === "yes" ||
      choose5.C10 === "yes" ||
      choose18.C3 === "yes" ||
      choose21.C2 === "yes" ||
      choose28.C8a === "yes" ||
      choose29.C8b === "yes" ||
      choose30.C8c === "yes" ||
      choose31.C8d === "yes" ||
      choose32.C8e === "yes" ||
      choose33.C6 === "yes" ||
      choose33.C7 === "yes" ||
      choose35.C5 === "yes" ||
      choose36.C6 === "yes" ||
      choose37.C7 === "yes" ||
      choose39.C1 === "yes" ||
      choose40.C9 === "yes" ||
      choose41.C4a === "yes" ||
      choose42.C4b === "yes"
    ) {
      var disableRadio = "Gold";
      console.log(disableRadio);
    }
  }
  if (choose46.D1) {
    if (
      choose26.D2 === "yes" ||
      choose33.D3 === "yes" ||
      choose38.D3 === "yes" ||
      choose43.D4 === "yes" ||
      choose44.D5 === "yes" ||
      choose45.D6 === "yes" ||
      choose46.D1 === "yes"
    ) {
      var disableRadio = "Premium";
      // console.log(disableRadio);
    }
  }

  const onClickHandler = () => {
    setAccuiredPackage(disableRadio);
  };


  return (
    <div className="oneQuez">
      {!accuiredPackage && (
        <div className={disableRadio ? "disableRadio" : "notdisableRadio"}>
          <p>Congratulations You Are Qualified for {disableRadio} Package</p>
          <Button onClick={onClickHandler} variant="contained" color="primary">
            OK
          </Button>
        </div>
      )}

      <div className="title">
        <span>
          1. Within the past 12 months, have you used by any means, a substance
          or product containing tobacco or nicotine (excluding cigars), or have
          you smoked (including electronic vaporizer or “vaping”) marijuana more
          than four times per week? *
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose1({ A1: "yes" })}
            color="primary"
            value={"yes"}
            name="state1"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose1({ A1: "no" })}
            color="secondary"
            value={"no"}
            name="state1"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          2. Will premiums be stopped, or coverage be reduced or discontinued on
          any existing life insurance coverage or annuity if the insurance
          applied for in this application is issued? *
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose2({ A2: "yes" })}
            color="primary"
            value={"yes"}
            name="state2"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose2({ A2: "no" })}
            color="secondary"
            value={"no"}
            name="state2"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          3. Is your weight outside the range for your height in following
          table? 4’8’’ – 4’10’’..… 79 – 185 lbs 5’8’’ – 5’10’’..…115 – 260 lbs
          4’11’’ – 5’1’’..… 87 – 199 lbs 5’11’’ 6’1’’….. 125 – 282 lbs 5’2’’ –
          5’4’’….. 94 – 215 lbs 6’2’ – 6’4’’..… 139 – 305 lbs 5’5’’ - 5’7’’..…
          104 – 235 lbs 6’5’’ – 6’7’’ ..… 149 – 333 lbs
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            color="primary"
            onClick={() => setChoose3({ C11: "yes" })}
            value={"yes"}
            name="state3"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            color="secondary"
            onClick={() => {
              setChoose3({ A12: "no", C11: "no" });
            }}
            value={"no"}
            name="state3"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          Is your weight greater than that indicated for your height in the
          following table: 4’8’’ – 4’10’’….. 230lbs 5’8’’ – 5’10’’ ….. 328lbs
          4’11’’ – 5’1’’ ….. 247lbs 5’11’’ – 6’1’’ …..358 lbs 5’2’’ – 5’4’’ …..
          273 lbs 6’2’’ – 6’4’’ ….. 389 lbs 5’5’’ – 5’7’’ ….. 300 lbs 6’5’’ –
          6’7’’ ….. 420 lbs
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => {
              setChoose4({ A12: "yes" });
            }}
            color="primary"
            value={"yes"}
            name="state4"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => {
              setChoose4({ A12: "no" });
            }}
            color="secondary"
            value={"no"}
            name="state4"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          4. Have you had a weight loss of 10% body weight or more within the
          last 12 months, other than due from intentional dieting, exercise, or
          child birth?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose5({ C10: "yes" })}
            color="primary"
            value={"yes"}
            name="state5"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose5({ C10: "no" })}
            color="secondary"
            value={"no"}
            name="state5"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          5. Are you currently incapable of independently carrying out five or
          more of the basic activities of daily living such as getting up
          (transferring), walking, washing, toileting, dressing or feeding.
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose6({ A1: "yes" })}
            color="primary"
            value={"yes"}
            name="state6"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose6({ A1: "no" })}
            color="secondary"
            value={"no"}
            name="state6"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          6. Are you currently a resident of a long-term care facility, nursing
          home, nursing facility, or assisted living residence?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose7({ A2: "yes" })}
            color="primary"
            value={"yes"}
            name="state7"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose7({ A2: "no" })}
            color="secondary"
            value={"no"}
            name="state7"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          7. Are you in need of an organ transplant, on a waiting list for organ
          transplant or the recipient of an organ transplant[ excluding corneal
          transplants ]?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose8({ A3: "yes" })}
            color="primary"
            value={"yes"}
            name="state8"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose8({ A3: "no" })}
            color="secondary"
            value={"no"}
            name="state8"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          8. Have you been admitted to a hospital for more than 48 hours within
          the past 30 days (excluding pregnancy).
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose9({ A4: "yes" })}
            color="primary"
            value={"yes"}
            name="state9"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose9({ A4: "no" })}
            color="secondary"
            value={"no"}
            name="state9"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          Have you never been diagnosed for a condition for which a physician
          has estimated that you have 24 months or less to live?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose10({ A6: "yes" })}
            color="primary"
            value={"yes"}
            name="state10"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose10({ A6: "no" })}
            color="secondary"
            value={"no"}
            name="state10"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          9. Have you ever been told you have, or been treated for Acquired
          Immunodeficiency Syndrome (AIDS). I have never tested positive for
          Immunodeficiency Virus (HIV
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose11({ A7: "yes" })}
            color="primary"
            value={"yes"}
            name="state11"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose11({ A7: "no" })}
            color="secondary"
            value={"no"}
            name="state11"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          10. Within the past 60 days, have you been advised by a physician of
          any abnormal diagnostic test result, to have surgery or a diagnostic
          test or special test of any type, or to consult with a physician,
          medical institution or specialist that has not yet been completed.
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose12({ A5a: "yes", A5b: "yes", A5c: "yes" })
            }
            color="primary"
            value={"yes"}
            name="state12"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose12({ A5a: "no", A5B: "no", A5c: "no" })
            }
            color="secondary"
            value={"no"}
            name="state12"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          11. In the past 10 years, have you been told, been diagnosed with, or
          treated for, or advised to have an investigation, that has not been
          completed for: Metastatic cancer or more than 1 occurrence of cancer
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose13({
                A8a: "yes",
              })
            }
            color="primary"
            value={"yes"}
            name="state13"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose13({
                A8a: "no",
              })
            }
            color="secondary"
            value={"no"}
            name="state13"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>

      <div className="title">
        <span>
          Fibrosis, Cystic Fibrosis or a chronic respiratory condition
          (excluding sleep apnea) which required the continuing administration
          of oxygen?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose14({
                A8b: "yes",
              })
            }
            color="primary"
            value={"yes"}
            name="state14"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose14({
                A8b: "no",
              })
            }
            color="secondary"
            value={"no"}
            name="state14"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          Dementia, Alzheimer's, Muscular Dystrophy, Huntington's Chorea or
          Amyotrophic Lateral Sclerosis (ALS)?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose15({
                A8c: "yes",
              })
            }
            color="primary"
            value={"yes"}
            name="state15"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose15({
                A8c: "no",
              })
            }
            color="secondary"
            value={"no"}
            name="state15"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>heart failure or cardiomyopathy?</span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose16({
                A8d: "yes",
              })
            }
            color="primary"
            value={"yes"}
            name="state16"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose16({
                A8d: "no",
              })
            }
            color="secondary"
            value={"no"}
            name="state16"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          12. Within the past three years, have you used narcotics or
          barbiturates (except as prescribed by a physician), heroin,
          psychoactive drugs, cocaine, crack or other similar agent, or been a
          resident of a drug or alcohol treatment facility ?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => {
              setChoose17("yes");
            }}
            color="primary"
            value={"yes"}
            name="state17"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            color="secondary"
            onClick={() => {
              setChoose17({ A10: "no", c3: "no" });
            }}
            value={"no"}
            name="state17"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>Has it been in the past 12 months?</span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => {
              setChoose18({ A10: "yes", c3: "yes" });
            }}
            color="primary"
            value={"yes"}
            name="state18"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => {
              setChoose18({ A10: "no", c3: "no" });
            }}
            color="secondary"
            value={"no"}
            name="state18"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          13. Have you ever had, been treated for, or been diagnosed prior to
          age 40, with: chronic kidney disease, stroke (CVA), transient ischemic
          attack (TIA), aneurysm, coronary artery disease, heart bypass surgery,
          angioplasty, stent insertion, angina or heart attack?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => {
              setChoose19({ A9: "yes" });
            }}
            color="primary"
            value={"yes"}
            name="state19"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => {
              setChoose19({ A9: "no" });
            }}
            color="secondary"
            value={"no"}
            name="state19"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          14. Within the past 12 months, - have you been convicted of, awaiting
          sentencing for, incarcerated for, or on probation for a criminal
          offence, or do you currently have any criminal charges pending?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => {
              setChoose20({ A11: "yes" });
            }}
            color="primary"
            value={"yes"}
            name="state20"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => {
              setChoose20({ A11: "no" });
            }}
            color="secondary"
            value={"no"}
            name="state20"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          15. Within the past 3 years, have you been treated for or received
          medical advice or counseling for the use of drugs or alcohol?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => {
              setChoose21({ c2: "yes" });
            }}
            color="primary"
            value={"yes"}
            name="state21"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => {
              setChoose21({ c2: "no" });
            }}
            color="secondary"
            value={"no"}
            name="state21"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          16. Within the past 12 months: - a. Cardiac chest pain (angina), heart
          attack (myocardial infarction), coronary artery disease, stroke (CVA),
          heart bypass surgery, angioplasty, stent insertion or more than one
          transient ischemic attack (TIA)?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => {
              setChoose22({ B1a: "yes" });
            }}
            color="primary"
            value={"yes"}
            name="state22"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => {
              setChoose22({ B1a: "no" });
            }}
            color="secondary"
            value={"no"}
            name="state22"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          - Circulatory problems in the legs and/or feet (peripheral arterial or
          vascular disease)?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => {
              setChoose23({ B1b: "yes" });
            }}
            color="primary"
            value={"yes"}
            name="state23"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => {
              setChoose23({ B1b: "no" });
            }}
            color="secondary"
            value={"no"}
            name="state23"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          - Chronic kidney disease, or been investigated or been advised to be
          investigated for polycystic kidney disease (PKD), or have a family
          history of PKD and have not been investigated?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => {
              setChoose24({ B1c: "yes" });
            }}
            color="primary"
            value={"yes"}
            name="state24"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => {
              setChoose24({ B1c: "no" });
            }}
            color="secondary"
            value={"no"}
            name="state24"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          - Liver disease such as, but not limited to, cirrhosis or hepatitis
          (excluding Hepatitis A or B)?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => {
              setChoose25({ B1d: "yes" });
            }}
            color="primary"
            value={"yes"}
            name="state25"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => {
              setChoose25({ B1d: "no" });
            }}
            color="secondary"
            value={"no"}
            name="state25"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          17. Have you ever been told you have, treated for any form of cancer,
          leukemia or lymphoma [ excluding basal cell carcinoma ] in your life?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => {
              setChoose26({ D2: "yes" });
            }}
            color="primary"
            value={"yes"}
            name="state26"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => {
              setChoose26({
                B1e: "no",
                C8a: "no",
                C8b: "no",
                C8c: "no",
                C8d: "no",
                C8e: "no",
                D2: "no",
              });
            }}
            color="secondary"
            value={"no"}
            name="state26"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>Was this treatment or diagnosed in the last 12 months?</span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose27({ B1e: "yes" })}
            color="primary"
            value={"yes"}
            name="state27"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose27({ B1e: "no" })}
            color="secondary"
            value={"no"}
            name="state27"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          In the past 3 years have you been told you have or received treatment
          for: Lung cancer
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose28({ C8a: "yes" })}
            color="primary"
            value={"yes"}
            name="state28"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose28({ C8a: "no" })}
            color="secondary"
            value={"no"}
            name="state28"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>Colon Cancer</span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose29({ C8b: "yes" })}
            color="primary"
            value={"yes"}
            name="state29"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose29({ C8b: "no" })}
            color="secondary"
            value={"no"}
            name="state29"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>Breast cancer, cervical cancer, or uterine cancer?</span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose30({ C8c: "yes" })}
            color="primary"
            value={"yes"}
            name="state30"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose30({ C8c: "no" })}
            color="secondary"
            value={"no"}
            name="state30"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>Malignant melanoma</span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose31({ C8d: "yes" })}
            color="primary"
            value={"yes"}
            name="state31"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose31({ C8d: "no" })}
            color="secondary"
            value={"no"}
            name="state31"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>Leukemia [all types], lymphoma or multiple myeloma?</span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose32({ C8e: "yes" })}
            color="primary"
            value={"yes"}
            name="state32"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() => setChoose32({ C8e: "no" })}
            color="secondary"
            value={"no"}
            name="state32"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          18. Have you ever had, been told you had, been diagnosed with, or
          treated for diabetes [excluding gestational diabetes],or are
          undergoing investigation for diabetes or blood sugar levels
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose33({
                B2: "yes",
                C6: "yes",
                C7: "yes",
                D3: "yes",
              })
            }
            color="primary"
            value={"yes"}
            name="state33"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose33({
                B2: "no",
                C6: "no",
                C7: "no",
                D3: "no",
              })
            }
            color="secondary"
            value={"no"}
            name="state33"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>Are you under the age of 30</span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose34({
                B2: "yes",
              })
            }
            color="primary"
            value={"yes"}
            name="state34"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose34({
                B2: "no",
              })
            }
            color="secondary"
            value={"no"}
            name="state34"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          Are you under age 55 with diabetes that was diagnosed more than 20
          years ago and is currently treated with insulin?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose35({
                C5: "yes",
              })
            }
            color="primary"
            value={"yes"}
            name="state35"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose35({
                C5: "no",
              })
            }
            color="secondary"
            value={"no"}
            name="state35"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          Do you have diabetes that is currently treated with insulin and the
          prescribed dosage of insulin increased within the past six months?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose36({
                C6: "yes",
              })
            }
            color="primary"
            value={"yes"}
            name="state36"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose36({
                C6: "no",
              })
            }
            color="secondary"
            value={"no"}
            name="state36"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          Have you ever had, been told you have, or been treated for diabetes
          and any of the following: coronary artery disease, peripheral vascular
          disease, tingling and loss of feeling in the extremities (neuropathy),
          amputation, retinopathy or stroke (CVA)?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose37({
                C7: "yes",
              })
            }
            color="primary"
            value={"yes"}
            name="state37"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose37({
                C7: "no",
              })
            }
            color="secondary"
            value={"no"}
            name="state37"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          Within the last 6 months, have you been told you have or been treated
          for diabetes?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose38({
                D3: "yes",
              })
            }
            color="primary"
            value={"yes"}
            name="state38"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose38({
                D3: "no",
              })
            }
            color="secondary"
            value={"no"}
            name="state38"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          19. In the past 12 months, have you had, been told you had, been
          diagnosed with or treated for bipolar disorder, or schizophrenia, or
          psychosis?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose39({
                C1: "yes",
              })
            }
            color="primary"
            value={"yes"}
            name="state39"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose39({
                C1: "no",
              })
            }
            color="secondary"
            value={"no"}
            name="state39"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          20. In the next 12 months, do you plan to travel outside North
          America, the Caribbean (excluding Haiti), the United Kingdom, or
          European Union countries for more than 12 consecutive weeks?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose40({
                C9: "yes",
              })
            }
            color="primary"
            value={"yes"}
            name="state40"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose40({
                C9: "no",
              })
            }
            color="secondary"
            value={"no"}
            name="state40"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          21. Are you age 54 or under and within the past three years, have you
          had treatment or surgery for or been diagnosed as having cardiac chest
          pain (angina), heart attack (myocardial infarction), coronary artery
          disease, heart bypass surgery, angioplasty, stent insertion, stroke
          (CVA) or chronic lung disease (excluding asthma)?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose41({
                C4a: "yes",
              })
            }
            color="primary"
            value={"yes"}
            name="state41"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose41({
                C4a: "no",
              })
            }
            color="secondary"
            value={"no"}
            name="state41"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          22. Are you age 55 or over and within the past two years, have you had
          treatment or surgery for or been diagnosed as having cardiac chest
          pain (angina), heart attack (myocardial infarction), coronary artery
          disease, heart bypass surgery, angioplasty, stent insertion, stroke
          (CVA) or chronic lung disease (excluding asthma)?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose42({
                C4b: "yes",
              })
            }
            color="primary"
            value={"yes"}
            name="state42"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose42({
                C4b: "no",
              })
            }
            color="secondary"
            value={"no"}
            name="state42"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          23. Within the past 3 years, have you been incarcerated or on
          probation for a criminal offence or are criminal charges now pending,
          excluding a single DUI?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose43({
                D4: "yes",
              })
            }
            color="primary"
            value={"yes"}
            name="state43"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose43({
                D4: "no",
              })
            }
            color="secondary"
            value={"no"}
            name="state43"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          24. Within the past two years, have you been involved in the operation
          of an aircraft as a pilot (scheduled commercial pilots excluded) or
          involved in any hazardous sports, or do you plan to do so within the
          next year?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose44({
                D5: "yes",
              })
            }
            color="primary"
            value={"yes"}
            name="state44"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose44({
                D5: "no",
              })
            }
            color="secondary"
            value={"no"}
            name="state44"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          25. Within the past two years, has your driver’s licence been
          suspended or revoked, or have you had more than three moving
          violations within the past 12 months?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose45({
                D6: "yes",
              })
            }
            color="primary"
            value={"yes"}
            name="state45"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose45({
                D6: "no",
              })
            }
            color="secondary"
            value={"no"}
            name="state45"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <div className="title">
        <span>
          26. In the past 12 months, have you been told you have, been treated
          for, or are you currently under investigation for multiple sclerosis?
        </span>
      </div>
      <div>
        <RadioGroup className="radio-group">
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose46({
                D1: "yes",
              })
            }
            color="primary"
            value={"yes"}
            name="state46"
          />
          <label htmlFor="">yes</label>
          <Radio
            disabled={disableRadio}
            onClick={() =>
              setChoose46({
                D1: "no",
              })
            }
            color="secondary"
            value={"no"}
            name="state46"
          />
          <label htmlFor="">no</label>
        </RadioGroup>
      </div>
      <Form accuiredPackage={accuiredPackage} />
    </div>
  );
};

export default SectionA;

