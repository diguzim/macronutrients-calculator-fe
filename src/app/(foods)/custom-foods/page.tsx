"use client";

import PageTitle from "../../../components/page-title/page-title";
import withAuth from "../../../utils/hocs/with-auth";

function CustomFoodsPage() {
  return (
    <div className="flex flex-col gap-2">
      <PageTitle title="Custom Foods" />
    </div>
  );
}

export default withAuth(CustomFoodsPage);
