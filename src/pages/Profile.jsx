import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile}>
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
      <div className={styles.media}>
        <img
          className={styles.mediaBackgroundIcon}
          alt=""
          src="/media-background2@2x.png"
        />
        <div className={styles.mediaBackground} />
        <div className={styles.intro}>
          <div className={styles.greetings}>
            <b className={styles.title}>Hi, Aditi</b>
          </div>
          <img
            className={styles.profilePicIcon}
            alt=""
            src="/profile-pic1.svg"
          />
        </div>
        <div className={styles.credentialsParent}>
          <div className={styles.credentials}>
            <div className={styles.username}>
              <div className={styles.inputTextLabel}>Name</div>
              <div className={styles.inputField}>
                <div className={styles.text}>
                  <div className={styles.typeHere}>name</div>
                  <img className={styles.icon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.credentials}>
            <div className={styles.username}>
              <div className={styles.inputTextLabel}>Email</div>
              <div className={styles.inputField}>
                <div className={styles.text}>
                  <div className={styles.typeHere}>Email</div>
                  <img className={styles.icon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.credentials}>
            <div className={styles.username}>
              <div className={styles.inputTextLabel}>Phone Number</div>
              <div className={styles.inputField}>
                <div className={styles.text}>
                  <div className={styles.typeHere}>Phone Number</div>
                  <img className={styles.icon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dropdowns}>
            <div className={styles.inputTextLabel}>Company Role</div>
            <div className={styles.inputField3}>
              <div className={styles.text3}>
                <div className={styles.dropdownOption}>Dropdown option</div>
                <img className={styles.icon3} alt="" src="/icon.svg" />
              </div>
            </div>
          </div>
          <div className={styles.credentials}>
            <div className={styles.username}>
              <div className={styles.inputTextLabel}>Warehouse</div>
              <div className={styles.inputField}>
                <div className={styles.text}>
                  <div className={styles.typeHere}>Enter username</div>
                  <img className={styles.icon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addPdtButton}>
          <div className={styles.text5}>Edit Profile</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
