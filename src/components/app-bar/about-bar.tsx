type AboutBarProps = {
  closeBar: () => void;
};

export default function AboutBar(props: AboutBarProps) {
  return (
    <div className="bg-green-500">
      <p>About</p>
    </div>
  );
}
