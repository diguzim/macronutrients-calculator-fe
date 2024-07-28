"use client";

import PageTitle from "../../../components/page-title/page-title";
import withAuth from "../../../utils/hocs/with-auth";

function Page() {
  return (
    <div className="flex flex-col gap-2 bg-white p-2">
      <PageTitle title="Favorite Foods" />
    </div>
  );
}

export default withAuth(Page);
