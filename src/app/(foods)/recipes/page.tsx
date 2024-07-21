"use client";

import Button from "../../../components/button/button";
import Link from "../../../components/link/link";
import PageTitle from "../../../components/page-title/page-title";
import withAuth from "../../../utils/hocs/with-auth";

function Page() {
  return (
    <div className="flex flex-col gap-2 bg-white p-2">
      <PageTitle title="Recipes" />
      <Link href={""}>
        <Button>Create food</Button>
      </Link>
    </div>
  );
}

export default withAuth(Page);
