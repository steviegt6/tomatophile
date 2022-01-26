import notifcationheader from "../styles/components/notificationheader.module.scss";

export declare type NotifcationHeaderProps = {
  text: String;
  color: String;
};

export function NotificationHeader({ text, color }: NotifcationHeaderProps) {
  return (
    <div className={notifcationheader.header}>
      <p>Test</p>
    </div>
  );
}
