import { Badge } from "reactstrap";
import specialStyles from "./SpecialStyles.module.css";

/**status bage
 * @param status can be pending , completed ,in-progress
 */
const StatusBadge = ({ status }) => {
  //change these parameters to customize
  const statuses = [
    {
      className: specialStyles?.in_progress_status,
      title: "In Progress",
      type: "in-progress",
    },
    {
      className: specialStyles?.completed_status,
      title: "Completed",
      type: "completed",
    },
    {
      className: specialStyles?.pending_status,
      title: "Pending",
      type: "pending",
    },
  ];
  //

  const currentStatusParams = statuses?.find((item) => item?.type === status);

  return (
    <div
      className={`${specialStyles?.status_badge} ${currentStatusParams?.className} `}
    >
      {currentStatusParams?.title}
    </div>
  );
};

export default StatusBadge;
