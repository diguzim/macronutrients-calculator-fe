import CalculateIcon from "@mui/icons-material/Calculate";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SearchIcon from "@mui/icons-material/Search";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import Link from "next/link";

import Button from "../button/button";
import Header from "../header/header";

type Page = {
  title: string;
  link: string;
  icon: React.ElementType;
};

type GroupedPage = {
  title: string;
  pages: Page[];
};

const GroupedPages: GroupedPage[] = [
  {
    title: "Nutritional Data",
    pages: [
      {
        title: "Search foods",
        link: "/search-foods",
        icon: SearchIcon,
      },
    ],
  },
  {
    title: "Calculators",
    pages: [
      {
        title: "Recipe calculator",
        link: "/recipe-nutrition-calculator",
        icon: CalculateIcon,
      },
    ],
  },
  {
    title: "Private Space",
    pages: [
      {
        title: "Meals tracker",
        link: "/meals",
        icon: RestaurantIcon,
      },
      {
        title: "Recipes",
        link: "/recipes",
        icon: SoupKitchenIcon,
      },
    ],
  },
];

type AboutBarProps = {
  closeBar: () => void;
};

export default function ToolsBar(props: AboutBarProps) {
  return (
    <div className="relative z-10">
      <div className="absolute bg-white w-full flex flex-row justify-center gap-12 border-t-2 border-b-2 border-gray-300 py-6 shadow-2xl">
        {GroupedPages.map((group) => (
          <div key={group.title} className="flex flex-col">
            <Header size={2} className="mb-4">
              {group.title}
            </Header>
            {group.pages.map((page) => (
              <Link key={page.title} href={page.link} passHref>
                <Button
                  variant="text"
                  startIcon={<page.icon />}
                  onClick={props.closeBar}
                  size="large"
                  sx={{
                    color: "inherit",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
