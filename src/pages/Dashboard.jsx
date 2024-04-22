import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const onLightContainer1Click = useCallback(() => {
    navigate("/partner-page");
  }, [navigate]);

  const onLightContainer2Click = useCallback(() => {
    navigate("/inventory-page");
  }, [navigate]);

  const onLightContainer3Click = useCallback(() => {
    navigate("/order-page");
  }, [navigate]);

  const onSideBarButtonsClick = useCallback(() => {
    navigate("/order-page");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/dashboard-start");
  }, [navigate]);

  return (
    <div className={styles.dashboard}>
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
      <img className={styles.rectangleIcon} alt="" src="/rectangle@2x.png" />
      <div className={styles.rectangle} />
      <div className={styles.date}>
        <div className={styles.background1} />
        <div className={styles.text}>
          <span className={styles.textTxt}>
            <p className={styles.april7}>April 7</p>
            <p className={styles.p}>2024</p>
          </span>
        </div>
        <img
          className={styles.calendarNumberIcon}
          alt=""
          src="/calendarnumber.svg"
        />
      </div>
      <div className={styles.profit}>
        <div className={styles.text1}>Profit</div>
        <div className={styles.background2} />
        <b className={styles.title}>
          <span>2,00,000</span>
          <span className={styles.rs}>Rs</span>
        </b>
      </div>
      <div className={styles.transactionHistory}>
        <div className={styles.transactionBg}>
          <div className={styles.background3} />
          <div className={styles.text2}>Transaction History</div>
          <div className={styles.text3}>See all</div>
        </div>
        <div className={styles.tid2}>
          <div className={styles.amount}>
            <div className={styles.div}>
              <div className={styles.div1}>$1,546</div>
              <div className={styles.div2}>.12</div>
            </div>
            <div className={styles.saphoreInc}>1 May 2022</div>
          </div>
          <div className={styles.name}>
            <div className={styles.chloeWallows}>Chloe Wallows</div>
            <div className={styles.saphoreInc}>Saphore Inc.</div>
          </div>
          <img className={styles.dpIcon} alt="" src="/dp.svg" />
        </div>
        <div className={styles.tid5}>
          <div className={styles.amount1}>
            <div className={styles.div}>
              <div className={styles.div1}>$1,546</div>
              <div className={styles.div5}>.12</div>
            </div>
            <div className={styles.saphoreInc}>1 May 2022</div>
          </div>
          <div className={styles.name1}>
            <div className={styles.chloeWallows}>Chloe Wallows</div>
            <div className={styles.saphoreInc}>Saphore Inc.</div>
          </div>
          <img className={styles.dpIcon1} alt="" src="/dp1.svg" />
        </div>
        <div className={styles.tid1}>
          <div className={styles.amount1}>
            <div className={styles.div}>
              <div className={styles.div1}>$1,546</div>
              <div className={styles.div5}>.12</div>
            </div>
            <div className={styles.saphoreInc}>1 May 2022</div>
          </div>
          <div className={styles.name1}>
            <div className={styles.chloeWallows}>Chloe Wallows</div>
            <div className={styles.saphoreInc}>Saphore Inc.</div>
          </div>
          <img className={styles.dpIcon2} alt="" src="/dp2.svg" />
        </div>
        <div className={styles.tid21}>
          <div className={styles.amount}>
            <div className={styles.div}>
              <div className={styles.div1}>$1,546</div>
              <div className={styles.div2}>.12</div>
            </div>
            <div className={styles.saphoreInc}>1 May 2022</div>
          </div>
          <div className={styles.name}>
            <div className={styles.chloeWallows}>Chloe Wallows</div>
            <div className={styles.saphoreInc}>Saphore Inc.</div>
          </div>
          <img className={styles.dpIcon} alt="" src="/dp.svg" />
        </div>
        <div className={styles.tid11}>
          <div className={styles.amount1}>
            <div className={styles.div}>
              <div className={styles.div1}>$1,546</div>
              <div className={styles.div5}>.12</div>
            </div>
            <div className={styles.saphoreInc}>1 May 2022</div>
          </div>
          <div className={styles.name1}>
            <div className={styles.chloeWallows}>Chloe Wallows</div>
            <div className={styles.saphoreInc}>Saphore Inc.</div>
          </div>
          <img className={styles.dpIcon2} alt="" src="/dp2.svg" />
        </div>
        <div className={styles.tid51}>
          <div className={styles.amount1}>
            <div className={styles.div}>
              <div className={styles.div1}>$1,546</div>
              <div className={styles.div5}>.12</div>
            </div>
            <div className={styles.saphoreInc}>1 May 2022</div>
          </div>
          <div className={styles.name1}>
            <div className={styles.chloeWallows}>Chloe Wallows</div>
            <div className={styles.saphoreInc}>Saphore Inc.</div>
          </div>
          <img className={styles.dpIcon1} alt="" src="/dp1.svg" />
        </div>
      </div>
      <div className={styles.intro}>
        <div className={styles.greetings}>
          <b className={styles.title1}>Hi, Aditi</b>
          <div className={styles.group}>
            <b className={styles.title2}>Hi, Aditi</b>
            <div className={styles.title3}>Here is your Warehouse Overview</div>
          </div>
        </div>
        <img className={styles.profilePicIcon} alt="" src="/profile-pic.svg" />
      </div>
      <div className={styles.summary}>
        <div className={styles.summaryChild} />
        <div className={styles.button}>
          <img className={styles.icon} alt="" src="/icon5.svg" />
          <div className={styles.createAContract}>warehouseID</div>
          <img className={styles.icon} alt="" src="/icon5.svg" />
        </div>
        <div className={styles.charts}>
          <div className={styles.legend}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.orderParent}>
                <div className={styles.order}>Purchase</div>
                <div className={styles.div18}>234</div>
              </div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.orderParent}>
                <div className={styles.order}>sales</div>
                <div className={styles.div18}>95</div>
              </div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.orderParent}>
                <div className={styles.order}>return</div>
                <div className={styles.div18}>37</div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.rectangleDiv} />
              <div className={styles.orderParent}>
                <div className={styles.order}>return</div>
                <div className={styles.div18}>181</div>
              </div>
            </div>
          </div>
          <div className={styles.pieChart}>
            <div className={styles.bg} />
            <div className={styles.div22} />
            <div className={styles.div23} />
            <div className={styles.div24} />
            <div className={styles.div25} />
            <div className={styles.div26}>
              <div className={styles.div27}>
                <span className={styles.span}>54</span>
                <span className={styles.span1}>%</span>
              </div>
            </div>
          </div>
        </div>
        <b className={styles.title4}>warehouse Name</b>
        <div className={styles.title5}>
          <div className={styles.orderSummary}> Summary</div>
          <div className={styles.from131March}>From 1-31 March, 2022</div>
        </div>
      </div>
      <div className={styles.sidePanel}>
        <div className={styles.sidePannel} />
        <div className={styles.light}>
          <div className={styles.legend}>
            <div className={styles.legend}>
              <div className={styles.background4} />
              <div className={styles.text4}>Partner</div>
            </div>
          </div>
        </div>
        <div className={styles.light1} onClick={onLightContainer1Click}>
          <div className={styles.legend}>
            <div className={styles.buttonPrimary3}>
              <div className={styles.background4} />
              <div className={styles.text4}>Report</div>
            </div>
          </div>
        </div>
        <div className={styles.light2} onClick={onLightContainer2Click}>
          <div className={styles.legend}>
            <div className={styles.legend}>
              <div className={styles.background4} />
              <div className={styles.text4}>Inventory</div>
            </div>
          </div>
        </div>
        <div className={styles.light3} onClick={onLightContainer3Click}>
          <div className={styles.legend}>
            <div className={styles.legend}>
              <div className={styles.background4} />
              <div className={styles.text4}>Orders</div>
            </div>
          </div>
        </div>
        <div className={styles.sideBarButtons} onClick={onSideBarButtonsClick}>
          <div className={styles.legend}>
            <img
              className={styles.backgroundIcon}
              alt=""
              src="/background1.svg"
            />
            <div className={styles.signupText}>Dashboard</div>
          </div>
        </div>
      </div>
      <div className={styles.backButton}>
        <div className={styles.background8} />
        <div className={styles.text8}>Back</div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      </div>
      <div className={styles.button2} onClick={onButtonContainerClick}>
        <div className={styles.text9}>Leave warehouse</div>
      </div>
    </div>
  );
};

export default Dashboard;
