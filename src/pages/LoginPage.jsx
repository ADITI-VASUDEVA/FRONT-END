import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className={styles.loginPage}>
      <div className={styles.navbar}>
        <div className={styles.background} />
        <b className={styles.logo}>ITEMIZE</b>
      </div>
      <div className={styles.error}>
        <div className={styles.rectangle} />
        <div className={styles.noWorkspace}>no workspace</div>
        <div className={styles.oops}>OOPS!</div>
        <img className={styles.errorChild} alt="" src="/group-26816.svg" />
        <div className={styles.buttonSecondary}>
          <div className={styles.background1} />
          <div className={styles.text}>Get Started</div>
        </div>
      </div>
      <div className={styles.signinPanel}>
        <div className={styles.media}>
          <img
            className={styles.mediaBackgroundIcon}
            alt=""
            src="/media-background1@2x.png"
          />
          <div className={styles.mediaBackground} />
        </div>
        <div className={styles.signinForm}>
          <div className={styles.mediablr}>
            <div className={styles.mediaBackground1} />
          </div>
          <div className={styles.background2} />
          <b className={styles.logo1}>Login</b>
          <div className={styles.textInputs}>
            <div className={styles.inputTextLabel}>Input Text Label</div>
            <div className={styles.inputField}>
              <div className={styles.text1}>
                <div className={styles.typeHere}>Type here</div>
                <img className={styles.icon} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.textInputs1}>
            <div className={styles.inputTextLabel}>Input Text Label</div>
            <div className={styles.inputField}>
              <div className={styles.text1}>
                <div className={styles.typeHere}>Type here</div>
                <img className={styles.icon} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.text3}>Forgot Password</div>
          <div className={styles.button} onClick={onButtonContainerClick}>
            <div className={styles.text4}>Login</div>
          </div>
          <b className={styles.logo2}>ITEMIZE</b>
          <b className={styles.text5}>
            One Step Solution to Inventory Management and Supply Chain
          </b>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.background3} />
        <div className={styles.linksLeft}>
          <b className={styles.link}>Product</b>
          <b className={styles.link1}>Features</b>
          <b className={styles.link2}>Resources</b>
        </div>
        <div className={styles.linksRight}>
          <b className={styles.link3}>About</b>
          <b className={styles.link4}>Blog</b>
          <b className={styles.link5}>Support</b>
        </div>
        <b className={styles.logo3}>ITEMIZE</b>
        <img className={styles.dividerIcon} alt="" src="/divider.svg" />
        <img
          className={styles.socialMediaIcon}
          alt=""
          src="/social-media.svg"
        />
      </div>
      <div className={styles.footer1}>
        <div className={styles.linksLeft1}>
          <b className={styles.link6}>Product</b>
          <b className={styles.link7}>Features</b>
          <b className={styles.link8}>Resources</b>
        </div>
        <div className={styles.linksRight1}>
          <b className={styles.link3}>About</b>
          <b className={styles.link4}>Blog</b>
          <b className={styles.link5}>Support</b>
        </div>
        <b className={styles.logo4}>ITEMIZE</b>
        <img className={styles.dividerIcon1} alt="" src="/divider.svg" />
        <img
          className={styles.socialMediaIcon1}
          alt=""
          src="/social-media.svg"
        />
      </div>
    </div>
  );
};

export default LoginPage;
