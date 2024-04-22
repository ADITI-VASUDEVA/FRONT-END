import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/register-page");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onButtonContainer3Click = useCallback(() => {
    navigate("/register-page");
  }, [navigate]);

  return (
    <div className={styles.landingPage}>
      <div className={styles.navbar}>
        <div className={styles.background} />
        <b className={styles.logo}>ITEMIZE</b>
        <div className={styles.button} onClick={onButtonContainerClick}>
          <div className={styles.text}>login</div>
          <div className={styles.background1} />
        </div>
        <div className={styles.button1} onClick={onButtonContainer1Click}>
          <img className={styles.backgroundIcon} alt="" src="/background.svg" />
          <div className={styles.signupText}>Sign up</div>
        </div>
      </div>
      <div className={styles.featureSplitLeft}>
        <div className={styles.background2} />
        <div className={styles.content}>
          <b className={styles.title}>Feature that is amazing</b>
          <div className={styles.subtitle}>
            At Itemize, we understand the challenges of managing inventory and
            coordinating with partners in the supply chain.
          </div>
          <div className={styles.button2} onClick={onButtonContainer2Click}>
            <div className={styles.text}>Sign in</div>
            <div className={styles.background1} />
          </div>
        </div>
        <img
          className={styles.mediaBackgroundIcon}
          alt=""
          src="/media-background@2x.png"
        />
      </div>
      <div className={styles.trial}>
        <div className={styles.backgroundParent}>
          <div className={styles.rectangle} />
          <div className={styles.rectangle} />
        </div>
        <div className={styles.content1}>
          <div className={styles.title1}>Value Proposition</div>
          <div className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className={styles.button3} onClick={onButtonContainer3Click}>
            <img
              className={styles.backgroundIcon}
              alt=""
              src="/background.svg"
            />
            <div className={styles.signupText}>Sign up</div>
          </div>
        </div>
      </div>
      <div className={styles.postBlog}>
        <div className={styles.rectangle} />
        <div className={styles.blogCardParent}>
          <div className={styles.blogCard}>
            <div className={styles.backgroundParent}>
              <div className={styles.background} />
              <div className={styles.titleParent}>
                <b className={styles.title2}>Efficient Inventory Management</b>
                <div className={styles.summary}>
                  With Itemize, you can easily manage your inventory in
                  real-time
                </div>
              </div>
            </div>
          </div>
          <div className={styles.blogCard1}>
            <div className={styles.backgroundParent}>
              <div className={styles.background} />
              <div className={styles.titleGroup}>
                <b className={styles.title2}>Seamless Collaboration</b>
                <div className={styles.summary}>
                  Connect with your suppliers and distributors seamlessly
                  through our platform....
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blogCardFeature}>
          <div className={styles.background8} />
          <div className={styles.title4}>
            Welcome to Itemize: Streamline Your Supply Chain
          </div>
          <img className={styles.mediaIcon} alt="" src="/media@2x.png" />
          <div className={styles.author}>Author name</div>
        </div>
      </div>
      <div className={styles.featureLeft}>
        <div className={styles.backgroundParent}>
          <div className={styles.rectangle} />
          <div className={styles.intuitiveDashboardParent}>
            <b className={styles.intuitiveDashboard}>Intuitive Dashboard</b>
            <div className={styles.ourUserFriendlyDashboard}>
              Our user-friendly dashboard provides a clear overview of your
              inventory, orders, and partner interactions. With customizable
              analytics and reporting tools, you can gain valuable insights into
              your business performance and make informed decisions.
            </div>
            <div className={styles.ellipse} />
            <div className={styles.dhakaOkeProduct}>
              Dhaka Oke, Product Designer
            </div>
            <div className={styles.customerQuote}>
              Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <img className={styles.mediaIcon1} alt="" src="/media1@2x.png" />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.background10} />
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
        <b className={styles.logo1}>ITEMIZE</b>
        <img className={styles.dividerIcon} alt="" src="/divider.svg" />
        <img
          className={styles.socialMediaIcon}
          alt=""
          src="/social-media.svg"
        />
      </div>
    </div>
  );
};

export default LandingPage;
