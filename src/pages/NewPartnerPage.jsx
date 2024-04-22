import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NewPartnerPage.module.css";

const NewPartnerPage = () => {
  const navigate = useNavigate();

  const onButtonContainer1Click = useCallback(() => {
    navigate("/partner-page");
  }, [navigate]);

  return (
    <div className={styles.newPartnerPage}>
      <div className={styles.navbar}>
        <div className={styles.background} />
        <b className={styles.logo}>ITEMIZE</b>
        <div className={styles.icons}>
          <img
            className={styles.notificationsstyle4Icon}
            alt=""
            src="/notificationsstyle4.svg"
          />
          <img
            className={styles.notificationsstyle4Icon}
            alt=""
            src="/paperplanefill.svg"
          />
          <img
            className={styles.notificationsstyle4Icon}
            alt=""
            src="/personfill.svg"
          />
          <img
            className={styles.notificationsstyle4Icon}
            alt=""
            src="/reorderthreeoutline.svg"
          />
        </div>
      </div>
      <img className={styles.blurbgIcon} alt="" src="/blurbg.svg" />
      <div className={styles.addPartner}>
        <div className={styles.background1} />
        <div className={styles.button}>
          <div className={styles.text}>Cancel</div>
          <div className={styles.background2} />
        </div>
        <div className={styles.button1} onClick={onButtonContainer1Click}>
          <div className={styles.text}>Create</div>
          <div className={styles.background2} />
        </div>
        <div className={styles.newPartner}>
          <div className={styles.textInputs}>
            <div className={styles.inputTextLabel}>Name</div>
            <div className={styles.inputField}>
              <div className={styles.text2}>
                <div className={styles.typeHere}>Type here</div>
                <img className={styles.icon} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.textInputs}>
            <div className={styles.inputTextLabel}>Dropdown Title</div>
            <div className={styles.inputField}>
              <div className={styles.text3}>
                <div className={styles.dropdownOption}>Dropdown option</div>
                <img className={styles.icon1} alt="" src="/icon.svg" />
              </div>
            </div>
          </div>
          <div className={styles.textInputs}>
            <div className={styles.inputTextLabel}>Email</div>
            <div className={styles.inputField}>
              <div className={styles.text2}>
                <div className={styles.typeHere}>Type here</div>
                <img className={styles.icon} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.textInputs}>
            <div className={styles.inputTextLabel}>Contact Number</div>
            <div className={styles.inputField}>
              <div className={styles.text2}>
                <div className={styles.typeHere}>Type here</div>
                <img className={styles.icon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <b className={styles.title}>New Partner</b>
      </div>
    </div>
  );
};

export default NewPartnerPage;
