import styles from "./ChatPage.module.css";
import SideMenu from "../../components/Chat/SideMenue/SideMenu";
import ContactsSection from "../../components/Chat/ContactsSection/ContactsSection";
import ChatSection from "../../components/Chat/ChatSection/ChatSection";

const ChatPage = () => {
  return (
    <div className={styles["container"]}>
      <SideMenu />

      <ContactsSection />

      <ChatSection />
    </div>
  );
};

export default ChatPage;
