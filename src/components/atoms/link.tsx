import React, { ReactElement } from "react";

function Link({ href, children }: { href: string; children: ReactElement }) {
  return <a href={href}>{children}</a>;
}

export default Link;
