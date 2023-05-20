export default function InterestToggleList({
  interest,
  onSelect,
}: {
  interest: string;
  onSelect: (interest: string) => void;
}) {
  const handleClick = () => {
    onSelect(interest);
  };
  return (
    <>
      <li className="col-center w-40 border-b" onClick={handleClick}>
        {interest}
      </li>
    </>
  );
}
