import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
function BuyLink({ linkItem }) {
  const { name, url } = linkItem;
  return (
    <div className="flex items-center ">
      <a href={url} target="_blank" rel="noopenner noreferrer">
        {name}
      </a>
      <FaExternalLinkAlt className="ml-1" />
    </div>
  );
}

export default BuyLink;
