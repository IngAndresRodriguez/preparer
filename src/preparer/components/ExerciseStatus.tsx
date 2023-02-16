import { Chip } from "@mui/material";
import { STATUS } from "../../interfaces";
import { transalateStatus, getColorByStatus } from "../../helpers";

export interface ExerciseStatusProps {
  status: STATUS;
}

export const ExerciseStatus = ({ status, ...rest }: ExerciseStatusProps) => {

  const translatedStatus = transalateStatus(status);
  const color = getColorByStatus(status);

  return (
    <Chip
      label={translatedStatus}
      color={color}
      sx={{
        borderRadius: '10px',
        fontSize: 'smaller', width: '100%'
      }} />
  )
}
