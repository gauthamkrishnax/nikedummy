import React, { useState } from 'react';
import { UilAngleDown } from '@iconscout/react-unicons'
import { UilAngleUp } from '@iconscout/react-unicons'

import styles from "./Accordion.module.scss"

const Accordion = ({ children, title, isExpand = false }) => {
  const [expand, setExpand] = useState(isExpand);
  return (
    <div>
      <div className={styles.box} onClick={() => setExpand(expand => !expand)}>
        <span className="title">{title}</span>
        <span className="icon">
            {!expand ? <UilAngleDown /> : <UilAngleUp />}
        </span>
        <div className="clearfix"></div>
      </div>
      {expand && <div className="content">{children}</div>}
    </div>
  )
}

export default Accordion;