import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NewProductPage.module.css";

const NewProductPage = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/inventory-page");
  }, [navigate]);

  return (
    <div className={styles.newProductPage}>
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
      <div className={styles.newProduct}>
        <div className={styles.productForm}>
          <div className={styles.textInputs}>
            <div className={styles.inputTextLabel}>Name</div>
            <div className={styles.inputField}>
              <div className={styles.text}>
                <div className={styles.typeHere}>Type here</div>
                <img className={styles.icon} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.textInputs}>
            <div className={styles.inputTextLabel}>description</div>
            <div className={styles.inputField}>
              <div className={styles.text}>
                <div className={styles.typeHere}>Type here</div>
                <img className={styles.icon} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.textInputs}>
            <div className={styles.inputTextLabel}>Category</div>
            <div className={styles.inputField}>
              <div className={styles.text2}>
                <div className={styles.dropdownOption}>Dropdown option</div>
                <img className={styles.icon2} alt="" src="/icon.svg" />
              </div>
            </div>
          </div>
          <div className={styles.textInputs}>
            <div className={styles.inputTextLabel}>Brand</div>
            <div className={styles.inputField}>
              <div className={styles.text}>
                <div className={styles.typeHere}>Type here</div>
                <img className={styles.icon} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.textInputs}>
            <div className={styles.inputTextLabel}>Unit Per stock</div>
            <div className={styles.inputField}>
              <div className={styles.text}>
                <div className={styles.typeHere}>Type here</div>
                <img className={styles.icon} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.textInputs}>
            <div className={styles.inputTextLabel}>minimum stock</div>
            <div className={styles.inputField}>
              <div className={styles.text}>
                <div className={styles.typeHere}>Type here</div>
                <img className={styles.icon} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.textInputs}>
            <div className={styles.inputTextLabel}>Supplier</div>
            <div className={styles.inputField}>
              <div className={styles.text}>
                <div className={styles.typeHere}>Type here</div>
                <img className={styles.icon} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.textInputs}>
            <div className={styles.inputTextLabel}>Price</div>
            <div className={styles.inputField}>
              <div className={styles.text}>
                <div className={styles.typeHere}>Type here</div>
                <img className={styles.icon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <b className={styles.title}>New Product</b>
        <div className={styles.button} onClick={onButtonContainerClick}>
          <div className={styles.text8}>Add</div>
        </div>
        <div className={styles.button1}>
          <div className={styles.text8}>Cancel</div>
        </div>
      </div>
    </div>
  );
};

export default NewProductPage;
