import Header from "../../../components/header/header";

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  const { id } = params;

  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-2 items-center">
        <Header size={1}>{id}</Header>
      </header>
    </div>
  );
}
