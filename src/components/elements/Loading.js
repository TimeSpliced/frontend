import React from "react";
import { brandColors } from "../../utils/utilities";

import Loader from "react-loader-spinner";

const Loading = () => (
  <Loader type="Puff" color={brandColors.lightBlue} height={100} width={100} />
);

export default Loading;
