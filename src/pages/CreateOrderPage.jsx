import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateOrderPage.module.css";

const CreateOrderPage = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/order-page");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/edit-cart-page");
  }, [navigate]);

  return (
    <div className={styles.createOrderPage}>
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
      <div className={styles.editOrderForm}>
        <div className={styles.buttonsInOrder}>
          <b className={styles.title}>Order</b>
          <div className={styles.productForm}>
            <div className={styles.textInputs}>
              <div className={styles.inputTextLabel}>Partner Id</div>
              <div className={styles.inputField}>
                <div className={styles.text}>
                  <div className={styles.typeHere}>Type here</div>
                  <img className={styles.icon} alt="" />
                </div>
              </div>
            </div>
            <div className={styles.textInputs}>
              <div className={styles.inputTextLabel}>Type of order</div>
              <div className={styles.inputField}>
                <div className={styles.text1}>
                  <div className={styles.dropdownOption}>Dropdown option</div>
                  <img className={styles.icon1} alt="" src="/icon.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.button} onClick={onButtonContainerClick}>
            <div className={styles.text2}>Save</div>
          </div>
          <div className={styles.button1}>
            <div className={styles.text2}>Cancel</div>
          </div>
          <div className={styles.button} onClick={onButtonContainer2Click}>
            <div className={styles.text2}>Cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderPage;
