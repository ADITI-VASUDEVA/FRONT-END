import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InventoryPage.module.css";

const InventoryPage = () => {
  const navigate = useNavigate();

  const onAddPdtButtonClick = useCallback(() => {
    navigate("/new-product-page");
  }, [navigate]);

  const onLightContainer1Click = useCallback(() => {
    navigate("/partner-page");
  }, [navigate]);

  const onSideBarButtonsClick = useCallback(() => {
    navigate("/inventory-page");
  }, [navigate]);

  const onLightContainer2Click = useCallback(() => {
    navigate("/order-page");
  }, [navigate]);

  const onLightContainer3Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/edit-stock-page");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/viewpdt-page");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/edit-stock-page");
  }, [navigate]);

  const onButtonContainer12Click = useCallback(() => {
    navigate("/viewpdt-page");
  }, [navigate]);

  return (
    <div className={styles.inventoryPage}>
      <div className={styles.addPdtButton} onClick={onAddPdtButtonClick}>
        <div className={styles.background} />
        <div className={styles.text}>Add New Product +</div>
      </div>
      <div className={styles.sideBar}>
        <div className={styles.button}>
          <img
            className={styles.backgroundIcon}
            alt=""
            src="/background2.svg"
          />
          <div className={styles.signupText}>Clear List</div>
        </div>
      </div>
      <div className={styles.exportButton}>
        <div className={styles.text1}>Export</div>
        <div className={styles.background1} />
        <img className={styles.sharefillIcon} alt="" src="/sharefill.svg" />
      </div>
      <div className={styles.backButton}>
        <div className={styles.background} />
        <div className={styles.text2}>Back</div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      </div>
      <div className={styles.navbar}>
        <div className={styles.background3} />
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
      <div className={styles.sidePanel}>
        <div className={styles.sidePannel} />
        <div className={styles.light}>
          <div className={styles.button}>
            <div className={styles.button}>
              <div className={styles.background4} />
              <div className={styles.text3}>Partner</div>
            </div>
          </div>
        </div>
        <div className={styles.light1} onClick={onLightContainer1Click}>
          <div className={styles.button}>
            <div className={styles.buttonPrimary3}>
              <div className={styles.background4} />
              <div className={styles.text3}>Report</div>
            </div>
          </div>
        </div>
        <div className={styles.sideBarButtons} onClick={onSideBarButtonsClick}>
          <div className={styles.button}>
            <img
              className={styles.backgroundIcon}
              alt=""
              src="/background1.svg"
            />
            <div className={styles.signupText1}>Inventory</div>
          </div>
        </div>
        <div className={styles.light2} onClick={onLightContainer2Click}>
          <div className={styles.button}>
            <div className={styles.button}>
              <div className={styles.background4} />
              <div className={styles.text3}>Orders</div>
            </div>
          </div>
        </div>
        <div className={styles.light3} onClick={onLightContainer3Click}>
          <div className={styles.button}>
            <div className={styles.button}>
              <div className={styles.background4} />
              <div className={styles.text3}>Dashboard</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.titlebar}>
        <div className={styles.button}>
          <div className={styles.titleBarChild} />
          <div className={styles.idParent}>
            <div className={styles.id}>ID</div>
            <div className={styles.name}>Name</div>
            <div className={styles.name}>brand</div>
            <div className={styles.name}>Supplier</div>
            <div className={styles.price}>Price</div>
            <div className={styles.status}>Status</div>
            <div className={styles.stocks}>Stocks</div>
          </div>
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.productRow}>
          <div className={styles.productRowChild} />
          <div className={styles.parent}>
            <div className={styles.div}>1</div>
            <div className={styles.productA}>product A</div>
            <div className={styles.productA}>lorem ipsum</div>
            <div className={styles.productA}>200</div>
            <div className={styles.div2}>400</div>
            <div className={styles.status1}>
              <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
              <div className={styles.inStock}>in stock</div>
            </div>
            <div className={styles.div2}>40</div>
            <div className={styles.button2} onClick={onButtonContainerClick}>
              <div className={styles.text7}>Edit Stock</div>
              <div className={styles.background8} />
            </div>
            <div className={styles.button2} onClick={onButtonContainer1Click}>
              <div className={styles.text7}>View</div>
              <div className={styles.background8} />
            </div>
            <div className={styles.editDelete}>
              <img
                className={styles.deleteFill0Wght400Grad0OpsIcon}
                alt=""
                src="/delete-fill0-wght400-grad0-opsz24-1.svg"
              />
              <img
                className={styles.editFill0Wght400Grad0Opsz2Icon}
                alt=""
                src="/edit-fill0-wght400-grad0-opsz24-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.productRow}>
          <div className={styles.productRowChild} />
          <div className={styles.parent}>
            <div className={styles.div}>1</div>
            <div className={styles.productA}>product A</div>
            <div className={styles.productA}>lorem ipsum</div>
            <div className={styles.productA}>200</div>
            <div className={styles.div2}>400</div>
            <div className={styles.status1}>
              <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
              <div className={styles.inStock}>in stock</div>
            </div>
            <div className={styles.div2}>40</div>
            <div className={styles.button2} onClick={onButtonContainer2Click}>
              <div className={styles.text7}>Edit Stock</div>
              <div className={styles.background8} />
            </div>
            <div className={styles.button2} onClick={onButtonContainer12Click}>
              <div className={styles.text7}>View</div>
              <div className={styles.background8} />
            </div>
            <div className={styles.editDelete}>
              <img
                className={styles.deleteFill0Wght400Grad0OpsIcon}
                alt=""
                src="/delete-fill0-wght400-grad0-opsz24-1.svg"
              />
              <img
                className={styles.editFill0Wght400Grad0Opsz2Icon}
                alt=""
                src="/edit-fill0-wght400-grad0-opsz24-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dropdowns}>
        <div className={styles.inputField}>
          <div className={styles.text11}>
            <div className={styles.dropdownOption}>Dropdown option</div>
            <img className={styles.filterIcon} alt="" src="/filter.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
