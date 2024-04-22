import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ViewpdtPAGE.module.css";

const ViewpdtPAGE = () => {
  const navigate = useNavigate();

  const onButtonContainer1Click = useCallback(() => {
    navigate("/inventory-page");
  }, [navigate]);

  return (
    <div className={styles.viewpdtPage}>
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
      <div className={styles.stocksviewEdit}>
        <div className={styles.stockInterface}>
          <div className={styles.background1} />
          <div className={styles.productAParent}>
            <div className={styles.productA}>Product A</div>
            <div className={styles.productId}>product id</div>
            <div className={styles.status}>
              <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
              <div className={styles.inStock}>in stock</div>
            </div>
          </div>
          <img
            className={styles.closeCircleIcon}
            alt=""
            src="/closecircle.svg"
          />
        </div>
        <div className={styles.productAParent}>
          <div className={styles.productA}>Product A</div>
          <div className={styles.productId}>product id</div>
          <div className={styles.status}>
            <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
            <div className={styles.inStock}>in stock</div>
          </div>
        </div>
        <img className={styles.closeCircleIcon} alt="" src="/closecircle.svg" />
        <div className={styles.button}>
          <div className={styles.text}>Edit</div>
          <div className={styles.background2} />
        </div>
        <div className={styles.button1} onClick={onButtonContainer1Click}>
          <div className={styles.text}>Close</div>
          <div className={styles.background2} />
        </div>
        <div className={styles.pdtDetails}>
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
            <div className={styles.inputTextLabel}>Price</div>
            <div className={styles.inputField}>
              <div className={styles.text2}>
                <div className={styles.typeHere}>Type here</div>
                <img className={styles.icon} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.textInputs}>
            <div className={styles.inputTextLabel}>Description</div>
            <div className={styles.inputField}>
              <div className={styles.text2}>
                <div className={styles.typeHere}>Type here</div>
                <img className={styles.icon} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.dropdowns}>
            <div className={styles.inputTextLabel}>Supplier</div>
            <div className={styles.inputField}>
              <div className={styles.text2}>
                <div className={styles.typeHere}>Type here</div>
                <img className={styles.icon} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.dropdowns}>
            <div className={styles.inputTextLabel}>Minimum stock</div>
            <div className={styles.inputField}>
              <div className={styles.text2}>
                <div className={styles.typeHere}>Type here</div>
                <img className={styles.icon} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.dropdowns}>
            <div className={styles.inputTextLabel}>Current Stock</div>
            <div className={styles.inputField}>
              <div className={styles.text2}>
                <div className={styles.typeHere}>Type here</div>
                <img className={styles.icon} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.dropdowns}>
            <div className={styles.inputTextLabel}>Brand</div>
            <div className={styles.inputField}>
              <div className={styles.text2}>
                <div className={styles.typeHere}>Type here</div>
                <img className={styles.icon} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.dropdowns}>
            <div className={styles.inputTextLabel}>Category</div>
            <div className={styles.inputField}>
              <div className={styles.text9}>
                <div className={styles.dropdownOption}>Dropdown option</div>
                <img className={styles.icon7} alt="" src="/icon.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewpdtPAGE;
