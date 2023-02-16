import { STATUS, TRANSLATE_STATUS } from "../interfaces";

export const transalateStatus = (status: STATUS) => {

  switch (status) {
    case STATUS.READY:
      return TRANSLATE_STATUS.READY;
    case STATUS.ONGOING:
      return TRANSLATE_STATUS.ONGOING;
    case STATUS.EDITING:
      return TRANSLATE_STATUS.EDITING;
    case STATUS.EXECUTED:
      return TRANSLATE_STATUS.EXECUTED;
    case STATUS.CREATED:
      return TRANSLATE_STATUS.CREATED;
  }

}

export const getColorByStatus = (status: STATUS) => {

  switch (status) {
    case STATUS.READY:
      return "ready";
    case STATUS.ONGOING:
      return "warning";
    case STATUS.EDITING:
      return "editing";
    case STATUS.EXECUTED:
      return "default";
    case STATUS.CREATED:
      return "default";
  }

}

