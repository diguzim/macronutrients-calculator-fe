import Header from "../header/header";

type PageTitleProps = {
  title: string;
  description?: string;
};

export default function PageTitle(props: PageTitleProps) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Header size={1}>{props.title}</Header>
      {props.description && <p>{props.description}</p>}
    </div>
  );
}
