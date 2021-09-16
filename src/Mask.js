import cn from "classnames";
import * as FullStory from "@fullstory/browser";

/**
 * FullStory masking handler.
 * 
 * 1. Given we use private by default, there is no need to explicitly defined fs-mask.
 * 2. If we want to exclude, instead of record a grey page, we simply shutdown
 *    recording and restart when needed.
 * 3. If we unmask, the unmasking should only impact the children content.
 */
const Mask = ({ exclude, unmask, children }) => {
  const className = cn({
    "fs-unmask": unmask,
  });

  if (exclude) {
    FullStory.shutdown();
  } else {
    FullStory.restart();
  }

  return <div {...{ className }}>{children}</div>;
};

export default Mask;
