"use client";

import Button from "../../../components/button/button";
import Link from "../../../components/link/link";
import withAuth from "../../../utils/hocs/with-auth";

function Page() {
  return (
    <div className="flex flex-col gap-2 p-2">
      <Link href={""}>
        <Button>Create food</Button>
      </Link>
    </div>
  );
}

export default withAuth(Page);
